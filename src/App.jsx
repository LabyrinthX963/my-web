import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio_temp";
import Contact from "./pages/Contact_temp";

function App() {
  const location = useLocation();
  const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const randFloat = (min, max) => Math.random() * (max - min) + min;

  // 🟡 วงกลม amber
  const [circle1, setCircle1] = useState({
    top: 0,
    left: "20%",
    scale: 1,
  });

  // 🔴 วงกลม rose
  const [circle2, setCircle2] = useState({
    top: 50,
    left: "28%",
    scale: 1,
  });

  // 🔵 วงกลม indigo
  const [circle3, setCircle3] = useState({
    top: 100,
    right: 200,
    scale: 1,
  });

  // 🟢 วงกลม lime
  const [circle4, setCircle4] = useState({
    bottom: 30,
    left: -20,
    scale: 1,
  });

  useEffect(() => {
    setCircle1({
      top: rand(0, 400),
      left: rand(0, 800),
      scale: randFloat(0.8, 1.5),
    });

    setCircle2({
      top: rand(0, 300),
      left: rand(0, 800),
      scale: randFloat(0.7, 1.3),
    });

    setCircle3({
      top: rand(50, 300),
      right: rand(100, 600),
      scale: randFloat(0.9, 1.4),
    });

    setCircle4({
      bottom: rand(0, 150),
      left: rand(-100, 200),
      scale: randFloat(0.6, 1.2),
    });
  }, [location.pathname]);

  return (
    <div className="relative font-mono bg-black min-h-screen">
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* วงกลม amber */}
        <motion.div
          className="z-0 h-64 w-64 bg-amber-400 absolute rounded-full opacity-30 blur-2xl"
          animate={{
            ...circle1,
            y: [0, -15, 0],
          }}
          initial={circle1}
          transition={{
            top: { duration: 1.2 },
            left: { duration: 1.2 },
            scale: { duration: 1.2 },
            y: {
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        />

        {/* วงกลม rose */}
        <motion.div
          className="z-0 h-100 w-100 bg-rose-400 absolute rounded-full opacity-30 blur-2xl"
          animate={{
            ...circle2,
            x: [0, 10, 0],
          }}
          initial={circle2}
          transition={{
            top: { duration: 1.2 },
            left: { duration: 1.2 },
            scale: { duration: 1.2 },
            x: {
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        />

        {/* วงกลม indigo */}
        <motion.div
          className="z-0 h-90 w-90 bg-indigo-600 absolute rounded-full opacity-30 blur-2xl"
          animate={{
            ...circle3,
            rotate: [0, 5, -5, 0],
          }}
          initial={circle3}
          transition={{
            top: { duration: 1.2 },
            right: { duration: 1.2 },
            scale: { duration: 1.2 },
            rotate: {
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        />

        {/* วงกลม lime */}
        <motion.div
          className="z-0 h-120 w-120 bg-lime-500 absolute rounded-full opacity-30 blur-2xl"
          animate={{
            ...circle4,
            y: [0, 10, -10, 0],
          }}
          initial={circle4}
          transition={{
            bottom: { duration: 1.2 },
            left: { duration: 1.2 },
            scale: { duration: 1.2 },
            y: {
              duration: 7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        />
      </div>
      {/* เนื้อหา */}
      <div className="relative z-10 ">
        <Routes location={location}>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
