import { Table } from './Table';
import './cpo.scss';

export const FacultyContent = ({ data }) => {
    if (!data) return null;

    return (
        <div className="cpo">
            {data.title && (
                <div className="header-section">
                    <h2>{data.title}</h2>
                    {data.description && <p className="textT">{data.description}</p>}
                </div>
            )}

            {data.title_h2 && <h2>{data.title_h2}</h2>}

            <div className="faculties-container">
                {data.faculties?.map((section, index) => (
                    <div key={index} className="section-block">
                        <h3>{section.title}</h3>
                        {section.description && (
                            <p>{section.description}</p>
                        )}
                        {section.descriptions && (
                            <ul className="descriptions-list">
                                {section.descriptions.map((desc, i) => (
                                    <p key={i}>{desc}</p>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            {data.table && <Table data={data.table} />}
        </div>
    );
};
