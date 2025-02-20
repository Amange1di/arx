
import "../style/AwardsBaaner.scss";
import awardsBaaner_img from "../../../shared/imgAwards/awards_Baaner_img.png";
import awardsBaanerTwo from "../../../shared/imgAwards/awards_BaanerTwo.png";

const AwardsBaaner = () => {
  return (
    <div id='awards_Baaner'>
      <div className="container">
      

        <div className="awards_Baaner">
          <h1>Наследие Успеха Наши Достижения</h1>
          <div className="awards_Baaner_text ">
            <div className="p">
              <p>
                Исламская Академия гордится тем, что предоставляет своим студентам
                уникальные возможности для роста и развития. Мы стремимся не
                только к передаче знаний, но и к формированию личностей, готовых
                внести вклад в общество.
              </p> </div>
            <img className='awards_Baaner_img' src={awardsBaaner_img} alt="Уникальные возможности" />
            <img className='awards_BaanerTwo_img' src={awardsBaanerTwo} alt="Уникальные возможности" />
          </div>
          <button className='awards_Baaner_btn'>Посмотреть видео в YouTube</button>
        </div>
      </div>
    </div>
  );
};

export default AwardsBaaner;
