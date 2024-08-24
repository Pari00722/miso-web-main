/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
       fontFamily: {
        handlee: ['Handlee', 'cursive'],
        yeseva: ['"Yeseva One"', 'serif'],
        times: ['Times New Roman', 'serif']
      }



    },
  },
  plugins: [],
=======
      flex: {
        '70': '0 0 60%',
        '30': '0 0 30%',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        moveLeftToRight: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },

          '20%': {
            transform: 'translateX(5%)',
            opacity: '0'
          },

          '40%': {
            transform: 'translateX(6%)',
            opacity: '0'
          },

          '60%': {
            transform: 'translateX(7%)',
            opacity: '0'
          },

          '80%': {
            transform: 'translateX(8%)',
            opacity: '0'
          },

          '100%': {
            transform: 'translateX(10%)',
            opacity: '1'
          },
        },
      },
      animation: {

        fadeIn: 'fadeIn 4s ease-in-out forwards',
        moveLeftToRight: 'moveLeftToRight 4s ease forwards',
      },
    },
    plugins: [],
  }
>>>>>>> origin/main
};
