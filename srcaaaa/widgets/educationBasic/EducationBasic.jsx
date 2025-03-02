import PropTypes from 'prop-types';
import './educationBasic.scss';

export const EducationBasic = ({ items }) => {
    return (
        <section className="education-basic">
            {items.map((item) => (
                <article className="education-basic__item" key={item.id}>
                    <h2 className="education-basic__title">{item.title}</h2>
                </article>
            ))}
        </section>
    );
};

EducationBasic.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};