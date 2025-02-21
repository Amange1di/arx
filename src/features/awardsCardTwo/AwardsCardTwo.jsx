import "./awardsCardTwo.scss"
import certificate from "../../shared/images/certificate.png"

const Academic = [
    {
        id: 1,
        image: certificate,
        date: "Октябрь 16 | 10:00 - 12:00",
        title: "Лучшее образовательное учреждение в области исламских наук",
        description: "Награда, присуждаемая за высокое качество образовательных программ, успехи в преподавании и развитии исламских дисциплин.",

        location: "Центральный зал, город Ош.",
    }]
export const AwardsCardTwo = () => {
    return (
        <div className="awardsCardTwo">
            <div className="awardsCardTwo_group">
                {Academic.map((item, index) => (
                    <div className="awardsCardTwo_group_card" key={index}>
                        <div className="awardsCardTwo_group_card_img">
                            <img src={item.image} alt={`Сертификат  ${item.title}`} />
                        </div>
                        <div className="awardsCardTwo_group_card_text">
                            <h5>{item.date} <span></span></h5>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <h4>{item.location}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
