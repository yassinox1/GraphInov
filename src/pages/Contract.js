import React,{useContext} from 'react'
import MyContext from "../context/product/MyContext";
const Contract = () => {
    const myContext = useContext(MyContext);
    const {
      question,
      answer,
      cordonee,
      correspandont,
      population,
      infoLs,
    } = myContext;
    return (
        <div className="mt-5"  >
            <h1>Contract Page</h1>
         { /*  <h1>Contract Page</h1>
           <div style={{display:'flex'}}>
           <div style={{width:'50%'}}>
                <h1>Structuration de l’Entreprise</h1>
       
    {Object.keys(cordonee).map( (item)=><h3>{item} : {cordonee[item]}</h3>)  }
    
            </div>
            <div style={{width:'50%'}}>
                <h1>Coordonnées  Correspondant</h1>
                {Object.keys(population).map( (item)=><h3>{item} : {population[item]}</h3>)  }
            </div>
           </div>
           <div style={{display:'flex'}}>
           <div style={{width:'50%'}}>
                <h1>Ensemble de Personnele</h1>
       
    {Object.keys(infoLs).map( (item)=><h3>{item} : {infoLs[item]}</h3>)  }
    
            </div>
            <div style={{width:'50%'}}>
                <h1>Coordonnées  Correspondant</h1>
                {Object.keys(correspandont).map( (item)=><h3>{item} : {correspandont[item]}</h3>)  }
            </div>
           </div>*/}
        </div>
    )
}

export default Contract
