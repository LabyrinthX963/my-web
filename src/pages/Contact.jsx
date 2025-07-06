import Menu from "../components/menu";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contact = () => {
  return (
    <div>
      <Menu />
      <div className="text-zinc-200 text-3xl lg:text-4xl my-5 flex justify-center">
        I'd love to hear from you 🙂
      </div>
      <div className="text-zinc-200 text-lg flex flex-col items-center space-y-4 px-4 text-center max-w-2xl mx-auto">
        <p>
          Whether you have a question, feedback, or just want to say hi — feel
          free to reach out!
        </p>
        <p>
          I'm always open to chatting about new ideas, collaboration
          opportunities, or anything related to tech and development.
        </p>
        <p>
          You can contact me at:{" "}
          <a
            href="mailto:aegmongkol.j@outlook.com"
            className="text-sky-500 underline"
          >
            aegmongkol.j@outlook.com
          </a>
        </p>
        <p>
          Or connect with me on {/* ปุ่ม Social Icons */}
          <div className="flex space-x-6 mt-4 text-3xl justify-center">
            <a
              href="https://www.linkedin.com/in/bab-aegmongkol/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 p-3 rounded-full hover:bg-sky-600 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/LabyrinthX963"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 p-3 rounded-full hover:bg-sky-600 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default contact;
