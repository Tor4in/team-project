import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import s from "../header/header.module.css";
const stl = classNames.bind(s);
const links = [
  "/",
  "amenities",
  "availability",
  "floor_plans",
  "gallery",
  "neighborhood",
  "contact_us",
  "availability",
];
export const Icon = ({ handleChange }) => {
  const burger_icon = stl({
    colorLL: true,
    buttons: true,
  });
  return (
    <>
      <div className={burger_icon}>
        <button>
          <Link to="/availability">Schedule a tour</Link>
        </button>
        <button>
          <div className={`${s.manu_icon}`} onClick={handleChange}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
              <div
                key={e}
                className={s.block}
                id={(e % 2 === 0 && e) || undefined}
              ></div>
            ))}
          </div>
          <span className={s.colorLL} onClick={handleChange}>
            Manu
          </span>
        </button>
      </div>
    </>
  );
};
export const Burger = ({
  burger = { opened: true, footer: true },
  underText,
}) => {
  const burgerStyles = stl({
    burger_manu: true,
    footer_manu: burger.footer,
  });
  const manuStyles = stl({
    manu: true,
    open: burger.opened,
  });
  return (
    <>
      <div id="burger" className={s.burger}>
        <div className={burgerStyles}>
          <ul className={manuStyles}>
            {[
              "Home",
              "Amenities",
              "Availability",
              "Floor Plans",
              "Gallery",
              "Neighborhood",
              "Contact Us",
              "Resident Services",
            ].map((e, i) => {
              return (
                <li key={i}>
                  <Link to={`${(i > 0 && "/") || ""}${links[i]}`}>{e}</Link>
                </li>
              );
            })}
          </ul>
					{underText && (<span><p>{underText}</p></span>)}
        </div>
      </div>
    </>
  );
};
