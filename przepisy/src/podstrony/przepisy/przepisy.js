import './przepisy.css'
import './kategorie.css'
import Przepis from './przepis';
import danePrzepisy from './przepisy.json'
import Kategoria from './kategoria';
import React from 'react';

function Przepisy() {

    const [aktualnaKategoria,setAktualnaKategoria] = React.useState("");

    //do losowego rozmieszczenia przepisów na stronie
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    
    const wszystkiePrzepisy = shuffle(danePrzepisy).filter(pojedycznyPrzepis=>{
        if(aktualnaKategoria===""){
            return true;
        }
        if(pojedycznyPrzepis.kategoria === aktualnaKategoria){
            return true;
        }
        return false;
    }).map(pojedycznyPrzepis=>{
        return (
            <Przepis key={pojedycznyPrzepis.id} przepis={pojedycznyPrzepis} />
        )

    }
    );


  return (
        <main className='main-przepisy'>
            <div className="kategorie">
                <Kategoria nazwa="słone" zmienKategorie={setAktualnaKategoria} czyWybrana={aktualnaKategoria==="słone"}/>
                <Kategoria nazwa="słodkie" zmienKategorie={setAktualnaKategoria} czyWybrana={aktualnaKategoria==="słodkie"}/>
            </div>
            <div className="przepisy">
                {wszystkiePrzepisy}
            </div>
        </main>
  );
}

export default Przepisy;