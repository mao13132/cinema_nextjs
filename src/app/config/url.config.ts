export const getAllMovieUrl = () => `/movie`;
export const getMovieUrl = (slug: string) => `/movie/${slug}`;
export const getGenreUrl = (slug: string) => `/genres/${slug}`;
export const getCategoryGenreUrl = (slug: string) => `/genre/${slug}`;
export const getActorUrl = (slug: string) => `/actor/${slug}`;
export const getActorByUrl = (slug: string) => `/actors/${slug}`;


export const getAdminUrl = (url: string) => `/manage/${url}`;
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1);
