import { useSelector } from 'react-redux';
import './admissionCommittee.scss';

export const AdmissionCommittee = () => {
  const { navElements, selected } = useSelector(state => state.applicants);
  const data = navElements[selected]?.data;


  return (
    <div className="admissionCommittee">
      <div>
        <p  className="description">{data.description}</p>
      </div>

      <div className="services">
        <h3>{data.services.title}</h3>
        <ul>
          {data.services.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="location">
        <h3>Контакты:</h3>
        <p> Адрес приёмной комиссии: {data.location.address}</p>
        <p>Часы работы: {data.location.workingHours}</p>
        <div className="contacts">
          <p>Горячая линия: {data.location.contacts.phone}</p>
          <p>Email: {data.location.contacts.email}</p>
        </div>
      </div>
    </div>
  );
};
