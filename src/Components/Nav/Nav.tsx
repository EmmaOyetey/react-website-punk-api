import "./Nav.scss"
import FindABeerByName from "../../Containers/FindABeerByName";
import FilteredBeers from "../../Containers/FilterBeerByKey";
import beers from "../../Data/beers";
import { BeerTypes } from "../../Types/beerTypes";
//import { useState } from "react";

type NavProps = {
  handleFilterByName:(filteredData:BeerTypes[]) => void;
  handleFilterByKey : (filteredData: BeerTypes[]) => void;
  allBeers:BeerTypes[];
};

const Nav = ({handleFilterByName, handleFilterByKey, allBeers}: NavProps) => {

  return (
    <section className = "find-a-beer" >
        <p className = "find-a-beer__info1">Need to know more about your favourite Beer? </p>
        <p className = "find-a-beer__info2">Looking for a new one to enjoy?</p>
        <p className = "find-a-beer__info3">You're in the Right Place</p>
        <FindABeerByName handleFilterByName={handleFilterByName} allBeers={allBeers}/>
        <FilteredBeers handleFilterBeersByKey = {handleFilterByKey} allBeers={beers}/>
    </section>

  );}

export default Nav;


// import { FormEventHandler, useState } from "react";
// import menu from "../../assets/images/menu-icon.png";
// import settings from "../../assets/images/settings-icon.png";
// import NavMenu from "../NavMenu/NavMenu";
// import SettingsMenu from "../SettingsMenu/SettingsMenu";
// import "./Nav.scss";

// type NavProps = {
//   userName: string;
//   updateUserName: FormEventHandler<HTMLFormElement>;
// };

// const Nav = ({ userName, updateUserName }: NavProps) => {
//   const [showSettings, setShowSettings] = useState<boolean>(false);
//   const [showNav, setShowNav] = useState(false);

//   const toggleSettings = () => {
//     setShowSettings(!showSettings);
//   };

//   const toggleNav = () => {
//     setShowNav(!showNav);
//   };

//   return (
//     <nav className="nav">
//       {showSettings && (
//         <SettingsMenu
//           userName={userName}
//           onClose={toggleSettings}
//           onSubmit={updateUserName}
//         />
//       )}
//       {showNav && <NavMenu onClose={toggleNav} />}

//       <img
//         src={menu}
//         className="nav__item"
//         alt="menu icon"
//         onClick={toggleNav}
//       />
//       <h1>Ear Worm</h1>
//       <img
//         src={settings}
//         className="nav__item"
//         alt="settings icon"
//         onClick={toggleSettings}
//       />
//     </nav>
//   );
// };

// export default Nav
