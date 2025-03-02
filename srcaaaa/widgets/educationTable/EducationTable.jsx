import PropTypes from 'prop-types';
import './educationTable.scss';

export const EducationTable = ({ items }) => {
 
    return (
        <section className="education__container-table">
            <header className="education__container-table__header">
                <h1 className="education__container-table__title">Факультет исламского права (фикх)</h1>
                <h2 className="education__container-table__subtitle">Специальности</h2>
            </header>

            <table className="education__container-table__table">
                <thead className="education__container-table__table-head">
                    <tr className="education__container-table__table-row">
                        <th className="education__container-table__table-header static" scope="col"></th>
                        <th className="education__container-table__table-header" scope="col">Название <br /> специальности</th>
                        <th className="education__container-table__table-header" scope="col">Статус</th>
                        <th className="education__container-table__table-header" scope="col">Форма обучения</th>
                        <th className="education__container-table__table-header" scope="col">Период обучения</th>
                    </tr>
                </thead>
                <tbody className="education__container-table__table-body">
                    {items.map((item) => (
                        <tr className="education__container-table__table-row" key={item.id}>
                            <th className="education__container-table__table-cell static"></th>
                            <td className="education__container-table__table-cell">{item.title}</td>
                            <td className="education__container-table__table-cell">{item.status}</td>
                            <td className="education__container-table__table-cell">{item.form_of_study}</td>
                            <td className="education__container-table__table-cell">{item.training_period}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
EducationTable.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            form_of_study: PropTypes.string.isRequired,
            training_period: PropTypes.string.isRequired
        })
    ).isRequired
};