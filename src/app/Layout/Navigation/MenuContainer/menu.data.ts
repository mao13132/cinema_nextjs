import { IMenu } from "../MenuItem/MenuItem.props";

export const firstMenu: IMenu = {
    title: 'Menu',
    items: [
        {
            icon: 'MdHome',
            link: '/',
            title: 'Главная'
        },
        {
            icon: 'MdExplore',
            link: '/genres',
            title: 'Discovery'
        },
        {
            icon: 'MdRefresh',
            link: '/fresh',
            title: 'Новинки'
        },
        {
            icon: 'MdLocalFireDepartment',
            link: '/trending',
            title: 'Trending now'
        }
    ]
}


export const userMenu: IMenu = {
    title: 'General',
    items: []
};

export const menus: IMenu[] = [firstMenu, userMenu];