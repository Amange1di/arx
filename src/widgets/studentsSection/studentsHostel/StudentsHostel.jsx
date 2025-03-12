import "./studentsHostel.scss";
import { StudentsCarousel } from "../studentsCarousel/StudentsCarousel";

export const StudentsHostel = ({ data }) => {
    if (!Array.isArray(data) || !data.length) return null;

    return (
        <div className="studentsHostel">
            {data.map((conditionItem) => (
                <div className="conditions" key={conditionItem.id || conditionItem.name || `${conditionItem.name2}-${Math.random()}`}>
                    <h3>{conditionItem.name || conditionItem.name2 || "No title"}</h3>
                    <div className="content">
                        {conditionItem.description && <p>{conditionItem.description}</p>}
                        {conditionItem.conditions && (
                            <ul className="conditions-list">
                                {conditionItem.conditions.map((condition, index) => (
                                    <li key={`${conditionItem.id || conditionItem.name}-${condition}-${index}`}>{condition}</li> // Ensure uniqueness for list items
                                ))}
                            </ul>
                        )}
                        {conditionItem.images && conditionItem.images.length > 0 && (
                            <StudentsCarousel items={conditionItem.images} />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
