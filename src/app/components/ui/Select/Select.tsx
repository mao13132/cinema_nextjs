import styles from './Select.module.css';
import '../../../../app/assets/styles/select.css';
import cn from 'classnames';
import { IOption, SelectProps } from './Select.props';

import makeAnimated from 'react-select/animated';
import { OnChangeValue } from 'react-select';
import ReactSelect from 'react-select';

const animatedComponents = makeAnimated();

const Select = ({ placeholder, errors, isMulti, options, field, isLoading, className, ...props }: SelectProps): JSX.Element => {

    const onChangeSelect = (newValue: unknown | OnChangeValue<IOption, boolean>) => {


        debugger
        field.onChange(isMulti ? (newValue as IOption[]).map(item => item.value) : (newValue as IOption).value)
    };


    const getValue = () => {

        if (field.value) {
            return isMulti ? options.filter(option => field.value.indexOf(option.value) >= 0) : options.find(option => option.value === field.value);
        } else {
            return isMulti ? [] : '';
        };
    };

    return (

        <div className={cn(styles['select-container'], className)} {...props}>

            <label>

                <span>{placeholder}</span>

                <ReactSelect
                    classNamePrefix='custom-select'
                    options={options}
                    value={getValue()}
                    isMulti={isMulti}
                    onChange={onChangeSelect}
                    components={animatedComponents}
                    isLoading={isLoading}


                />


                {errors && <div className={styles['error']}>{errors}</div>}

            </label>

        </div>
    );
};


export default Select;
