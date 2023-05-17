import { useParams } from 'react-router-dom';
import danePrzepisy from '../przepisy/przepisy.json'
import './opisPrzepisu.css'

function OpisPrzepisu() {

    const {id} = useParams();
    const idLiczba = +id;

    const tenKonretnyPrzepis = danePrzepisy.find(przepis=>przepis.id === idLiczba);

    const listaSkladnikow = tenKonretnyPrzepis?.skladniki?.map(skladnik=><li key={skladnik} className='opisPrzepisu--pojSkladnik'>{skladnik}</li>)

  return (
    <main className='opisPrzepisu'>
        <div className='opisPrzepisu--nazwa'>
             {tenKonretnyPrzepis?.nazwa}
        </div>
        
        <div className='opisPrzepisu--skladniki'>
            <div className='opisPrzepisu--skladniki__naglowek'>Składniki:</div>
            <ul className='opisPrzepisu--skladniki__ul'>
                {listaSkladnikow}
            </ul>
             
        </div>

        <div className='opisPrzepisu--opis'>
            <div className='opisPrzepisu--opis__naglowek'>Sposób przygotowania:</div>
            {tenKonretnyPrzepis?.opis}
        </div>

        <div className='opisPrzepisu--zdjecie'>
            <img className="opisPrzepisu--zdjecie__img" title={tenKonretnyPrzepis?.zdjecie?.title} alt={tenKonretnyPrzepis.nazwa} src={"/"+process.env.PUBLIC_URL + 'zdjeciaPrzepisow/'+tenKonretnyPrzepis?.zdjecie?.nazwaPliku}/>
        </div>

        <div className='opisPrzepisu--kategoria'>
        Kategoria: {tenKonretnyPrzepis?.kategoria}
        </div>
    
    </main>
  );
}

export default OpisPrzepisu;