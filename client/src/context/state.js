import { proxy } from 'valtio';


export const store = proxy({
    students: null,
    cooks: null,
    guards: null,
    rooms: null,
    cleaners: null
})

