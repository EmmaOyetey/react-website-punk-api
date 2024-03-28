import "./Nav.scss"
import FindABeerByName from "../../Containers/FindABeerByName";
import beers from "../../Data/beers";
//import { BeerTypes } from "../../Types/beerTypes";
//import { useState } from "react";

const Nav = () => {

  return (
    <section className = "find-a-beer" >
        <p className = "info">Need to know more about your favourite Beer? </p>
        <p className = "info">Looking for a new one to enjoy?</p>
        <p className = "info">You are in the Right Place</p>
        <FindABeerByName beers={beers}/>
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
