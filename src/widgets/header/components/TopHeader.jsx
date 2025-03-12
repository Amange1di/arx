import { BiSolidPhoneCall } from "react-icons/bi";
import { RiMapPinFill } from "react-icons/ri";
import { WiTime3 } from "react-icons/wi";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import "../styles/topHeader.scss"
export const TopHeader = () => {
    return (
        <div className="header_top">
            <div className="container">
                <div>
                    <BiSolidPhoneCall className="header_top_icon" />
                    <a href="">+996704589591</a>
                </div>
                <div>
                    <RiMapPinFill className="header_top_icon" />
                    <a href="https://go.2gis.com/vkwNw">г.Бишкек-ул. А.Юнусова 134</a>
                </div>
                <div>
                    <WiTime3 className="header_top_icon" />
                    <p>Понедельник-Суббота 10:00-22:00</p>
                </div>
                <div>
                    <LuInstagram className="header_top_icon" />
                    <FaTwitter className="header_top_icon" />
                    <FaFacebook className="header_top_icon" />
                    <FaWhatsapp className="header_top_icon" />
                </div>
            </div>
        </div>
    );
};
