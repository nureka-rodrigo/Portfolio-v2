import {ThemeContext} from "../providers/ThemeProvider.jsx";
import {useContext} from "react";

const Footer = () => {
    const { currentTheme } = useContext(ThemeContext)

    return (
        <>
            <footer className="mt-auto">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center flex justify-center transition duration-500">
                    <span className="text-sm text-black text-center dark:text-white transition duration-500">
                         Made with {currentTheme === "dark" ? "🤍" : "🖤"} by
                    </span>
                    <span className="text-sm text-yellow-600 dark:text-yellow-500 font-extrabold text-center transition duration-500">
                        &nbsp;Nureka Rodrigo
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
