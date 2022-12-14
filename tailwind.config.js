/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'twgE':'#2C1C36',
        'twgS':'#0C1328',
        'twblue':'#37BCF6',
    }
    },
    screens : {
      'laptop':'1536px',
      'oppo':'360px',
      // height=800,width=360
    }
  },
  plugins: [],
}
