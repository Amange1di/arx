import "./gallery.scss"
import { useState, useEffect } from "react";
import gallery from "../../../shared/images/gallery.png";

const facedata = [
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
    { gallery: gallery, p: "20.10.2024" },
];
const isThreeImages = facedata.length === 3;
export const GalleryImg = () => {
    const imageSizes = [
        { width: 287, height: 220 },
        { width: 665, height: 430 },
        { width: 433, height: 510 },
        { width: 287, height: 220, offset: true },
        { width: 287, height: 220, offset: true },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 665, height: 430 },
        { width: 337, height: 250 },
        { width: 287, height: 220, offset: true },
        { width: 287, height: 220, offset: true },
        { width: 413, height: 510 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
        { width: 287, height: 220 },
    ];

    const getImageSize = () => {
        if (facedata.length === 1) {
            return { width: 665, height: 430 };
        } else if (facedata.length === 2 || facedata.length === 3) {
            return { width: 413, height: 520 };
        } else if (facedata.length === 4) {
            return { width: 287, height: 220 };
        } else {
            return imageSizes;
        }
    };

    const imageSize = getImageSize();

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 780);


    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 780);
        };


        window.addEventListener("resize", handleResize);


        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="gallery container">
            <div className={`gallery container ${isThreeImages ? "gallery--three-images" : ""}`}></div>
            <div className="gallery_select">
                <div>
                    <select>
                        <option>День</option>
                    </select>
                    <select>
                        <option>Месяц</option>
                    </select>
                    <select>
                        <option>Год</option>
                    </select>
                </div>
            </div>

            <div className="gallery_group">
                {facedata.map((item, index) => (
                    <div
                        className={`gallery_card 
                        ${index % 2 === 0 ? "gallery_card--large" : "gallery_card--small"} 
                        ${(index === 5 || index === 6 || index === 7 || index === 8) ? "gallery_card--one" : ""} 
                        ${(index === 3 || index === 4 || index === 11 || index === 12) ? "gallery_card--two" : ""} 
                        ${index === 10 ? "gallery_card--tri" : ""}`}


                        key={index}
                        style={{
                            width: imageSizes[index]?.width || "auto"
                            ,
                            height: imageSizes[index]?.height || "auto",
                            marginTop: imageSizes[index]?.offset && !isSmallScreen ? "330px" : "",

                        }}
                    >
                        <img className="gallery_img" src={item.gallery} alt="gallery" />
                        <p className="gallery_data">{item.p}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

