<template>
  <div id="app">
    <app-header></app-header>
    <grid-1></grid-1>
    <about></about>
    <grid-5></grid-5>
    <portfolio></portfolio>
    <contact></contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Grid1 from './components/portfolio/grid/Grid1'
import Grid5 from './components/portfolio/grid/Grid5'
export default {
  name: 'App',
  data () {
    return {
      title: 'Portfolio'
    }
  },
  components: {
    'app-header': Header,
    Grid1,
    About,
    Grid5,
    Portfolio,
    Contact,
    'app-footer': Footer
  },
  created () {
    // Color Change
    var red = 255
    var green = 63
    var blue = 52
    var color
    var colorRGBA
    var currentColor

    setInterval(() => {
      if (red === 255 && green === 63 && blue === 52) { currentColor = 'red' }
      if (red === 255 && green === 211 && blue === 42) { currentColor = 'yellow' }
      if (red === 5 && green === 196 && blue === 107) { currentColor = 'green' }
      if (red === 0 && green === 216 && blue === 214) { currentColor = 'cyan' }
      if (red === 60 && green === 64 && blue === 198) { currentColor = 'blue' }
      if (red === 136 && green === 84 && blue === 208) { currentColor = 'purple' }
      if (currentColor === 'red' && (green < 211 || blue > 42)) {
        if (green < 211) {
          green++
        } else if (blue > 42) {
          blue--
        }
      } else if (currentColor === 'yellow' && (red > 5 || green > 196 || blue < 107)) {
        if (red > 5) {
          red--
        } else if (green > 196) {
          green--
        } else if (blue < 107) {
          blue++
        }
      } else if (currentColor === 'green' && (red > 0 || green < 216 || blue < 214)) {
        if (red > 0) {
          red--
        } else if (green < 216) {
          green++
        } else if (blue < 214) {
          blue++
        }
      } else if (currentColor === 'cyan' && (red < 60 || green > 64 || blue > 198)) {
        if (red < 60) {
          red++
        } else if (green > 64) {
          green--
        } else if (blue > 198) {
          blue--
        }
      } else if (currentColor === 'blue' && (red < 136 || green < 84 || blue < 208)) {
        if (red < 136) {
          red++
        } else if (green < 84) {
          green++
        } else if (blue < 208) {
          blue++
        }
      } else if (currentColor === 'purple' && (red < 255 || green > 63 || blue > 52)) {
        if (red < 255) {
          red++
        } else if (green > 63) {
          green--
        } else if (blue > 52) {
          blue--
        }
      }

      color = 'rgb(' + red + ',' + green + ',' + blue + ')'
      colorRGBA = 'rgba(' + red + ',' + green + ',' + blue + ',0.6)'
      document.documentElement.style.setProperty('--primary', color)
      document.documentElement.style.setProperty('--primary-rgba', colorRGBA)
    }, 500)
  }
}
</script>

<style lang="scss">
  :root {
    --primary : red;
    --primary-rgba: rgba(255,0,0,0.6);
    --pink-light : #ef5777;
    --pink : #f53b57;
    --red-light: #ff5e57;
    --red: #ff3f34;
    --orange-light: #ffc048;
    --orange: #ffa801;
    --yellow-light: #ffdd59;
    --yellow : #ffd32a;
    --green-light : #0be881;
    --green : #05c46b;
    --turquoise-light: #34e7e4;
    --blue-light : #4bcffa;
    --blue : #0fbcf9;
    --purple-light : #575fcf;
    --purple : #3c40c6;
    --white : #ffffff;
    --off-white : #f5f6fa;
    --grey-light : #d2dae2;
    --grey : #808e9b;
    --grey-dark : #485460;
    --off-black : #1e272e;
    --black : #232323;
    color: var(--black);
  }
  @mixin bp-phone {
      @media only screen and (max-width: 599px) {
          @content;
      }
  }
  @mixin bp-tablet-p {
      @media only screen and (max-width: 899px) and (min-width: 600px) {
          @content;
      }
  }
  @mixin bp-tablet-l {
      @media only screen and (max-width: 1199px) and (min-width: 900px) {
          @content;
      }
  }
  @mixin bp-laptop {
      @media only screen and (max-width: 1799px) and (min-width: 1200px) {
          @content;
      }
  }
  @mixin bp-desktop {
      @media only screen and (min-width: 1800px) {
          @content;
      }
  }
  * {
    box-sizing: border-box;
  }
  body {
      background-image: linear-gradient(to bottom left, var(--primary-rgba), var(--primary-rgba)), url("../static/assets/background.jpeg");
      background-attachment: fixed;
      background-size: cover;
      padding: 3vh;
      width: 100%;
      max-width: 100%;
  }
  html {
    font-size: 10px;
    line-height: 1.5;
}
h1 {
    font-family: 'lato', sans-serif;
}

h2 {
    font-family: 'lato', sans-serif;
}

h3 {
    font-family: 'lato', sans-serif;
}

h4 {
    font-family: 'lato', sans-serif;
}

h5 {
    font-family: 'lato', sans-serif;
}

h6 {
    font-family: 'lato', sans-serif;
}

small {
    font-family: 'lato', sans-serif;
}

p {
    font-family: 'open-sans', sans-serif;
}

a {
    font-family: 'lato', sans-serif;
    text-decoration: none;
}
@mixin icon {
    font-size: 6vh;

    @include bp-phone {
        font-size: 6vh;
    }
}
.section__icon {
    &--html {
        color: var(--red);
        font-size: 8vmin;
        @include icon;
        margin: 0 .1rem;
    }
    &--css {
        color: var(--blue-light);
        font-size: 8vmin;
        @include icon;
        margin: 0 .1rem;
    }
    &--js {
        color: var(--yellow);
        font-size: 8vmin;
        @include icon;
        margin: 0 .1rem;
    }
    &--bootstrap {
        color: var(--purple);
        font-size: 8vmin;
        @include icon;
        margin: 0 .1rem;
    }
    &--wordpress {
        color: var(--grey-dark);
        font-size: 8vmin;
        @include icon;
        margin: 0 .1rem;
    }
    &--google {
        color: var(--blue);
        font-size: 8vmin;
        @include icon;
        margin: 0 .1rem;
    }
    &--vuejs {
        color: #42b883;
        font-size: 8vmin;
        @include icon;
        margin: 0 .1rem;
    }
    &--webpack {
        color: #1d78c1;
        font-size: 8vmin;
        @include icon;
        margin: 0 .1rem;
    }
    &--babel {
        color: #fed330;
        font-size: 8vmin;
        @include icon;
        margin: 0 .1rem;
    }
    &--sass {
        color: #c69;
        font-size: 8vmin;
        @include icon;
        margin: 0 .1rem;
    }
    &--github {
        font-size: 5vmin;
        margin-right: 3vh;
        color: var(--white);
        transition: all .3s;

        &:hover {
            color: var(--black);
        }
    }
}
  </style>
