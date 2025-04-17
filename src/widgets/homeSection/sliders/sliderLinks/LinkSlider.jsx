// import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "./sliderLinks.scss";
// import axios from "axios"; 

export const LinkSlider = () => {
//   const [links, setLinks] = useState([]);

  const links =[
        { "id": 1, "text": " Новость дня!", "url": "https://news.com" },
        { "id": 2, "text": " Новые курсы!", "url": "https://courses.com" },
        { "id": 3, "text": " Важное объявление!", "url": "https://academy.com" } 
  ]


//   useEffect(() => {
//     axios.get("https://api.example.com/marquee-links") 
//       .then(response => {
//         setLinks(response.data); // Ожидаемый формат: [{ id: 1, text: "Новость", url: "https://..." }]
//       })
//       .catch(error => console.error("Ошибка загрузки данных:", error));
//   }, []);



  return (
    <div className="container">
    <div className="marquee-container">
      <Marquee speed={50} gradient={true} gradientColor={[0, 0, 0]} gradientWidth={50}>
        {links.map((item) => (
          <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="marquee-link">
            {item.text}
          </a>
        ))}
      </Marquee>

    </div>
    </div>
  );
};


