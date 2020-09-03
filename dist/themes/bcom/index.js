"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = exports.tachyonsVariables = void 0;
var tachyonsVariables = "\n  \n";
exports.tachyonsVariables = tachyonsVariables;
var theme = {
  cssVars: "\n    :root {\n      --sans-serif:\n        -apple-system, BlinkMacSystemFont,\n        'avenir next', avenir,\n        helvetica, 'helvetica neue',\n        ubuntu,\n        noto,\n        'segoe ui',\n        arial,\n        sans-serif;\n      --serif: georgia, serif;\n      --code: consolas, monaco, monospace;\n      --font-size-headline: 6rem;\n      --font-size-subheadline: 5rem;\n      --font-size-1: 3rem;\n      --font-size-2: 2.25rem;\n      --font-size-3: 1.5rem;\n      --font-size-4: 1.25rem;\n      --font-size-5: 1rem;\n      --font-size-6: .875rem;\n      --letter-spacing-tight:-.05em;\n      --letter-spacing-1:.1em;\n      --letter-spacing-2:.25em;\n      --line-height-solid: 1;\n      --line-height-title: 1.25;\n      --line-height-copy: 1.5;\n      --measure: 30em;\n      --measure-narrow: 20em;\n      --measure-wide: 34em;\n      --spacing-none: 0;\n      --spacing-extra-small: .25rem;\n      --spacing-small: .5rem;\n      --spacing-medium: 1rem;\n      --spacing-large: 2rem;\n      --spacing-extra-large: 4rem;\n      --spacing-extra-extra-large: 8rem;\n      --spacing-extra-extra-extra-large: 16rem;\n      --height-1: 1rem;\n      --height-2: 2rem;\n      --height-3: 4rem;\n      --height-4: 8rem;\n      --height-5: 16rem;\n      --width-1: 1rem;\n      --width-2: 2rem;\n      --width-3: 4rem;\n      --width-4: 8rem;\n      --width-5: 16rem;\n      --max-width-1: 1rem;\n      --max-width-2: 2rem;\n      --max-width-3: 4rem;\n      --max-width-4: 8rem;\n      --max-width-5: 16rem;\n      --max-width-6: 32rem;\n      --max-width-7: 48rem;\n      --max-width-8: 64rem;\n      --max-width-9: 96rem;\n      --border-radius-none: 0;\n      --border-radius-1: .125rem;\n      --border-radius-2: .25rem;\n      --border-radius-3: .5rem;\n      --border-radius-4: 1rem;\n      --border-radius-circle: 100%;\n      --border-radius-pill: 9999px;\n      --border-width-none: 0;\n      --border-width-1: .125rem;\n      --border-width-2: .25rem;\n      --border-width-3: .5rem;\n      --border-width-4: 1rem;\n      --border-width-5: 2rem;\n      --box-shadow-1: 0px 0px 4px 2px rgba( 0, 0, 0, 0.2 );\n      --box-shadow-2: 0px 0px 8px 2px rgba( 0, 0, 0, 0.2 );\n      --box-shadow-3: 2px 2px 4px 2px rgba( 0, 0, 0, 0.2 );\n      --box-shadow-4: 2px 2px 8px 0px rgba( 0, 0, 0, 0.2 );\n      --box-shadow-5: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );\n      --black: #43474d;\n      --near-black: #1c2833;\n      --dark-gray: #707c80;\n      --mid-gray:#dadedf;\n      --gray: #c1c7c9;\n      --silver: #999;\n      --light-silver: #aaa;\n      --moon-gray: #ccc;\n      --light-gray: #f8f8f8;\n      --near-white: #f4f4f4;\n      --white: #fff;\n      --transparent: transparent;\n      --black-90: rgba(0,0,0,.9);\n      --black-80: rgba(0,0,0,.8);\n      --black-70: rgba(0,0,0,.7);\n      --black-60: rgba(0,0,0,.6);\n      --black-50: rgba(0,0,0,.5);\n      --black-40: rgba(0,0,0,.4);\n      --black-30: rgba(0,0,0,.3);\n      --black-20: rgba(193,199,201,1);\n      --black-10: rgba(0,0,0,.1);\n      --black-05: rgba(0,0,0,.05);\n      --black-025: rgba(0,0,0,.025);\n      --black-0125: rgba(0,0,0,.0125);\n      --white-90: rgba(255,255,255,.9);\n      --white-80: rgba(255,255,255,.8);\n      --white-70: rgba(255,255,255,.7);\n      --white-60: rgba(255,255,255,.6);\n      --white-50: rgba(255,255,255,.5);\n      --white-40: rgba(255,255,255,.4);\n      --white-30: rgba(255,255,255,.3);\n      --white-20: rgba(255,255,255,.2);\n      --white-10: rgba(255,255,255,.1);\n      --white-05: rgba(255,255,255,.05);\n      --white-025: rgba(255,255,255,.025);\n      --white-0125: rgba(255,255,255,.0125);\n      --dark-red:  #e7040f;\n      --red:  #c02f1d;\n      --light-red:  #ff725c;\n      --orange:  #f96302;\n      --gold:  #ffb700;\n      --yellow:  #fcc300;\n      --light-yellow:  #fbf1a9;\n      --purple:  #5e2ca5;\n      --light-purple:  #a463f2;\n      --dark-pink:  #d5008f;\n      --hot-pink: #ff41b4;\n      --pink:  #ff80cc;\n      --light-pink:  #ffa3d7;\n      --dark-green:  #137752;\n      --green:  #73b93b;\n      --light-green:  #9eebcf;\n      --navy:  #001b44;\n      --dark-blue:  #031f73;\n      --blue:  #3060af;\n      --light-blue:  #3455db;\n      --lightest-blue:  #417ca5;\n      --washed-blue:  #f2f5f8;\n      --washed-green:  #e8fdf5;\n      --washed-yellow:  #fef5d7;\n      --washed-red:  #ffdfdf;\n      --alice-blue:  #eafaff;\n      --pacific-blue:  #0093d6;\n      --mobile-menu-width: 256px;\n    }\n  ",
  name: 'Blinds.com',
  backgroundColor: 'white',
  button: {
    base: '',
    primary: 'bg-orange white b--orange',
    secondary: 'bg-lightest-blue white b--lightest-blue',
    tertiary: 'bg-dark-blue white b--dark-blue'
  },
  alert: {
    "default": {
      container: 'bg-light-gray b--mid-gray',
      icon: 'gray',
      text: 'near-black'
    },
    error: {
      container: 'bg-washed-red b--red',
      icon: 'red',
      text: 'red'
    },
    warning: {
      container: 'bg-light-gray b--mid-gray',
      icon: 'gray',
      text: 'near-black'
    }
  },
  configurator: {
    option: {
      dictionaryTermBackgroundColor: 'bg-light-blue',
      selectedIcon: 'light-blue',
      selectedBorder: 'b--light-blue',
      titleBorder: ''
    },
    price: 'black',
    promo: 'red',
    summary: {
      background: 'bg-washed-blue',
      choiceValue: 'black',
      floatingBar: {
        background: 'bg-navy'
      },
      stickyTop: '1rem'
    }
  },
  modal: {
    closeButton: 'black',
    closeButtonHover: 'hover-bg-light-gray hover-blue'
  }
};
exports.theme = theme;