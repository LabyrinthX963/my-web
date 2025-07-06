import { useEffect, useRef, useState } from "react";
import Menu from "../components/menu";
import PortList from "../components/PortList";
import { FaArrowUp } from "react-icons/fa";

import p1_img1 from "../assets/portImg/1/img1.png";
import p1_img2 from "../assets/portImg/1/img2.png";
import p1_img3 from "../assets/portImg/1/img3.png";

import p2_img1 from "../assets/portImg/2/img1.png";
import p2_img2 from "../assets/portImg/2/img2.png";
import p2_img3 from "../assets/portImg/2/img3.png";

import p3_img1 from "../assets/portImg/3/img1.png";
import p3_img2 from "../assets/portImg/3/img2.png";
import p3_img3 from "../assets/portImg/3/img3.png";
import p3_img4 from "../assets/portImg/3/img4.png";

const portfolio = () => {
  const p1_title = "Personal Website (This Website)";
  const p1_tech = "React,TailwindCSS";
  const p1_details =
    "Just a simple and friendly personal site to share my projects and what I've been learning along the way. It's built with React and styled with TailwindCSS — the same site you're on right now :)";
  const images_1 = [p1_img1, p1_img2, p1_img3];

  const p2_title = "Employee Gateway System";
  const p2_tech =
    "React,TailwindCSS,Spring Boot,SQL Server,MongoDB,RESTful,Web Socket";
  const p2_details =
    "A full-stack system used daily by nearly 1,000 employees as their gateway to internal web apps. The frontend communicates with the backend via REST API. Key features include user profiles, multiple color themes to keep things fresh, and a customizable favorite menu that helps users quickly access the apps they actually use. Fully secured with Spring Security.";
  const images_2 = [p2_img1, p2_img2, p2_img3];

  const p3_title = "Hotel Room Inspection App";
  const p3_tech = "Thymeleaf,TailwindCSS,Spring Boot,SQL Server";
  const p3_details =
    "A full-stack hotel room inspection app built for housekeeper supervisors. Designed to be used on tablets with responsive UI, GPS tracking, and detailed room audit logs. Makes room checks more organized and searchable. Fully secured using Spring Security.";
  const images_3 = [p3_img1, p3_img2, p3_img3, p3_img4];

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
      behavior: "smooth",
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
      <div className="text-zinc-200 text-3xl lg:text-4xl my-5 flex justify-center">
        Some of My Projects
      </div>

      <div className="flex items-center flex-col mt-4 gap-4 pb-10">
        <PortList
          title={p1_title}
          tech={p1_tech}
          details={p1_details}
          images={images_1}
        />

        <PortList
          title={p3_title}
          tech={p3_tech}
          details={p3_details}
          images={images_3}
        />

        <PortList
          title={p2_title}
          tech={p2_tech}
          details={p2_details}
          images={images_2}
        />
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

export default portfolio;
