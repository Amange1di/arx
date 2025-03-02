import "./table.scss"

const DataTable = [
    {
        id: 1,
        specialties: "Исламский правовед",
        status: "Высшее образование",
        form: "Утренное",
        period: "11 база 3 года 10 мес."
    },
    {
        id: 2,
        specialties: "Исламский правовед",
        status: "Высшее образование",
        form: "Утренное",
        period: "11 база 3 года 10 мес."
    },
    {
        id: 2,
        specialties: "Исламский правовед",
        status: "Высшее образование",
        form: "Утренное",
        period: "11 база 3 года 10 мес."
    },
]
export const Table = () => {
    return (
        <div>
            <table className="catalog_table">
                <thead>
                    <tr>
                        <th>    </th>
                        <th>Название
                            Специальности</th>
                        <th>Статус</th>
                        <th>Форма обучение</th>
                        <th>Период обучение</th>
                    </tr>
                </thead>
                <tbody>
                    {DataTable.map((item, index) => (
                        <tr key={index}>
                            <td></td>
                            <td>{item.specialties}</td>
                            <td>{item.status}</td>
                            <td>{item.form}</td>
                            <td>{item.period}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
