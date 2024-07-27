import {ThemeContext} from "../providers/ThemeProvider.jsx";
import {useContext} from "react";
import {IoHeart} from "react-icons/io5";

const Footer = () => {
    const { currentTheme } = useContext(ThemeContext)

    return (
        <>
            <footer className="mt-auto">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center flex justify-center transition duration-300">
                    <span className="inline-flex text-sm text-black text-center dark:text-white transition duration-300">
                         Made with&nbsp;<IoHeart className={`size-5 transition duration-300 ${currentTheme === "dark" ? "text-gray-100" : "text-neutral-950"}`}/>&nbsp;by
                    </span>
                    <span className="text-sm text-yellow-600 dark:text-yellow-500 font-extrabold text-center transition duration-300">
                        &nbsp;Nureka Rodrigo
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
