import PropTypes from 'prop-types';
import './educationHeader.scss';

export const EducationHeader = ({ items }) => {
    return (
        <header className="education-header">
            {items.map((item) => (
                <div className="education-header__content" key={item.id}>
                    <h1 className="education-header__title">{item.title}</h1>
                    <p className="education-header__description">{item.description}</p>
                </div>
            ))}
        </header>
    );
}

EducationHeader.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};