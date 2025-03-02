import PropTypes from 'prop-types';
import './aboutNavigate.scss';

export const AboutNavigate = ({ items }) => {
  return (
    <section className="about-navigate">
      <div className="about-navigate__content">
        <article className="about-navigate__info">
          {items.map((item) => (
            <div key={item.id} className="about-navigate__item">
              <img 
                src={item.icon} 
                alt={`${item.name} icon`} 
                className="about-navigate__item-icon"
              />
              <div className="about-navigate__item-details">
                <h3 className="about-navigate__item-title">{item.name}</h3>
                <p className="about-navigate__item-description">{item.property}</p>
              </div>
            </div>
          ))}
        </article>

        <aside className="about-navigate__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.008550213334!2d72.8029789!3d40.5193021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdaf51e4e11011%3A0x2dd3bbd34364f3e1!2zSVQt0LrRg9GA0YHRiyDQmtGD0YDRgdGLINC_0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNGPINCe0YggR2Vla3M!5e0!3m2!1sru!2skg!4v1740737000575!5m2!1sru!2skg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </aside>
      </div>
    </section>
  );
};

AboutNavigate.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      property: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired
};