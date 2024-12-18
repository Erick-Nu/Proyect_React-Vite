import basketball from '../img/basketball.png';
import soccer from '../img/soccer.png';
import volleyball from '../img/volleyball.png';
import swimm from '../img/swimm.png';


const Deports = () => {
    return (
        <>
            <h2> Favorite sports </h2>
                <div className="gallery">
                    <div className="gallery-item">
                        <img src={soccer} alt="soccer" />
                        <p> SOCCER</p>
                    </div>
                    <div className="gallery-item">
                        <img src={volleyball} alt="volleyball" />
                        <p> VOLLEY </p>
                    </div>
                    <div className="gallery-item">
                        <img src={basketball} alt="basketball" />
                        <p> BASKET </p>
                    </div>
                    <div className="gallery-item">
                        <img src={swimm} alt="natacion" />
                        <p> SWIMM </p>
                    </div>
                </div>
        </>
    );
};
export default Deports;



