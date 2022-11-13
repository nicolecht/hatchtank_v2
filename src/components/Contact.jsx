import styles, { layout } from "../style";
import { logo, locationDotSolid, envelopeSolid } from "../assets";
import { socialMedia } from "../constants";
import ContactForm from "./ContactForm";

const Contact = () => (
  <section
    id="contact"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10 px-6">
        <img
          src={logo}
          alt="hatchtank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} my-4 max-w-[265px] text-center`}>
          Get ready to take control of your growth.
        </p>
        <div className="mt-4 max-w-[360px] flex">
          <img src={envelopeSolid} className="w-[18px] mr-3 filter-blue" />
          <p className={`${styles.paragraph}`}>hatchtankconsulting@gmail.com</p>
        </div>
        <div className="mt-4 max-w-[360px] flex">
          <img src={locationDotSolid} className="w-[18px] mr-3 filter-blue" />
          <p className={`${styles.paragraph}`}>Kuala Lumpur, Malaysia</p>
        </div>
      </div>

      <ContactForm />
    </div>
  </section>
);

export default Contact;
