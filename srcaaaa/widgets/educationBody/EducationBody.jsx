import PropTypes from 'prop-types';
import './educationBody.scss';

export const EducationBody = ({ items }) => {
    return (
        <section className="education-body">
            <header className="education-body__header">
                <h2 className="education-body__title">Факультеты и Программы</h2>
            </header>
            <div className="education-body__content">
                {items.map((item) => (
                    <article className="education-body__item" key={item.id}>
                        <p className="education-body__description">{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

EducationBody.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};