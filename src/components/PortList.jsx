import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalPortal from "./ModalPortal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const PortList = ({ title, tech, details, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex < images.length - 1) {
      setSelectedIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    }
  };

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <div className="rounded-2xl bg-zinc-300/15 backdrop-blur-lg mx-2 lg:mx-0 lg:w-300 p-4 hover:bg-zinc-100/15 transition-all duration-300">
      <div className="text-white text-2xl font-bold mb-2">{title}</div>
      <div className="grid grid-cols-2 space-x-1 space-y-1 mb-4 w-max mx-auto lg:flex lg:gap-6">
        {images &&
          images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`${title} screenshot ${index + 1}`}
              className="w-50 h-auto object-cover rounded cursor-pointer hover:ring-2 hover:ring-slate-200/30 transition-all duration-300"
              onClick={() => openModal(index)}
            />
          ))}
      </div>
      <div className="my-2">
        <div className="text-white !font-bold">
          <span>Tech : </span>
          {tech}
        </div>
        <div className="text-white">{details}</div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ModalPortal>
            <motion.div
              key="modal"
              className="fixed inset-0 bg-slate-700/30 backdrop-blur-2xl flex flex-col items-center justify-center z-50"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* ปุ่มปิด */}
              <button
                className="bg-slate-600 text-zinc-300 hover:bg-slate-300 hover:text-zinc-400 transition-all duration-300 px-4 py-3 absolute right-4 top-4 cursor-pointer rounded-lg z-50"
                onClick={closeModal}
              >
                <IoCloseOutline className="text-md" />
              </button>

              {/* รูปภาพ */}
              <img
                src={images[selectedIndex]}
                alt="preview"
                loading="eager"
                fetchpriority="high"
                className="max-w-full max-h-[80vh] object-contain mb-4"
                onClick={(e) => e.stopPropagation()}
              />

              {/* ปุ่มซ้าย/ขวา บน mobile – อยู่ด้านล่างภาพ */}
              <div className="flex gap-6 lg:hidden z-50">
                <button
                  disabled={selectedIndex <= 0}
                  className="rounded-2xl bg-slate-600 px-6 py-3 text-2xl text-white disabled:opacity-30"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <FaChevronLeft />
                </button>
                <button
                  disabled={selectedIndex >= images.length - 1}
                  className="rounded-2xl bg-slate-600 px-6 py-3 text-2xl text-white disabled:opacity-30"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* ปุ่มซ้าย/ขวา overlay เฉพาะบน desktop */}
              <button
                className="hidden lg:block absolute left-10 top-1/2 cursor-pointer -translate-y-1/2 text-zinc-200 bg-slate-700 text-4xl px-6 py-6 rounded-l-3xl rounded-r-lg hover:bg-slate-400 disabled:bg-gray-500 disabled:text-slate-600 disabled:cursor-default z-50 transition-all duration-300"
                disabled={selectedIndex <= 0}
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <FaChevronLeft />
              </button>

              <button
                className="hidden lg:block absolute right-10 top-1/2 cursor-pointer -translate-y-1/2 text-zinc-200 bg-slate-700 text-4xl px-6 py-6 rounded-r-3xl rounded-l-lg hover:bg-slate-400 disabled:bg-gray-500 disabled:text-slate-600 disabled:cursor-default z-50 transition-all duration-300"
                disabled={selectedIndex >= images.length - 1}
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <FaChevronRight />
              </button>
            </motion.div>
          </ModalPortal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortList;
