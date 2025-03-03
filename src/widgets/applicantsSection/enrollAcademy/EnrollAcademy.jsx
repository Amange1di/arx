import { useSelector } from 'react-redux';
import './enrollAcademy.scss';

export const EnrollAcademy = () => {
  const { navElements, selected } = useSelector(state => state.applicants);
  const data = navElements[selected]?.data;

  return (
    <div className="enrollAcademy">
      <div className="intro">
        <p>{data.intro}</p>
      </div>

      <div className="requirements">
        <h3>{data.requirements.title}</h3>
        <ul>
          {data.requirements.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="admission-steps">
        <h3>{data.admissionSteps.title}</h3>

        <div className="documents">
          <h4>{data.admissionSteps.documents.title}</h4>
          <ul>
            {data.admissionSteps.documents.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="exams">
          <h4>{data.admissionSteps.exams.title}</h4>
          <ul>
            {data.admissionSteps.exams.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="enrollment">
          <h4>{data.admissionSteps.enrollment.title}</h4>
          <p>Сроки подачи документов: {data.admissionSteps.enrollment.dates}</p>
          <p>Форма обучения:  {data.admissionSteps.enrollment.educationForms}</p>
          {/* <div className="education-forms">
            {data.admissionSteps.enrollment.educationForms.map((form, index) => (
              <span key={index}>{form}</span>
            ))}
          </div> */}
        </div>
      </div>

      <div className="contacts">
        <h3>Контакты</h3>
        <p>Телефон: {data.contacts.phone}</p>
        <p>Email: {data.contacts.email}</p>
      </div>
    </div>
  );
};

