<template>
  <div id="home">
    <app-header></app-header>
    <!-- <div class="top"></div> -->
    <grid-1></grid-1>
    <about></about>
    <grid-5></grid-5>
    <portfolio></portfolio>
    <!-- <div class="bottom"></div> -->
    <contact></contact>
    <app-footer></app-footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Header";
import About from "./About";
import Intro from "./portfolio/Intro";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Grid1 from "./portfolio/grid/Grid1";
import Grid4 from "./portfolio/grid/Grid4";
import Grid5 from "./portfolio/grid/Grid5";
export default {
  name: "App",
  components: {
    "app-header": Header,
    Grid1,
    About,
    Grid5,
    Intro,
    Grid4,
    Portfolio,
    Contact,
    "app-footer": Footer
  },
  data() {
    return {
      red: 255,
      green: 0,
      blue: 0,
      currentColor: "",
      color: "",
      colorRGBA: ""
    };
  },
  beforeMount() {
    var index = Math.floor(Math.random() * 3) + 1;
    var red = this.red;
    var green = this.green;
    var blue = this.blue;
    var currentColor = this.currentColor;
    var color = this.color;
    var colorRGBA = this.colorRGBA;

    switch (index) {
      case 1:
        red = 5;
        green = 196;
        blue = 107;
        break;
      case 2:
        red = 0;
        green = 216;
        blue = 214;
        break;
      case 3:
        red = 60;
        green = 64;
        blue = 198;
        break;
      default:
        break;
    }

    color = "rgb(" + red + "," + green + "," + blue + ")";
    colorRGBA = "rgba(" + red + "," + green + "," + blue + ",0.6)";
    document.documentElement.style.setProperty("--primary", color);
    document.documentElement.style.setProperty("--primary-rgba", colorRGBA);

    setInterval(() => {
      // if (red === 255 && green === 63 && blue === 52) {
      //   currentColor = "red";
      // }
      // if (red === 255 && green === 211 && blue === 42) {
      //   currentColor = "yellow";
      // }
      if (red === 5 && green === 196 && blue === 107) {
        currentColor = "green";
      }
      if (red === 0 && green === 216 && blue === 214) {
        currentColor = "cyan";
      }
      if (red === 60 && green === 64 && blue === 198) {
        currentColor = "blue";
      }
      // if (red === 136 && green === 84 && blue === 208) {
      //   currentColor = "purple";
      // }
      // if (currentColor === "red" && (green < 211 || blue > 42)) {
      //   if (green < 211) {
      //     green++;
      //   } else if (blue > 42) {
      //     blue--;
      //   }
      // } else if (
      //   currentColor === "yellow" &&
      //   (red > 5 || green > 196 || blue < 107)
      // ) {
      //   if (red > 5) {
      //     red--;
      //   } else if (green > 196) {
      //     green--;
      //   } else if (blue < 107) {
      //     blue++;
      //   }
      // }
      if (currentColor === "green" && (red > 0 || green < 216 || blue < 214)) {
        if (red > 0) {
          red--;
        } else if (green < 216) {
          green++;
        } else if (blue < 214) {
          blue++;
        }
      } else if (
        currentColor === "cyan" &&
        (red < 60 || green > 64 || blue > 198)
      ) {
        if (red < 60) {
          red++;
        } else if (green > 64) {
          green--;
        } else if (blue > 198) {
          blue--;
        }
      } else if (
        currentColor === "blue" &&
        (red > 5 || green < 196 || blue > 107)
      ) {
        if (red > 5) {
          red--;
        } else if (green < 196) {
          green++;
        } else if (blue > 107) {
          blue--;
        }
      }
      color = "rgb(" + red + "," + green + "," + blue + ")";
      colorRGBA = "rgba(" + red + "," + green + "," + blue + ",0.6)";
      document.documentElement.style.setProperty("--primary", color);
      document.documentElement.style.setProperty("--primary-rgba", colorRGBA);
    }, 1000);
  }
};
</script>

<style lang="scss">
:root {
  --primary: red;
  --primary-rgba: rgba(255, 0, 0, 0.6);
  --pink-light: #ef5777;
  --pink: #f53b57;
  --red-light: #ff5e57;
  --red: #ff3f34;
  --orange-light: #ffc048;
  --orange: #ffa801;
  --yellow-light: #ffdd59;
  --yellow: #ffd32a;
  --green-light: #0be881;
  --green: #05c46b;
  --turquoise-light: #34e7e4;
  --blue-light: #4bcffa;
  --blue: #0fbcf9;
  --purple-light: #575fcf;
  --purple: #3c40c6;
  --white: #ffffff;
  --off-white: #f5f6fa;
  --grey-light: #d2dae2;
  --grey: #808e9b;
  --grey-dark: #485460;
  --off-black: #1e272e;
  --black: #232323;
  color: var(--black);
}
body {
  overflow-x: hidden;
  margin: 0;
}
@mixin slant {
  transform: skewY(-8deg);
}
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  align-content: center;
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
  background-image: linear-gradient(
      to bottom left,
      var(--primary-rgba),
      var(--primary-rgba)
    ),
    url("../../static/assets/background.jpeg");
  background-attachment: fixed;
  background-size: cover;
  padding: 3vh;
  max-width: 100%;
  font-family: "lato", sans-serif;
}
html {
  font-size: 10px;
  line-height: 1.5;
}
a {
  text-decoration: none;
}
.top {
  height: 5vh;
  width: 100%;
  @include slant;
  @include center;
  background-color: var(--white);
  margin-bottom: 9%;
  margin-top: -11%;

  @include bp-phone {
    margin-bottom: 20%;
    margin-top: -23%;
  }
  @include bp-tablet-p {
    margin-bottom: 20%;
    margin-top: -23%;
  }
  @include bp-tablet-l {
    margin-bottom: 10%;
    margin-top: -12%;
  }
  @include bp-desktop {
    margin-bottom: 10%;
    margin-top: -12%;
  }
}
.bottom {
  height: 5vh;
  width: 100%;
  @include slant;
  @include center;
  background-color: var(--white);
  margin-bottom: -11%;
  margin-top: 3vh;

  @include bp-phone {
    margin-bottom: -15%;
    margin-top: 3vh;
  }
  @include bp-tablet-p {
    margin-bottom: -17%;
    margin-top: 4%;
  }
  @include bp-tablet-l {
    margin-bottom: -12%;
    margin-top: 3%;
  }
  @include bp-desktop {
    margin-bottom: -12%;
    margin-top: 3%;
  }
}
</style>