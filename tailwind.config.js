/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },
        sunset: {
          '0%': { transform: 'translateY(5rem)' },
          '50%': { transform: 'translateY(2rem)' },
          '100%': { transform: 'translateY(0)' }
        },
        float: {
          '0%': { transform: 'translate(3vh, 5vh)' },
          '25%': { transform: 'translate(-3vh, -25vh)' },
          '50%': { transform: 'translate(3vh, -50vh)' },
          '75%': { transform: 'translate(-3vh, -75vh)' },
          '100%': { transform: 'translate(3vh, -100vh)' }
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        sunset: 'sunset 0.5s',
        'float-balloon': 'float 4s linear infinite'
      }
    },
    fontFamily: {
      sans: [
        'Roboto Mono',
        'monospace'
      ]
    }
  },
  plugins: []
}
