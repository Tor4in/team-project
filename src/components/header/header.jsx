import fone_icon from "./fone_icon.svg";
import logo from "./Logo.svg";
import {Link} from "react-router-dom"
import s from "./header.module.css";
export default function Header({preTitle, title, description}) {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo image" />
        <div className={`${s.colorLL} ${s.buttons} `}>
          <button>Schedule a tour</button>
          <button>
            <div className={s.manu_icon}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
                <div
                  key={e}
                  className={s.block}
                  id={(e % 2 === 0 && e) || undefined}
                ></div>
              ))}
            </div>
            <span className={s.colorLL}>Manu</span>
          </button>
        </div>
      </nav>
      <div className={s.title}>
        <h2>
          <Link to="amenities">{preTitle}</Link>
        </h2>
        <h1 className={s.colorLL}>{title}</h1>
        <p className={s.colorLD}>
          {description}
        </p>
      </div>
			<img className={s.fone_icon} src={fone_icon} alt="fone icon" />
    </header>
  );
}
