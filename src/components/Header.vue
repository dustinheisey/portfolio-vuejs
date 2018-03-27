<template>
  <header class="header" id="header">
      <div class="header__logo-box">
          <div class="header__logo-box--outer">
              <div class="header__logo-box--inner">
                  <img src="../../static/assets/logo.jpg" alt="Logo" class="header__logo">
              </div>
          </div>
      </div>
      <nav class="nav">
              <ul class="nav__list">
                  <li class="nav__item"><a href="#about" class="nav__link" v-scroll-to="{ el: '#about', duration: 3000, offset: 40, }">About</a></li>
                  <li class="nav__item"><a href="#works" class="nav__link" v-scroll-to="{ el: '#works', duration: 4000, offset: 75, }">Works</a></li>
                  <li class="nav__item"><a href="#contact" class="nav__link" v-scroll-to="{ el: '#contact', duration: 8000, offset: 180 }">Contact</a></li>
              </ul>
      </nav>
      <div class="header__heading-box--outer">
          <div class="header__heading-box--inner">
              <h1 class="header__heading">
                  <span class="header__heading--main">Hey I'm Dustin</span>
                  <span class="header__heading--sub" id="sub-heading">{{msg}}</span>
              </h1>
          </div>
      </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      msgs: [
        "I create websites and apps",
        "I build aesthetic user interfaces",
        "I make the most OCD form of art",
        "I drink more coffee than I should"
      ],
      msg: "I create websites and apps",
      index: 0,
      scroll: false
    };
  },
  created() {
    var self = this;
    setInterval(() => {
      if (self.index === self.msgs.length - 1) {
        self.index = 0;
      } else {
        self.index++;
      }
      self.msg = self.msgs[self.index];
    }, 4000);
  }
};
</script>

<style lang="scss" scoped>
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
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  align-content: center;
}
@mixin center-h {
  text-align: center;
}
@mixin uppercase {
  text-transform: uppercase;
}
.header {
  height: 150vh;
  width: 100%;
  background-color: var(--white);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  display: grid;
  grid-template-rows: 0.3fr repeat(6, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    ". . . . ."
    ". . l . ."
    ". . n . ."
    ". h h h ."
    ". h h h ."
    ". . . . ."
    ". . . . .";
  @include bp-phone {
    padding-top: 4rem;
    height: 90vh;
    padding: 1vh;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 95%);
    grid-template-rows: 1fr 0.3fr 2fr;
    grid-template-columns: 100%;
    grid-gap: 1vh;
    grid-template-areas:
      "l"
      "n"
      "h";
  }
  @include bp-tablet-p {
    height: 130vh;
    clip-path: polygon(0 0, 100% 0, 100% 87%, 0 95%);
    grid-template-rows: 1fr 0.3fr 2fr;
    grid-template-columns: 100%;
    grid-gap: 1vh;
    grid-template-areas:
      "l"
      "n"
      "h";
  }
  @include bp-tablet-l {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 98%);
  }
  @include bp-laptop {
    clip-path: polygon(0 0, 100% 0, 100% 82%, 0 98%);
  }
  @include bp-desktop {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 98%);
  }
  &__logo-box {
    @include center;
    grid-area: l;
    &--outer {
      height: 25vh;
      width: 25vh;
      background-color: var(--black);
      @include center;
      box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.73);
      @include bp-phone {
        margin: 0;
        margin-top: 0;
        height: 20vh;
        width: 20vh;
      }
      @include bp-tablet-p {
        margin: 0;
        margin-top: 4rem;
        margin-bottom: 0;
        height: 25vh;
        width: 25vh;
        max-width: 800px;
      }
    }
    &--inner {
      height: 85%;
      width: 85%;
      @include center;
      background-color: var(--grey-light);
    }
  }
  &__logo {
    height: 85%;
    width: 85%;
    border: 2vmin solid var(--primary);
  }
  &__heading-box {
    &--outer {
      grid-area: h;
      @include center;
      background-color: var(--black);
      height: 125%;
      width: 100%;
      box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.73);
      @include bp-phone {
        margin: 0 auto;
        height: 70%;
        width: 90%;
      }
      @include bp-tablet-p {
        margin: 0 auto;
        height: 60%;
        width: 90%;
      }
      @include bp-tablet-l {
        height: 100%;
        width: 90%;
        margin: 0 auto;
      }
    }
    &--inner {
      @include center;
      @include uppercase;
      height: 90%;
      width: 95%;
      background-color: var(--grey-light);
      @include bp-phone {
      }
    }
  }
  &__heading {
    @include center;
    height: 90%;
    width: 95%;
    background-color: var(--white);
    border: 3rem solid var(--primary);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @include bp-phone {
      padding: 5vh;
      border-width: 1vh;
    }
    @include bp-tablet-p {
      max-width: 800px;
      border-width: 2vh;
    }
    &--main {
      // letter-spacing: 1.5rem;
      font-size: 8vmin;
      color: var(--heading);
      // display: block;
      @include bp-phone {
        // letter-spacing: 0rem;
        font-size: 2.1rem;
      }
    }
    &--sub {
      // letter-spacing: 0.5rem;
      font-size: 4vmin;
      color: var(--text);
      font-weight: 900;
      //display: block;
      @include bp-phone {
        // letter-spacing: 0rem;
        font-size: 1.6rem;
      }
    }
  }
}
.nav {
  grid-area: n;
  height: 100%;
  width: 100%;
  @include center;
  &__list {
    @include center;
    background-color: var(--white);
    list-style: none;
    flex-wrap: nowrap;
    padding-left: 5rem;
    @include bp-phone {
      padding-left: 0;
    }
    @include bp-tablet-p {
      padding-left: 0;
      max-width: 800px;
    }
    @include bp-tablet-l {
      padding-left: 0;
    }
  }
  &__link {
    // letter-spacing: 0.1rem;
    @include uppercase;
    color: var(--text);
    font-size: 6vh;
    margin-left: 7vh;
    margin-right: 7vh;
    transition: all 0.3s;
    @include bp-phone {
      // letter-spacing: 0rem;
      font-size: 1.8rem;
      margin-left: 2vw;
      margin-right: 2vw;
    }
    @include bp-tablet-p {
      // letter-spacing: 0rem;
      font-size: 3rem;
      margin-left: 4vw;
      margin-right: 4vw;
    }
    &:hover {
      color: var(--primary);
    }
  }
}

div,
img,
header,
h1,
span {
  border-radius: 10px;
}
</style>
