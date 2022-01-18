import { createContext,FC} from "react";

type IContextValue = {
    name: string;
    age: number;
}

export const UserContext = createContext<IContextValue>({name: '',age:0})

export const UserProvider:FC = ({ children }) => {
    
    const contextValue:IContextValue = {
        name: 'testing',
        age: 20
    }
    
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}