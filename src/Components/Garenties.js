import React,{useState,useContext} from "react";
import MyContext from "../context/product/MyContext";
import "./Stepers.css";
import ButtonField from "./common/Button";
import SteperButton from "./SteperButton";
import {
  FaClipboardList,
  FaFolderMinus,
  FaIdCard,
  FaFolderOpen,
  FaElementor,
  FaReadme,
  FaCheckCircle,
  FaChevronDown,
  FaUserFriends,
} from "react-icons/fa";
import GarWidget from "./GarWidget";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
 
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    fontWeight:'bold'
  },
}));
const Garenties = ({type}) => {
  const myContext = useContext(MyContext);
  const {
    activeStep,
    add_corrdonee,
    add_correspondant,
    add_population,
    addPopulation,
    add_info,
    add_garanties,add_garanties2,
    addGaranties
  } = myContext;
  const[selected,setSelelected] = useState({
    state : true,
    id : 1
  })
  const classes = useStyles();

  const handleSelect = (id)=>{
    setSelelected({state : !selected.state,id:id})
  }
  const handelSubmit = (e) => {
    e.preventDefault();
  
    type==1 ?  add_garanties() : add_garanties2()
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "1000px",
          width: "90%",
          backgroundColor: "#FFFFFF",
          margin: "auto",
          padding: "10px",

          boxShadow:
            "0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03)",
          borderTopLeftRadius: "10% 15%",
          borderBottomRightRadius: "10% 15%",
        }}
      >
        <form onSubmit={handelSubmit}>

        <div style={{ width: "100%" }}>
          <div>
          <div style={{ display: "flex",marginBottom:'20px' }}>
                <FaFolderOpen
                  style={{ fontSize: "4em", marginRight: "10px" }}
                />
                <h1>Ensemble Du personelle</h1>
              </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <h3 className="mx-5">Date de prise d’effet</h3>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>
            {type==2 && <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    
                    backgroundColor: "#EFF2F4",
                    marginBottom: "10px",
                    color: "#1FB9F1",
                  }}
                >
                  <FaUserFriends
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "180px",
                      marginLeft : "20px"
                    }}
                  />
                  <h3>Renforts Optionnels au choix du salarié lors de l’affiliation</h3>
                </div>}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "49%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
             {  type==1? <div
                  style={{
                    display: "flex",
                    alignItems: "center",

                    backgroundColor: "#EFF2F4" ,
                    marginBottom: "10px",
                    color: "#1FB9F1",
                  }}
                >
                  <FaReadme
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "120px",
                    }}
                  />
                  <h3>Base obligatoire</h3>
                </div> : ''}
               
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    backgroundColor:   selected.id == 1 && selected.state? "#BFBFBF" : "#EFF2F4"  , 
                    marginBottom: "10px",
                    padding: "20px",
                    cursor:'pointer'
                  }}
                  onClick={()=>handleSelect(1)}
                >
                  <GarWidget type="1" text={type==1? "Economique" : "Renfort1"} isSelected={selected.state && selected.id==1} blue={type==2?true:false}/>
                  <GarWidget text="Salarié seul" prix="22.30 €" isSelected={selected.state && selected.id==1} />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    backgroundColor:  selected.id == 2  && selected.state?"#BFBFBF" : "#EFF2F4"  ,  
                    marginBottom: "10px",
                    padding: "20px", cursor:'pointer'
                  }}
                  onClick={()=>handleSelect(2)}
                >
                  <GarWidget type="1" text={type==1? "Sérénité" : "Renfort2"} isSelected={selected.state && selected.id==2} blue={type==2?true:false}/>
                  <GarWidget text="Salarié seul" prix="28.30 €" isSelected={selected.state && selected.id==2}/>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    backgroundColor:   selected.id == 3 && selected.state?"#BFBFBF" : "#EFF2F4"   , 
                    marginBottom: "10px",
                    padding: "20px", cursor:'pointer'
                  }}
                  onClick={()=>handleSelect(3)}
                >
                  <GarWidget type="1" text={type==1? "Tonique" : "Renfort3"} isSelected={selected.state && selected.id==3} blue={type==2?true:false}/>
                  <GarWidget text="Salarié seul" prix="23.30 €" isSelected={selected.state && selected.id==3}/>
                </div>
              </div>
              <div
                style={{
                  width: "49%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {type == 1 ?<div
                  style={{
                    display: "flex",
                    alignItems: "center",

                    backgroundColor: "#EFF2F4",
                    marginBottom: "10px",
                    color: "#1FB9F1",
                  }}
                >
                  <FaUserFriends
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "120px",
                    }}
                  />
                  <h3>Extension Famille</h3>
                </div> : ''}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    backgroundColor:   selected.id == 4 && selected.state? "#BFBFBF" : "#EFF2F4"  , 
                    marginBottom: "10px",
                    padding: "20px",cursor:'pointer'
                  }}
                  onClick={()=>handleSelect(4)}
                >
                  <GarWidget text="Famille" prix="34.30 €" isSelected={selected.state && selected.id==4} />
                  <GarWidget
                    type="2"
                    text="Conjoint(e)"
                    text2="Enfant(s)"
                    prix="38:30 €"
                    prix2="30:90 €" isSelected={selected.state && selected.id==4}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    backgroundColor:   selected.id == 5 && selected.state? "#BFBFBF" : "#EFF2F4"  ,
                    marginBottom: "10px",
                    padding: "20px",cursor:'pointer'
                  }}
                  onClick={()=>handleSelect(5)}
                >
                  <GarWidget text="Famille" prix="49.30 €" isSelected={selected.state && selected.id==5}/>
                  <GarWidget
                    type="2"
                    text="Conjoint(e)"
                    text2="Enfant(s)"
                    prix="38:30 €"
                    prix2="30:90 €" isSelected={selected.state && selected.id==5}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    backgroundColor:   selected.id == 6 && selected.state? "#BFBFBF" : "#EFF2F4"  ,
                    marginBottom: "10px",
                    padding: "20px",cursor:'pointer'
                  }}
                  onClick={()=>handleSelect(6)}
                >
                  <GarWidget text="Famille" prix="60.30$" isSelected={selected.state && selected.id==6}/>
                  <GarWidget
                    type="2"
                    text="Conjoint(e)"
                    text2="Enfant(s)"
                    prix="38:30 €"
                    prix2="30:90 €" isSelected={selected.state && selected.id==6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
              <div className="mt-5">
              {type==1? <ButtonField type="submit">Ajouter Garanties </ButtonField> :  <ButtonField type="submit">Ajouter Garanties</ButtonField>}
        <SteperButton />
              </div>
        </form>
      </div>
    </>
  );
};

export default Garenties;
