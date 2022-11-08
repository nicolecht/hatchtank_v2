import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Coach = () => (
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
        Career <br className="sm:block hidden" />
        Coaching
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Navigate towards your professional goals by refining your soft skills and building your career advancement.
      </p>
    </div>
  </section>
);

export default Coach;
