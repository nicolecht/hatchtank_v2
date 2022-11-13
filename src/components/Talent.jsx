import { cultureAndTalent} from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Talent = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Culture and <br className="sm:block hidden" />
        Talent Management
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Receive proven and up-to-date advice in recruitment, building an amazing team, and fostering the right energy in growing an effective team.
      </p>

      {/* <Button styles="mt-10" /> */}
    </div>
    <div className={layout.sectionImg}>
      <img src={cultureAndTalent} alt="card" className="w-[80%] h-[100%]" />
    </div>
  </section>
);

export default Talent;
