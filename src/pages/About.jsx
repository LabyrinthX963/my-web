import Menu from "../components/Menu";
import { useRef, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const about = () => {
  const containerRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (containerRef.current) {
      setShowButton(containerRef.current.scrollTop > 300);
    }
  };

  const scrollToTop = () => {
    containerRef.current?.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="overflow-y-auto h-screen scrollbar-hide">
      <Menu />
      <div className="flex flex-col justify-center items-center px-4 lg:px-8 lg:pt-6 lg:pb-10">
        <div className="text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] text-zinc-200 font-bold block mt-2 lg:mt-0 py-0 leading-none">
          {"{Hi...}"}
        </div>

        <div className="text-[1.3rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] text-zinc-200 mt-2 lg:mt-4 lg:mb-6 leading-tight">
          I'm_a_full_stack_developer;
        </div>

        <div className="w-full flex flex-col items-center lg:space-y-4">
          <p className="text-zinc-200 text-lg text-center max-w-3xl lg:max-w-5xl mt-8 lg:mt-2 lg:text-xl lg:leading-relaxed">
            Hi! I'm Aegmongkol Jitlang, but you can call me{" "}
            <span className="text-sky-300 font-bold">
              Bab<span className="font-mitr font-light"> (แบ๊บ) </span>
            </span>
            . I'm a full stack developer who loves building clean, practical web
            applications and finding smart solutions to real-world problems.
            Lately, I've been exploring AI and how it can enhance the way we
            build and interact with software. I'm always up for learning
            something new and excited about opportunities where I can grow,
            contribute, and collaborate with great teams.
          </p>

          <div className="my-6 lg:my-4 text-zinc-200 text-lg space-y-1 text-center">
            <p>
              <span className="font-bold ">Education:</span> Bachelor of Science
              (Computer Science)
            </p>
          </div>
        </div>

        <div className="my-2 lg:my-4 text-zinc-200 font-bold text-xl">
          Tech Stack
        </div>

        <div className="text-zinc-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-3 lg:gap-y-3 lg:gap-x-16 mb-3 lg:mb-8 text-center lg:text-left text-base lg:text-lg">
          <div>Frontend : React, TailwindCSS</div>
          <div>
            Backend :{" "}
            <span className="italic text-lime-500 font-extrabold">
              Java Spring Boot (Proficient)
            </span>
            , FastAPI
          </div>
          <div>Database : SQL Server, MySQL, PostgreSQL, MongoDB</div>
          <div>Multiplatform : Flutter</div>
          <div>Version Control : Git, GitHub</div>
          <div>Infrastructure Tools: Kafka, Docker</div>
        </div>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-6 right-6 bg-slate-600 hover:bg-slate-400 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default about;
