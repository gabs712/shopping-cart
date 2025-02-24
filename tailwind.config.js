const config = {
  darkMode: 'selector',
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        brandHighlight: '#60A5FA',
      },
      keyframes: {
        increasingSize: {
          from: {
            transform: 'scaleX(0%)',
          },
          to: {
            transform: 'scaleX(100%)',
          },
        },
      },
    },
  },
}

export default config
