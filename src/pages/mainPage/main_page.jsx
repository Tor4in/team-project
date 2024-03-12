import Header from "../../components/header/header";
import s from "./mailPage.module.css";
import bg from "../../components/header/bg_image-1-mb.png";
import icon_play from "./images/play_triangle_icon.svg";
import { Link } from "react-router-dom";
import firstImage from "./images/slider_image_1.png";
import secondImage from "./images/slider_image_2.png";
import thirdImage from "./images/slider_image_3.png";
import { Footer } from "../../components/footer/footer";
export default function MainPage() {
  return (
    <>
      <Header
        preTitle="851 W Montrose Ave, Chicago, IL 60613"
        title="FIND AFFORDABLE UNIT"
        description="Located in Chicago’s historic Uptown neighborhood"
      />
      <p className={s.underHeader_block}>The Hazelton</p>
      <div className={s.video_block}>
        <img src={bg} alt="" />
        <div className={s.play}>
          <img src={icon_play} alt="" />
        </div>
      </div>
      <section>
        <h1>A HOME AS UNIQUE AS YOU</h1>
        <p>
          The Hazelton apartment building is located at 851 W Montrose Avenue in
          the Uptown neighborhood of Chicago. The building sits 2 blocks from
          Lake Shore Drive, Montrose Beach, and the lakefront. The property,
          once formerly a speakeasy during the days of Prohibition, now features
          top-of-the-line micro-studios.
        </p>
        <span>
          <Link to="/">Show more</Link>
        </span>
        <button>Schedule a tour</button>
      </section>
      <div className={s.slider}>
        {[firstImage, secondImage, thirdImage].map((el, i) => (
          <div key={i} className={s.slider_item}>
            <img src={el} alt="" />
          </div>
        ))}
      </div>
			<Footer />
    </>
  );
}
