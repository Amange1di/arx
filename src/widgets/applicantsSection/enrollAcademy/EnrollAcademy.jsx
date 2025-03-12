import "./enrollAcademy.scss"
export const EnrollAcademy = ({ applicants }) => {
  const { data } = applicants;

  const renderContent = (data) => {
    if (!data) return null;

    return Object.entries(data).map(([key, value]) => {
      if (typeof value === 'string') {
        if (key === 'address') {
          return <p key={key}>Адрес: {value}</p>;
        }
        if (key === 'phone') {
          return <p key={key}>Горячая линия:<a href={`tel:${value}`}>{value}</a></p>;
        }
        if (key === 'email') {
          return <p key={key}>Email:<a href={`mailto:${value}`}>{value}</a></p>;
        }

        return <p key={key}>{value}</p>;
      }

      if (Array.isArray(value)) {
        return (
          <ul key={key}>
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      }

      if (typeof value === 'object' && value !== null) {
        return (
          <div key={key}>
            {value.title && <h3>{value.title}</h3>}
            {value.title1 && <h4>{value.title1}</h4>}
            {value.address && <p>Адрес: {value.address}</p>}
            {value.workingHours && <p>Часы работы: {value.workingHours}</p>}
            {value.contacts && renderContent(value.contacts)}
            {value.items && (
              <ul>
                {value.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {Object.entries(value).map(([subKey, subValue]) => {
              if (!['title', 'title1', 'items', 'contacts', 'address', 'workingHours'].includes(subKey)) {
                return renderContent({ [subKey]: subValue });
              }
              return null;
            })}
          </div>
        );
      }

      return null;
    });
  };

  return (
    <div className="enrollAcademy">
      {renderContent(data)}
    </div>
  );
};

