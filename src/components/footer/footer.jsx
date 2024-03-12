import logo from "../header/Logo.svg";
import s from "./footer.module.css";
import h from "../header/header.module.css";
import homeIcon from "./images/home-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faComment, faAt } from "@fortawesome/free-solid-svg-icons";
import { Burger } from "../burgerManu/burger";
const list = [
	{
		ic: faMap,
		text: "851 W Montrose Ave, Chicago, IL 60613",
	},
	{
		ic: faComment,
		text: "773 242 9628",
	},
	{
		ic: faAt,
		text: "edickson@cagan.com",
	}
]
export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.overLine}>
        <img src={logo} alt="white logo" />
        <img src={homeIcon} alt="house icon" />
        <ul className={s.contact}>
					{list.map((el, i) => {
						return (
							<li key={i}>
								<FontAwesomeIcon icon={el.ic} />
								<span>{el.text}</span>
							</li>
						);
					})}
        </ul>
      </div>
			<div className={`${h.burger_wraper} ${s.footer_manu}`}>
				<Burger underText = "© 2023 The Hazelton. All Rights Reserved."/>
			</div>
    </footer>
  );
};
