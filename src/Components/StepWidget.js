import React, { useState, useContext } from "react";
import InputTextField from "./common/InputTextField";
import { CSSTransition, SwitchTransition } from "react-transition-group";
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
  FaChevronDown
} from "react-icons/fa";

const Step2 = ({ title, inTransation, setInTransation, height }) => {
  const myContext = useContext(MyContext);
  const {
    activeStep,
    add_corrdonee,
    add_correspondant,
    add_population,
    addPopulation,
    add_info,
  } = myContext;
  const [data, setData] = useState({
    siret: "",
    raisonSociale: "",
    codeNAV: "",
    codeIDCC: "",
    codePostale: "",
    ville: "",
    adresse: "",
    civilite: "",
    name: "",
    prenom: "",
    fonction: "",
    tele: "",
    email: "",
    populationAssurable: "",
    nombreDeSalaries: "",
    MoyenneDage: "",
    regimeSocile: "",
    typeDeCoverture: "",
    typeDoffre: "",
    extension: "",
    garanties: "",
  });
  const {
    siret,
    raisonSociale,
    codeNAV,
    codeIDCC,
    codePostale,
    ville,
    adresse,
    civilite,
    name,
    prenom,
    fonction,
    tele,
    email,
    populationAssurable,
    nombreDeSalaries,
    MoyenneDage,
    regimeSocile,
    typeDeCoverture,
    typeDoffre,
    extension,
    garanties,
  } = data;
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    switch (activeStep) {
      case 1:
        return add_corrdonee({
          siret,
          raisonSociale,
          codeNAV,
          codeIDCC,
          codePostale,
          ville,
          adresse,
        });
      case 2:
        return add_correspondant({
          civilite,
          name,
          prenom,
          fonction,
          tele,
          email,
        });
      case 3:
        return !addPopulation
          ? add_population({
              populationAssurable,
              nombreDeSalaries,
              MoyenneDage,
              regimeSocile,
            })
          : add_info({
              typeDeCoverture,
              typeDoffre,
              extension,
              garanties,
            });
      default:
        return console.log("non");
    }
  };
  return (
    <CSSTransition
      in={inTransation}
      timeout={2000}
      classNames="widget"
      appear={true}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow:
            "0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03)",
          borderTopLeftRadius: "10% 15%",
          borderBottomRightRadius: "10% 15%",
          width:'70%',margin:'auto'
        }}
        className="p-5 mb-5"
      >
        <div>
          <div
            style={
              title == "Ensmble Du Personelle"
                ? { display: "flex", marginBottom: "20px" }
                : { display: "flex", borderBottom: "1px solid #00ADB5" }
            }
          >
            {title == "Ensmble Du Personelle" ? (
              <div style={{ display: "flex" }}>
                <FaFolderOpen
                  style={{ fontSize: "4em", marginRight: "10px" }}
                />
                <h1>Ensemble Du personelle</h1>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                {title == "Coordonnées" ? (
                  <FaClipboardList
                    style={{
                      fontSize: "2em",
                      color: "#00ADB5",
                      marginRight: "10px",
                    }}
                  />
                ) : title == "Correspandant" ? (
                  <FaIdCard
                    style={{
                      fontSize: "2em",
                      color: "#00ADB5",
                      marginRight: "10px",
                    }}
                  />
                ) : title == "Structuration de l’Entreprise" ? (
                  <FaFolderMinus
                    style={{
                      fontSize: "2em",
                      color: "#00ADB5",
                      marginRight: "10px",
                    }}
                  />
                ) : title == "Choix des garantiess et tarif" ? (
                  <FaFolderMinus
                    style={{
                      fontSize: "2em",
                      color: "#00ADB5",
                      marginRight: "10px",
                    }}
                  />
                ) : (
                  ""
                )}
                <h4 style={{ color: "#00ADB5" }}>{title}</h4>
              </div>
            )}
          </div>
          {title == "Coordonnées" ? (
            <>
              <form onSubmit={handelSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: height,
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <InputTextField
                      text="N siret"
                      id="siret"
                      type="text"
                      name="siret"
                      value={siret}
                      placeholder="N° SIRET"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Raison Sociale"
                      id="Raison Sociale"
                      type="text"
                      name="raisonSociale"
                      value={raisonSociale}
                      placeholder="Raison Sociale"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Code NAV (APE)"
                      id="Code NAV (APE)"
                      type="text"
                      name="codeNAV"
                      value={codeNAV}
                      placeholder="Code NAV (APE)"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Code activité (IDCC)"
                      id="Code activité (IDCC)"
                      type="text"
                      name="codeIDCC"
                      value={codeIDCC}
                      placeholder="Code activité (IDCC)"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Code Postale"
                      id="Code Postale"
                      type="text"
                      name="codePostale"
                      value={codePostale}
                      placeholder="Code Postale"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Ville"
                      id="Ville"
                      type="text"
                      name="ville"
                      value={ville}
                      placeholder="Ville"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Adress"
                      id="Adress"
                      type="text"
                      name="adresse"
                      value={adresse}
                      placeholder="Adress"
                      onChange={onChange}
                    />{" "}
                  </div>
                  <ButtonField type="submit">Ajouter Coordonnées</ButtonField>
                  <SteperButton />
                </div>
              </form>
            </>
          ) : title == "Correspandant" ? (
            <>
              <form onSubmit={handelSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: height,
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <InputTextField
                      text="Civilité"
                      id="Civilité"
                      type="text"
                      name="civilite"
                      value={civilite}
                      placeholder="Civilité"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="name"
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      placeholder="name"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Prénom"
                      id="Prénom"
                      type="text"
                      name="prenom"
                      value={prenom}
                      placeholder="Prénom"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Fonction"
                      id="Fonction"
                      type="text"
                      name="fonction"
                      value={fonction}
                      placeholder="Fonction"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Télephone"
                      id="Télephone"
                      type="text"
                      name="tele"
                      value={tele}
                      placeholder="Télephone"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Email"
                      id="Email"
                      type="text"
                      name="email"
                      value={email}
                      placeholder="Email"
                      onChange={onChange}
                    />{" "}
                  </div>
                  <ButtonField type="submit">Ajouter Correspondant</ButtonField>
                  <SteperButton />
                </div>
              </form>
            </>
          ) : title == "Structuration de l’Entreprise" ? (
            <>
              <form onSubmit={handelSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: height,
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <InputTextField
                      text="Population Assurabl"
                      type="select"
                      data={["Ensemble de personel", 2, 3, 4]}
                      name="populationAssurable"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Nombre de Salariée"
                      type="select"
                      data={["5 à 10", 2, 3, 4]}
                      name="nombreDeSalaries"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Moyenne d'àge"
                      type="select"
                      data={["30 à 35 àge", 2, 3, 4]}
                      name="MoyenneDage"
                      onChange={onChange}
                    />
                    <InputTextField
                      text="Régime Sociale"
                      type="select"
                      data={["Régime génerale", 2, 3, 4]}
                      name="regimeSocile"
                      onChange={onChange}
                    />
                  </div>
                  <ButtonField type="submit">Ajouter Population</ButtonField>
                </div>
              </form>
            </>
          ) : title == "Ensmble Du Personelle" ? (
            <>
              <form onSubmit={handelSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: height,
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <div className="mt-3">
                      <div
                        style={{
                          display: "flex",
                          borderBottom: "1px solid #00ADB5",
                        }}
                      >
                        <FaElementor
                          style={{
                            fontSize: "3em",
                            color: "#00ADB5",
                            marginRight: "10px",
                          }}
                        />
                        <h3 style={{ color: "#00ADB5" }}>
                          Structuration du contrat obligatoire{" "}
                        </h3>
                      </div>

                      <InputTextField
                        text="Type De cobverture "
                        type="select"
                        data={["Salarier Seul", 2, 3, 4]}
                        name="typeDeCoverture"
                        onChange={onChange}
                      />
                      <InputTextField
                        text="Type d'offre"
                        type="select"
                        data={["Standar", 2, 3, 4]}
                        name="typeDoffre"
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          borderBottom: "1px solid #00ADB5",
                        }}
                      >
                        <FaReadme
                          style={{
                            fontSize: "3em",
                            marginRight: "10px",
                            color: "#00ADB5",
                          }}
                        />
                        <h3 style={{ color: "#00ADB5" }}>
                          Structuration des contrats Facultatifs
                        </h3>
                      </div>

                      <InputTextField
                        className="my-2"
                        text="Extension aux ayants droit"
                        type="select"
                        data={["oui", "non"]}
                        name="extension"
                        onChange={onChange}
                      />
                      <InputTextField
                        className="my-2"
                        text="Garanties optionnelles"
                        type="select"
                        data={["oui", "non"]}
                        name="garanties"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <ButtonField type="submit">Ajouter Informations</ButtonField>
                  <SteperButton />
                </div>
              </form>
            </>
          )  : (
            <>
              <SteperButton />{" "}
            </>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Step2;
