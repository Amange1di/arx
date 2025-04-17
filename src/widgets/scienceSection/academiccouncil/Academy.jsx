import "./academy.scss";

export const Academy = ({ data }) => {
  return (
    <div className="academy">
      <div className="container">
        <p className="text" dangerouslySetInnerHTML={{ __html: data.description }}></p>
        {data.number && <p className="contact">{data.number}</p>}
        {data.email && <a href={`mailto:${data.email}`}>{data.email}</a>}
      </div>
    </div>
  );
};
