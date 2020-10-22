import React, { useState } from "react";
import { FaCircle, FaAtom, FaAngleDown } from "react-icons/fa";

import NavlItem from "./NavlItem";

const NavL = (props) => {
  const [tabItems, setTabs] = useState([
    {
      id: 1,
      title: "New Activity",
      icon: "tabitem__icon fas fa-child",
      content: "step 1 content",
      lien: "/",
      active: false,
    },
    {
      id: 2,
      title: "Client Area/CRM",
      icon: "tabitem__icon fas fa-users",
      content: "step 2 content",
      lien: "/client",
      active: false,
    },
    {
      id: 3,
      title: "Contract Area",
      icon: "tabitem__icon fas fa-network-wired",
      content: "step 3 content",
      lien: "/contract",
      active: false,
    },
    {
      id: 4,
      title: "New Business",
      icon: "tabitem__icon fas fa-money-check-alt",
      content: "step 4 content",
      lien: "/Business",
      active: false,
    },
    {
      id: 5,
      title: "New Proposition",
      icon: "tabitem__icon fas fa-money-check-alt",
      content: "step 4 content",
      lien: "/Proposition",
      active: false,
    },
    {
      id: 6,
      title: "Claim Event Area",
      icon: "tabitem__icon fas fa-money-check-alt",
      content: "step 4 content",
      lien: "/area",
      active: false,
    },
  ]);
  const [value, setValue] = useState(1);
  const handleClick = (id) => {
    setValue(id);
  };
  const DropItems = [
    "Record Life Claim Event","Create Healthcare Provider","Modify Partner","Health Benefit Area",
    "Manage Flagged Health Benefits and Estimates - Controller","Create Bank Remittance Slip","Money In Area",
    "Create Multiple Money In","Manage Authorisations"
  ]
  return (
    <div>
      <div class="app-header-left">
        <ul class="nav" style={{ flexWrap: "nowrap" }}>
          {/*items.map((item) => (
            <NavlItem key={item.id}  active={item.active}lien={item.lien} text={item.label} />
          ))*/}
          {tabItems.map(({ id, icon, title, lien, active }) => (
            <NavlItem
              key={title}
              icon={icon}
              title={title}
              lien={lien}
              id={id}
              value={value}
              toggle={handleClick}
            />
          ))}

          <li class="nav-item">
            <div class="dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaAtom class="nav-link-icon   "> </FaAtom>
                <FaAngleDown class="  ml-2 opacity-5"></FaAngleDown>
              </a>
              <div
                class="dropdown-menu insidecardfonts1"
                aria-labelledby="dropdownMenuLink"
                x-placement="bottom-start"
                style={{
                  position: "absolute",
                  willChange: "transform",
                  top: "0px",
                  left: "0px",
                  transform: "translate3d(5px, 21px, 0px)",
                }}
              >
                {
                  DropItems.map(item=><a class="dropdown-item" href="#">{item}</a> )
                }
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavL;
