import styles, { layout } from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import Button from "./Button";
import ContactForm from "./ContactForm";

const Footer = () => (
  <section
    id="footer"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimBlack">
        2022 HatchTank Consulting Enterprise (003302174-H). All Rights Reserved.
      </p>
      {/* <div className="flex flex-row md:mt-0 mt-6 ">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div> */}
    </div>
  </section>
);

export default Footer;
