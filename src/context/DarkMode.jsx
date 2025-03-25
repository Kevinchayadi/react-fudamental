import { Children, createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = (state) => {
    const {children} = state
    const [isDarkMode, setDarkMode] = useState(false);

    return(
        //isi dari value yang akan diaccess childnya!!
        <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;