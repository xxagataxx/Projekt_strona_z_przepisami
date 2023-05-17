import { Link } from "react-router-dom";


function Przepis({przepis}) {

  return (
        <Link to={`${przepis.id}`}>
            <div className='kwadrat_przepis'>
                <div >
                    
                    <img className='kwadrat_przepis_zdjecie'  title={przepis.zdjecie.title} alt={przepis.nazwa} src={process.env.PUBLIC_URL + 'zdjeciaPrzepisow/'+przepis.zdjecie.nazwaPliku}/>
                    
                </div>

                <div className='kwadrat_przepis_tekst'>
                    {przepis.nazwa}
                </div>

            </div>
        </Link>

  );
}

export default Przepis;