import { businessDigitalization } from "../assets";
import styles, { layout } from "../style";

const Digitalization = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={businessDigitalization}
        alt="billing"
        className="w-[80%] h-[100%] relative z-[5]"
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
      Work towards achieving organizational goals by digitalizing your business or automating your business processes.
      </p>
    </div>
  </section>
);

export default Digitalization;
