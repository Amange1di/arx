import './aboutDocument.scss';
import PropTypes from 'prop-types';

export const AboutDocument = ({ items }) => {
  return (
    <section className="about-document">
      {items.map((item) => (
        <div key={item.id} className="about-document__block">
          <div className="about-document__block-left">
             <h2 className='about-document__block-left-title'>{item.title}</h2>
          </div>
          <div className="about-document__block-right">
             <a className="about-document__block-right-open" href={item.link_open}>открыть</a>
             <a className="about-document__block-right-download" href={item.link_download}>скачать</a>
          </div>
        </div>
      ))

      }
    </section>
  )
}



AboutDocument.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};