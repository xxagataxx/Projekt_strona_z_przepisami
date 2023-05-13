import './przepisy.css'
import nalesnik from './nalesnik.jpg'

function przepisy() {
  return (
    <main>
        <div className='kwadrat_przepis'>
            <div className='kwadrat_przepis_zdjecie'>
            </div>
            <div className='kwadrat_przepis_tekst'>
                tekst
            </div>
        </div>
        <div className='kwadrat_przepis'>
            {/* <div className='kwadrat_przepis_zdjecie'>
            </div> */}
            <div>
                <img src={nalesnik} style={{width:'400px'}}/>
            </div>
            <div className='kwadrat_przepis_tekst'>
                tekst
            </div>
        </div>
    </main>
  );
}

export default przepisy;