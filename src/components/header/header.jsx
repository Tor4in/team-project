import fone_icon from "./fone_icon.svg";
import logo from "./Logo.svg";
import { Link } from "react-router-dom";
import s from "./header.module.css";
import { useEffect, useState } from "react";
import { Burger, Icon } from "../burgerManu/burger";
export default function Header({ preTitle, title, description }) {
  const [burger, setBurger] = useState({ active: false, opened: false });
  const handleChange = () => {
    if (!burger.active) {
      setBurger((prev) => ({ ...prev, active: !prev.active }));
      setTimeout(() => {
        setBurger((prev) => ({ ...prev, opened: !prev.opened }));
      }, 4);
      setTimeout(() => {
        setBurger((prev) => ({ ...prev, active: !prev.active }));
      }, 500);
    }
  };



	//lock body scroll
  useEffect(() => {
    const body = document.body.style;
    if (burger.opened || burger.active) {
      body.overflow = "hidden";
    } else body.overflow = "auto";
  }, [burger.active]);

  return (
    <>
      <div className={s.burger_wraper}>
        {(burger.active || burger.opened) && <Burger burger={burger} />}
      </div>

      <header>
        <nav onClick={()=> burger.opened && handleChange()}>
          <Link to="/"><img src={logo} alt="logo image" /></Link>
					<Icon handleChange={handleChange}/>
        </nav>
        <div className={s.title}>
          <h2>
            <Link to="/amenities">{preTitle}</Link>
          </h2>
          <h1 className={s.colorLL}>{title}</h1>
          <p className={s.colorLD}>{description}</p>
        </div>
        <img className={s.fone_icon} src={fone_icon} alt="fone icon" />
      </header>
    </>
  );
}
