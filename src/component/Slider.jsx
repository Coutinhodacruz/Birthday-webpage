import React, { useState, useEffect } from "react";

const images = [
  ",/../images/IMG-20250227-WA0009.jpg",
  "./../images/IMG-20250227-WA0010.jpg",
  "./../images/IMG-20250227-WA0011.jpg",
  "./../images/IMG-20250227-WA0012.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Open modal with clicked image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed bottom-0 w-full p-8 bg-white bg-opacity-90 backdrop-blur-md">
      {/* Image Slider */}
      <div className="flex overflow-x-auto scroll-snap-x-mandatory gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Memory ${index + 1}`}
            className="w-48 h-32 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform scroll-snap-align-center"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Popup"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Slider;