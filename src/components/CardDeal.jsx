import { ITProduct } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        IT Product and <br className="sm:block hidden" />
        Service Management
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Empower and run your tech team effectively with best practices and continuous innovation.
      <br/>Have a big idea in mind? Turn it into a product!
      </p>

    </div>
    <div className={layout.sectionImg}>
      <img src={ITProduct} alt="card" className="w-[80%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
