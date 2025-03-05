import PropTypes from "prop-types";
import './aboutTexts.scss';

export const AboutTexts = ({ items }) => {
  return (
    <section className="about-texts">
            <div className="about-texts__content">
                {items.map((item) => (
                    <article className="about-texts__item" key={item.id}>
                        <h3 className="about-texts__item-title">{item.title}</h3>
                        <p className="about-texts__item-description">{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
  )
}


AboutTexts.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};