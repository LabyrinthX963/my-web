import Menu from "../components/menu";

const about = () => {
  return (
    <div>
      <Menu />
      <div className="flex flex-col justify-center items-center px-4">
        <div className="text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] text-zinc-200 font-bold block mt-2 lg:mt-0 py-0">
          {"{Hi...}"}
        </div>
        <div className="text-[1.3rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] text-zinc-200">
          I'm_a_full_stack_developer;
        </div>

        <div>
          <p className="text-zinc-200 text-lg text-center max-w-3xl mt-8 lg:mt-2">
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

          <div className="my-6 lg:my-2 text-zinc-200 text-lg space-y-1 text-center">
            <p>
              <span className="font-bold ">Education:</span> Bachelor of Science
              (Computer Science)
            </p>
          </div>
        </div>
        <div className="my-2 text-zinc-200 font-bold">Tech Stack</div>
        <div className="text-zinc-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-3 lg:gap-y-1 gap-x-14 mb-3 lg:mb-0">
          <div>Frontend : React, TailwindCSS</div>
          <div>
            Backend :{" "}
            <span className="">
              <span className="italic text-lime-500 font-extrabold">
                Java Spring Boot (Proficient)
              </span>
            </span>
            , FastAPI
          </div>
          <div>Database : SQL Server, MySQL, PostgreSQL, MongoDB</div>
          <div>Multiplatform : Flutter</div>

          <div>Version Control : Git, GitHub</div>
        </div>
      </div>
    </div>
  );
};

export default about;
