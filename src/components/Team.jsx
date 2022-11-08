import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Team = () => (
  <section
    id="team"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="flex-1 flex flex-col w-full">
      <h2 className={styles.heading2}>Our Team</h2>
      <p className={`${styles.paragraph} mt-5`}>
        We are constantly reinventing ourselves to overcome obstacles in our
        way. <br className="sm:block hidden" /> We are ready to share our
        experiences with you.
      </p>
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Team;
