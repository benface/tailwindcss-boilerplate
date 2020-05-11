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
      // 'regular': '400',
      // 'medium': '500',
      // 'semibold': '600',
      // 'bold': '700',
      // 'extrabold': '800',
      // 'black': '900',
    },

    fontSize: {
      // 'xs': '0.12rem',
      // 'sm': '0.14rem',
      // 'default': '0.16rem',
      // 'lg': '0.18rem',
      // 'xl': '0.20rem',
      // '2xl': '0.24rem',
      // '3xl': '0.30rem',
      // '4xl': '0.36rem',
      // '5xl': '0.48rem',
      // '6xl': '0.64rem',
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
      // 'default': '0 0.01rem 0.03rem rgba(0, 0, 0, 0.2)',
    },

    boxShadow: {
      // 'xs': '0 0 0 0.01rem rgba(0, 0, 0, 0.05)',
      // 'sm': '0 0.01rem 0.02rem 0 rgba(0, 0, 0, 0.05)',
      // 'default': '0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.1), 0 0.01rem 0.02rem 0 rgba(0, 0, 0, 0.06)',
      // 'md': '0 0.04rem 0.06rem -0.01rem rgba(0, 0, 0, 0.1), 0 0.02rem 0.04rem -0.01rem rgba(0, 0, 0, 0.06)',
      // 'lg': '0 0.10rem 0.15rem -0.03rem rgba(0, 0, 0, 0.1), 0 0.04rem 0.06rem -0.02rem rgba(0, 0, 0, 0.05)',
      // 'xl': '0 0.20rem 0.25rem -0.05rem rgba(0, 0, 0, 0.1), 0 0.10rem 0.10rem -0.05rem rgba(0, 0, 0, 0.04)',
      // '2xl': '0 0.25rem 0.50rem -0.12rem rgba(0, 0, 0, 0.25)',
      // 'inner': 'inset 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.06)',
      // 'outline': '0 0 0 0.03rem rgba(66, 153, 225, 0.5)',
    },

    borderRadius: {
      // 'sm': '0.02rem',
      // 'default': '0.04rem',
      // 'md': '0.06rem',
      // 'lg': '0.08rem',
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
        fontWeight: theme('fontWeight.regular'),
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
        maxWidth: '12.80rem',
        padding: {
          'default': '0.15rem',
          'xs': '0.25rem',
          'md': '0.40rem',
        },
      },
      */
    },
  },

  extendVariants: {
    // textColor: ['focus-within', 'group-focus-within'],
  },
});
