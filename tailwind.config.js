module.exports = {
  content: [
    "./pages/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      brittany: ["BrittanySignature"],
      montserratLightItalic: ["Montserrat-LightItalic"],
      montserratMedium: ["Montserrat-Medium"],
      montserratMediumItalic: ["Montserrat-MediumItalic"],
      montserratLight: ["Montserrat-Light"],
    },
    extend: {
      backgroundImage: {
        backhome: "url('/images/backhome.jpg')",
        backnous: "url('/images/backnous.jpg')",
        backphone: "url('/images/backphone.png')",
      },
    },
  },
  plugins: [],
};
