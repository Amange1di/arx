import "./awardsCard.scss";

export const AwardsCard = ({ cards = [] }) => {
  return (
    <div className="awardsCard">
      {cards.map((item, index) => (
        <div
          className="awardsCard_bloc"
          key={`${item.id}-${index}`} 
        >
          <div className="awardsCard_bloc_img">
            <img src={item.image} alt={`${item.title}`} />
          </div>
          <div className="awardsCard_bloc_text">
            <h2>{item.date}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>{item.location}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
