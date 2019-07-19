module.exports = require('@benface/tailwindcss-config')({
  // defaultVariants: ['responsive', 'hover', 'group-hover', 'focus', 'group-focus', 'active', 'group-active'],

  extendTheme: {
    screens: {
      // 'xs': '420px',
      // 'sm': '640px',
      // 'md': '768px',
      // 'lg': '1024px',
      // 'xl': '1280px',
    },

    colors: {
      // 'black': 'black',
    },

    fontFamily: {
      // 'default': [`'Roboto'`, 'sans-serif'],
    },

    fontWeight: {
      // 'hairline': '100',
      // 'thin': '200',
      // 'light': '300',
      // 'normal': '400',
      // 'medium': '500',
      // 'semibold': '600',
      // 'bold': '700',
      // 'extrabold': '800',
      // 'black': '900',
    },

    fontSize: {
      // 'xs': '12rem',
      // 'sm': '14rem',
      // 'default': '16rem',
      // 'lg': '18rem',
      // 'xl': '20rem',
      // '2xl': '24rem',
      // '3xl': '30rem',
      // '4xl': '36rem',
      // '5xl': '48rem',
      // '6xl': '64rem',
    },

    lineHeight: {
      // 'tight': '1.25',
      // 'default': '1.5',
      // 'loose': '2',
    },

    letterSpacing: {
      // 'tight': '-0.025em',
      // 'default': '0',
      // 'wide': '0.025em',
    },

    textShadow: {
      // 'default': '0 1rem 3rem rgba(0, 0, 0, 0.2)',
    },

    boxShadow: {
      // 'default': '0 1rem 3rem 0 rgba(0, 0, 0, 0.1), 0 1rem 2rem 0 rgba(0, 0, 0, 0.06)',
      // 'md': '0 4rem 6rem -1rem rgba(0, 0, 0, 0.1), 0 2rem 4rem -1rem rgba(0, 0, 0, 0.06)',
      // 'lg': '0 10rem 15rem -3rem rgba(0, 0, 0, 0.1), 0 4rem 6rem -2rem rgba(0, 0, 0, 0.05)',
      // 'xl': '0 20rem 25rem -5rem rgba(0, 0, 0, 0.1), 0 10rem 10rem -5rem rgba(0, 0, 0, 0.04)',
      // '2xl': '0 25rem 50rem -12rem rgba(0, 0, 0, 0.25)',
      // 'inner': 'inset 0 2rem 4rem 0 rgba(0, 0, 0, 0.06)',
      // 'outline': '0 0 0 3rem rgba(66, 153, 225, 0.5)',
    },

    borderRadius: {
      // 'sm': '2rem',
      // 'default': '4rem',
      // 'lg': '8rem',
    },

    textStyles: theme => ({
      /*
      heading: {
        output: false,
        fontWeight: theme('fontWeight.bold'),
        lineHeight: theme('lineHeight.tight'),
      },
      h1: {
        extends: 'heading',
        fontSize: theme('fontSize.6xl'),
      },
      h2: {
        extends: 'heading',
        fontSize: theme('fontSize.5xl'),
      },
      h3: {
        extends: 'heading',
        fontSize: theme('fontSize.4xl'),
      },
      h4: {
        extends: 'heading',
        fontSize: theme('fontSize.3xl'),
      },
      h5: {
        extends: 'heading',
        fontSize: theme('fontSize.2xl'),
      },
      h6: {
        extends: 'heading',
        fontSize: theme('fontSize.xl'),
      },
      link: {
        fontWeight: theme('fontWeight.bold'),
        color: theme('colors.blue'),
        '&:hover': {
          color: theme('colors.blue-light'),
          textDecoration: 'underline',
        },
      },
      richText: {
        fontWeight: theme('fontWeight.normal'),
        fontSize: theme('fontSize.default'),
        lineHeight: theme('lineHeight.default'),
        '> * + *': {
          marginTop: '1em',
        },
        'h1': {
          extends: 'h1',
        },
        'h2': {
          extends: 'h2',
        },
        'h3': {
          extends: 'h3',
        },
        'h4': {
          extends: 'h4',
        },
        'h5': {
          extends: 'h5',
        },
        'h6': {
          extends: 'h6',
        },
        'ul': {
          listStyleType: 'disc',
        },
        'ol': {
          listStyleType: 'decimal',
        },
        'a': {
          extends: 'link',
        },
        'b, strong': {
          fontWeight: theme('fontWeight.bold'),
        },
        'i, em': {
          fontStyle: 'italic',
        },
      },
      */
    }),

    fluidContainer: {
      /*
      'default': {
        maxWidth: '1280rem',
        padding: '15rem',
        responsivePadding: {
          'xs': '25rem',
          'md': '40rem',
        },
      },
      */
    },

  },
});
