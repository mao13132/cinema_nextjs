export const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>

export const getKeys2 = <T>(obj: Array<keyof T>) => Object.keys(obj);

export const getKeys3 = <T>(obj: T) => Object.keys(obj) as Array<keyof T>
