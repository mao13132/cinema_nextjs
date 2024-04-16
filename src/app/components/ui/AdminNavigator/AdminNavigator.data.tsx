import { getAdminHomeUrl, getAdminUrl } from "@/config/url.config";
import { AdminNavItemProps } from "./AdminNavItem/AdminNavItem.props";

export const navItems: AdminNavItemProps[] = [
    {
        title: 'Статистика',
        link: getAdminHomeUrl(),
    },
    {
        title: 'Пользователи',
        link: getAdminUrl('users'),
    },
    {
        title: 'Фильмы',
        link: getAdminUrl('movies'),
    },
    {
        title: 'Актёры',
        link: getAdminUrl('actors'),
    },
    {
        title: 'Жанры',
        link: getAdminUrl('genres'),
    }
];