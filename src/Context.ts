import { createContext, useContext } from 'react';

export type GlobalContext = {
    filter: string
    setFilter: (a: string) => void
}
export const MyGlobalContext = createContext<GlobalContext>({
    filter: '',
    setFilter: () => { }
});

export const useGlobalContext=()=>useContext(MyGlobalContext)