import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
   content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      fontFamily: {
         primary: ["Plus Jakarta Sans", "Sans-serif"],
      },
      colors: {
         main: {
            green: "#2EBB77",
            gray: "#7E7E7E",
            icon: "#9B9B9B",
            light: "#F8F8F8",
            black: "#000000",
            white: "#FFFFFF",
         },
      },
      extend: {},
   },
   plugins: [],
});
