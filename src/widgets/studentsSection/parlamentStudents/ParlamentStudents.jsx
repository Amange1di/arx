import "./parlamentStudents.scss";

    export const ParlamentStudents = ({ data }) => {
        if (!data?.length) return null;
    
        return (
            <div className='parlamentStudents'>
                {data.map((item) => (
                    <div className="parlamentStudents_block" key={item.id}>
                        {item.img && (
                            <div className="parlamentStudents_block_imggroup">
                                <img src={item.img} alt={item.name} />
                            </div>
                        )}
                        <div className="parlamentStudents_block_text">
                            <h3>{item.name}</h3>
                            <div className="line">
                                <p>{item.description}</p>
                                {item.description2 && <p>{item.description2}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    


