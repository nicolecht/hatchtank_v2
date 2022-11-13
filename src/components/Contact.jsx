import styles, { layout } from "../style";
import { logo } from "../assets";
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
        <p className={`${styles.paragraph} mt-4 max-w-[360px]`}>
          Location: Kuala Lumpur, Malaysia.
        </p>
        <p className={`${styles.paragraph} mt-4 max-w-[360px]`}>
          Email: hatchtankconsulting@gmail.com
        </p>
      </div>

      <ContactForm />
    </div>
  </section>
);

export default Contact;
