import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pictureOne from "./../images/IMG-20250227-WA0015.jpg";
import pictureTwo from "./../images/IMG-20250303-WA0043.jpg";
import pictureThree from "./../images/IMG-20250227-WA0009.jpg";
import pictureFour from "./../images/IMG-20250227-WA0010.jpg";
import pictureFive from "./../images/IMG-20250227-WA0012.jpg";
import pictureSix from "./../images/IMG-20250227-WA0013.jpg";
import pictureSeven from "./../images/IMG-20250227-WA0014.jpg";
import pictureEight from "./../images/IMG-20250227-WA0015.jpg";
import pictureNine from "./../images/IMG-20250303-WA0037.jpg";
import pictureTen from "./../images/IMG-20250303-WA0041.jpg";
import pictureEle from "./../images/IMG-20250303-WA0047.jpg";
import pictureTwevle from "./../images/IMG-20250303-WA0045.jpg";
import pictureThirteen from "./../images/IMG-20250303-WA0044.jpg";

const images = [
  pictureOne,
  pictureTwo,
  pictureThree,
  pictureFour,
  pictureFive,
  pictureSix,
  pictureSeven,
  pictureEight,
  pictureNine,
  pictureTen,
  pictureEle,
  pictureTwevle,
  pictureThirteen,
];

const BirthdayPage = () => {
  const [animateText, setAnimateText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const fullSubtitle = "The King of Luxury and Hospitality";
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Text animation for main title
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateText((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect for subtitle
  useEffect(() => {
    if (currentWordIndex < fullSubtitle.split(" ").length) {
      const timeout = setTimeout(() => {
        setSubtitle((prev) => prev + " " + fullSubtitle.split(" ")[currentWordIndex]);
        setCurrentWordIndex((prev) => prev + 1);
      }, 300); // Speed of typing (300ms per word)
      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex, fullSubtitle]);

  // Slider settings (arrows removed)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Remove arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Open modal with clicked image
  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md opacity-50"
        style={{ backgroundImage: `url(${images[0]})` }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-6 text-white">
        {/* Profile Image */}
        <img
          src={images[1]}
          alt="Obi Cubana"
          className="w-96 h-[500px] rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-float"
        />

        {/* Birthday Text */}
        <div className="text-center md:text-left">
          <h1
            className={`text-6xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent transition-all duration-700 ${
              animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Happy Birthday, Obi Cubana!
          </h1>
          <h2 className="text-4xl mt-4 font-playfair animate-typing overflow-hidden whitespace-nowrap">
            {subtitle}
          </h2>
          <p className="text-2xl mt-2 animate-pulse">
            Celebrating a man who redefines success, style, and generosity. Your
            journey inspires millions, and your legacy shines brighter than ever.
            Here's to more years of greatness, impact, and unforgettable moments!
          </p>
        </div>
      </div>

      {/* Image Slider */}
      <div className="relative z-10 w-4/5 mt-10">
        <Slider {...sliderSettings}>
          {images.slice(1).map((img, index) => (
            <div
              key={index}
              className="px-2 cursor-pointer"
              onClick={() => openModal(img)}
            >
              <img
                src={img}
                alt="Celebration"
                className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal for Pop-up Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Popup"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default BirthdayPage;