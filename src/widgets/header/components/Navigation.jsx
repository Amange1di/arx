import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const headerMenu = [
    { name: "Главное", path: "/" },
    { name: "Об академии", path: "/about-academy" },
    { name: "Руководство", path: "/guide" },
    { name: "Образование", path: "/education" },
    { name: "Наука", path: "/science" },
    { name: "Деятельность", path: "/activity" },
    { name: "Студенты", path: "/students" },
    { name: "Абитуриентам", path: "/applicants" },
];

export const Navigation = ({ onMenuItemClick, className }) => {
    const { t } = useTranslation(); 

    return (
        <nav className={className}>
            {headerMenu.map((page) => (
                <NavLink
                    key={page.name}
                    to={page.path}
                    className={({ isActive }) =>
                        isActive ? "header_bottom_link nav-active" : "header_bottom_link"
                    }
                    onClick={onMenuItemClick}
                >
                    {t(page.name)} 
                </NavLink>
            ))}
        </nav>
    );
};
