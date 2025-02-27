/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        table: '0px 10px 13px 0px rgba(17, 38, 146, 0.05)',
        datepicker: 'rgba(0, 0, 0, 0.25) 0px 14px 28px ,rgba(0, 0, 0, 0.22) 0px 10px 10px',
        daterange: '0px 0px 4px 0px rgba(0, 0, 0, 0.3)'
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      textColor: {
        rgba128: 'rgba(128, 128, 128, 0.7)'
      },
      borderColor: {
        gba128: 'rgba(128, 128, 128, 0.7)'
      },
      screens: {
        'ssm': '500px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

