import "./search.scss"
import { IoSearch, IoClose } from "react-icons/io5";

export const Search = ({ onClose }) => {
    return (
        <>
            <div className="search-overlay" onClick={onClose}></div>
            <div className="search">
                <div>

                <input type="text" placeholder="Поиск" autoFocus />
                <button><IoSearch /></button>
                </div>
                <button className="close" onClick={onClose}><IoClose /></button>
            </div>
        </>
    )
}
