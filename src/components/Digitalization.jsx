import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Digitalization = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Business <br className="sm:block hidden" />
        Digitalization
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Bring your presense to the world wide web with our experienced in-house web development and digital marketing team.
      </p>
    </div>
  </section>
);

export default Digitalization;
