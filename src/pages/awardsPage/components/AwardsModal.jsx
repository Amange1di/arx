import "../style/AwardsModal.scss"; 
import modalX  from "../../../shared/imgAwards/modalX.svg"

const AwardsModal = ({ student, onClose ,}) => {
    return (
        <>
            {student && (
                <div className="awards_modal">
                    <div className="awards_modal_content">
                        <span className="awards_modal_close" onClick={onClose}>
                          <img src={modalX} alt="" />
                        </span>
                        <div className="awards_modal_info">
                            <img src={student.foto} alt={student.name} />
                            <h3>{student.name}</h3>
                            <h5>{student.feedback}</h5>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AwardsModal;