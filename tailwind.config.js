module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Montserrat",
      accent: "Raiders",
      logo: "Josefin Sans",
      salt: "Anton",
      // secondary: "Sometype Mono",
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#0E1112",
        gold: "#92764e",
        blue: "#2F53FA",
        brightgreen: "#305245",
        lightgreen: "#5b9b85",
        greenchair: "#354230",
        purple: "#d0b8ee",
        grey: "#484B4B",
        green: "#5D5C39",
        beige: "#F8F4EB",
        red: "#ad352c",
        beiged: "#d4cabeff",
        bottega: "#d2cabf",
        white: "#ffffff",
        // accent: "#EEF7F9",
      },
    },
  },
  plugins: [],
};
