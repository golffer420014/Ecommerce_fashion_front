/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: "#9c28af",
                primaryBg: "#f5f5f5",
                // 
                primarySubCon: "#ffff",
            },
            padding:{
              df:'px-[100px]'
            }
        },
    },
    plugins: [],
};
