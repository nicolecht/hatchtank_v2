import styles, { layout } from "../style";
import { blogposts } from "../constants";

const BlogPost = ({ img, title, link }) => (
  <a href={link} target="_blank">
    <div className="flex justify-between flex-col p-10 rounded-[20px] max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={img}
        alt="img"
        className="w-[280px] h-[200px] object-fill m-auto rounded-[10px]"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-dimBlack mt-5 text-center">
        {title}
      </p>
    </div>
  </a>
);

const Blog = () => (
  <section id="blog" className={layout.section}>
    <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Our latest blogs</h2>
      <p className={`${styles.paragraph} mt-5`}>
        Sharing our noteworthy mistakes and achievements in this ever-changing
        tech industry.
      </p>
      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {blogposts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
