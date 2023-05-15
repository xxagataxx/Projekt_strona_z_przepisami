
function Przepis({nazwa,zdjecie,kategoria}) {
  return (

        <div className='kwadrat_przepis'>
            <div >
                <img className='kwadrat_przepis_zdjecie'  title={zdjecie.title} alt={nazwa} src={process.env.PUBLIC_URL + 'zdjeciaPrzepisow/'+zdjecie.nazwaPliku}/>
            </div>

            <div className='kwadrat_przepis_tekst'>
                {nazwa}
            </div>

        </div>

  );
}

export default Przepis;