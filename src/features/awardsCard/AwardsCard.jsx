import React from 'react'
import "./awardsCard.scss"
import certificate from "../../shared/images/certificate.png"
const AwardsData = [
  {
    id: 1,
    image: certificate,
    date: "Дата: Учреждена в 2021 году.",
    title: "Премия короля Абдаллы II за исламские исследования",
    description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество.",
    location: "Место: город  Амман, Иордания.",

  },
  {
    id: 1,
    image: certificate,
    date: "Дата: Учреждена в 2021 году.",
    title: "Премия короля Абдаллы II за исламские исследования",
    description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество.",
    location: "Место: город  Амман, Иордания.",

  },
  {
    id: 1,
    image: certificate,
    date: "Дата: Учреждена в 2021 году.",
    title: "Премия короля Абдаллы II за исламские исследования",
    description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество.",
    location: "Место: город  Амман, Иордания.",

  },
  {
    id: 1,
    image: certificate,
    date: "Дата: Учреждена в 2021 году.",
    title: "Премия короля Абдаллы II за исламские исследования",
    description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество.",
    location: "Место: город  Амман, Иордания.",

  },
  {
    id: 1,
    image: certificate,
    date: "Дата: Учреждена в 2021 году.",
    title: "Премия короля Абдаллы II за исламские исследования",
    description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество.",
    location: "Место: город  Амман, Иордания.",

  },
  {
    id: 1,
    image: certificate,
    date: "Дата: Учреждена в 2021 году.",
    title: "Премия короля Абдаллы II за исламские исследования",
    description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество.",
    location: "Место: город  Амман, Иордания.",

  },
  {
    id: 1,
    image: certificate,
    date: "Дата: Учреждена в 2021 году.",
    title: "Премия короля Абдаллы II за исламские исследования",
    description: "Присуждается за выдающиеся достижения в области исламских наук и их влияние на общество.",
    location: "Место: город  Амман, Иордания.",

  },
]
export const AwardsCard = () => {
  return (
    <div className="">
      {AwardsData.map((item, index) => (
        <div className='awardsCard' key={index}>
          <div className="awardsCard_img">
            <img src={certificate} alt="" />
          </div>
          <div className="awardsCard_text">
            <h2>  {item.date}</h2>
            <h3>  {item.title}</h3>
            <p>  {item.description}</p>
            <h4>  {item.location}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}
