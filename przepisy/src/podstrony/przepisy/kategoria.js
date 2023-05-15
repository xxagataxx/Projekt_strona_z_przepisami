
function Kategoria({nazwa,zmienKategorie,czyWybrana}) {


    return (
        <span className={`kategoria ${czyWybrana?'kategoria_wybrana':''}`} onClick={()=>zmienKategorie(nazwa)}>
            {nazwa}
        </span>
  
    );
  }
  
  export default Kategoria;