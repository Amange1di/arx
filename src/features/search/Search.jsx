import "./search.scss"
import { IoSearch,IoClose } from "react-icons/io5";

export const Search = ({ onClose }) => {
    return (
        <div className="search">
            <input type="text" placeholder="Поиск" autoFocus />
            <button><IoSearch /></button>
            <button className="close" onClick={onClose}><IoClose/></button>
        </div>
    )
}
