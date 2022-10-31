import styles, { layout } from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import Button from "./Button";
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
        <p className={`${styles.paragraph} mt-4 max-w-[360px]`}>
          A new way to make the payments easy, reliable and secure.
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
