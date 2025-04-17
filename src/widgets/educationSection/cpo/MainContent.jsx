import './cpo.scss';
import { Table } from './Table';

export const MainContent = ({ data = [] }) => {
    return (
        <div className="cpo">
            {Array.isArray(data) && data.length > 0 ? (
                data.map((item, index) => (
                    <div key={item?.id || index} className="section-block">
                        {item?.title && ( 
                            <h2>{item.title}</h2>
                        )}
                        {item?.description && ( 
                            <div className="description-block">
                                <p className="textT" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            </div>
                        )}
                        {item?.objects_education && Array.isArray(item.objects_education) && item.objects_education.length > 0 && (
                            <div className="objects-education">
                                <Table data={item.objects_education} />
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p className="no-data">Нет данных для отображения</p>
            )}
        </div>
    );
};
