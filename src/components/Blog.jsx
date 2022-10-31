import styles, { layout } from "../style";
import Button from "./Button";
import { blogposts } from "../constants";
import { post1 } from "../assets";

const BlogPost = ({ img, title }) => (
  <a
    href="https://medium.com/@nicolecht/the-5-best-purchases-ive-made-f0461297e0d6"
    target="_blank"
  >
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={img} alt="img" className="w-[280px] h-[200px] object-fill m-auto" />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-dimBlack my-10 text-center">
        {title}
      </p>
      {/* <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex- flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-dimBlack">
          {name}
        </h4>
        <p className="font-poppins font-semibold text-[16px] leading-[24px] text-dimBlack">
          {title}
        </p>
      </div>
    </div> */}
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
