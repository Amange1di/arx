import Mer from "../../../shared/images/homeImages/mer.jpg";
import "./events.scss"; 

const eventData = [
  {
    id: 1,
    date: "Октябрь 16, | 10:00 - 12:00",
    title: "Встреча с учеными исламского мира",
    location: "Адрес: Центральный зал, город Ош.",
    description:
      "На этой неделе наша академия имела честь принять выдающихся ученых из разных уголков исламского мира. В рамках серии лекций и дискуссий они поделились своими знаниями о важности исламского образования в современном обществе. В рамках серии лекций и дискуссий они поделились своими знаниями о важности исламского образования в современном обществе",
    image: Mer,
  },
];

export const Events = () => {
  return (
    <section className="events-section">
      <div className="container">
        <h2 className="op" id="events-title">ПРЕДЛАГАЕМ К ПРОСМОТРУ</h2>

        <div className="events-container">
          {eventData.map((event) => (
            <div className="event-card" key={event.id}>
              <img src={event.image} alt="Event" className="event-image" />
              <div className="event-content">
                <p className="event-date">{event.date}</p>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>

                <a href="#" className="read-more">Читать больше →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
