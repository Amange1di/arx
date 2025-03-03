import PropTypes from 'prop-types';
import './educationTexts.scss';

export const EducationTexts = ({ items }) => {
    return (
        <section className="education-texts">
            <header className="education-texts__header">
                <h2 className="education-texts__title">Факультеты и Программы</h2>
            </header>
            <div className="education-texts__content">
                {items.map((item) => (
                    <article className="education-texts__item" key={item.id}>
                        <h3 className="education-texts__item-title">{item.title}</h3>
                        <p className="education-texts__item-description">{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

EducationTexts.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};