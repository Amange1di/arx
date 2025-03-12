import "./activStudents.scss";

export const ActivStudents = ({ data }) => {
    if (!data?.length) return null;

    return (
        <div className='activStudents'>
            {data.map((item, index) => (
                <div className="activStudents_block" key={index}>
                    <h3>{item.name}</h3>
                    <div className={`content ${item.img ? 'with-image' : ''}`}>
                        <p>{item.description}</p>
                        {item.img && (
                            <div className="activStudents_block_img">
                                <img src={item.img} alt={item.name} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
