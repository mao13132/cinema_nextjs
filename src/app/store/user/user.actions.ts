import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, IEmailPassword } from './user.interface'
import { authService } from '@/services/auth/auth.service'
import { toastr } from 'react-redux-toastr';
import { toastError } from '@/utils/toastError';
import { errorCatch } from 'api/api.helpers';

/* Регистрация. Типизация; первым передаём что мы будем возвращать, вторым объект который мы передаём!   thunkApi это функция для управления запросом и его state */
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/register', async ({ email, password }, thunkApi) => {
    try {
        const response = await authService.register(email, password);

        toastr.success('Registration', 'Completed successfully');

        return response.data;

    } catch (error) {

        toastError(error);
        return thunkApi.rejectWithValue(error);

    }
});

/* Авторизация */
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/login', async ({ email, password }, thunkApi) => {
    try {
        const response = await authService.login(email, password);

        toastr.success('Login', 'Completed login');

        return response.data;

    } catch (error) {

        toastError(error);
        return thunkApi.rejectWithValue(error);

    }
});

/* Выход */
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout();
});

/* Проверка авторизациия */
export const checkAuth = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/check-auth', async (_, thunkApi) => {
    try {
        const response = await authService.getNewTokens();

        return response.data;

    } catch (error) {

        if (errorCatch(error) === 'jwt expired') {
            toastr.error(
                'Logout',
                'Ваша токен авторизации вышел, попробуйте заново авторизоваться'
            );

            thunkApi.dispatch(logout());

        }

        return thunkApi.rejectWithValue(error);

    }
});

