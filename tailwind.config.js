module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        keyframes: {
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-20px)" },
          },
          pulse: {
            "0%, 100%": { opacity: "1" },
            "50%": { opacity: "0.5" },
          },
          bounce: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
          fadeIn: {
            "0%": { opacity: "0", transform: "translateY(20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
        },
        animation: {
          float: "float 3s ease-in-out infinite",
          pulse: "pulse 2s ease-in-out infinite",
          bounce: "bounce 1.5s ease-in-out infinite",
          fadeIn1: "fadeIn 1s ease-out 0.5s forwards",
          fadeIn2: "fadeIn 1s ease-out 1.5s forwards",
          fadeIn3: "fadeIn 1s ease-out 2.5s forwards",
        },
      },
    },
    plugins: [],
  };
  