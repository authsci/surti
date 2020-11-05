module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
  },
  theme: {
    extend: {
      transitionTimingFunction: {
        'ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      spacing: {
        96: '13rem',
        47: '11rem',
        22: '5.5rem',
        50: '12.5rem',
        80: '20rem',
        21: '5.25rem',
        11: '2.85rem',
        7: '1.75rem',
      },
      scale: {
        200: '2.5',
        60: '.4',
      },
      colors: {
        pink: '#e5b3b4',
        auc: '#e1af19',
        aub: '#2afd82',
        fuabc: '#053b71',
        iua: '#fc272e',
        grey: '#bababa',
        menu: '#E3E3E3',
      },
    },
  },
  variants: {
    width: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
