import styles from "../style";
import { logo } from "../assets";
import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleFormSubmit = () => {
      alert("Message Submitted");
    };

    return (
      <div className="flex-[1.5] w-full md:mt-0 mt-10 px-6">
        <h1 className={`${styles.heading2}`}>Let's Start</h1>
        <form
          action="../contactForm.php"
          method="post"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-row justify-between mb-2">
            <div className="w-full ">
              <input
                id="name"
                name="name"
                type="text"
                className="h-[45px] w-[98%] p-4 rounded-md border-2 bg-prima"
                placeholder="Your name"
                required
              />
            </div>
            <div className="w-full">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                className="h-[45px] w-full p-4 rounded-md border-2 bg-prima"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              className="h-[45px] w-full p-4 rounded-md border-2 bg-prima"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="h-[72px] w-full p-4 rounded-md border-2 bg-prima"
              required
            />
          </div>
          <div className="">
            <button
              type="submit"
              id="submit"
              name="submit"
              className={`py-3 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:scale-105 duration-200 ${styles}`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
