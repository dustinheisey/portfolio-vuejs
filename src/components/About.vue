<template>
  <section class="about" id="about">
      <div class="about__box">
          <div class="about__box--inner">
              <div class="about__text-box">
                  <h2 class="about__heading">About Me</h2>
                  <p class="about__text">My name is Dustin Heisey, and I'm an aspiring Front End Web Developer. I spend my days learning the newest trends in web development. I have an eye for aesthetics, and a unquenchable thirst for improvement. Take a look at some of my projects below!</p>
                  <!-- <router-link class="about__btn" tag="button" to="/resume" style="color: var(--white)">Check out my Resume</router-link> -->
              </div>
          </div>
      </div>
  </section>
</template>

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
// @mixin uppercase {
//   text-transform: uppercase;
// }
@mixin slant {
  transform: skewY(-8deg);
}

@mixin unslant {
  transform: skewY(7deg);
}
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  align-content: center;
}
.about {
  @include slant;
  height: 110vh;
  width: 100%;
  @include center;
  z-index: 2;
  background-color: var(--white);

  @include bp-phone {
    height: 115vh;
  }

  &__box {
    @include center;
    height: 90%;
    width: 95%;
    background-color: var(--black);
    box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.73);

    @include bp-phone {
      width: 90%;
    }

    @include bp-tablet-p {
      width: 90%;
      height: 80%;
    }

    &--inner {
      @include center;
      height: 95%;
      width: 95%;
      background-color: var(--grey-light);

      @include bp-phone {
        width: 90%;
      }

      @include bp-tablet-p {
        width: 90%;
        height: 90%;
      }
    }
  }

  &__text-box {
    @include center;
    text-align: center;
    align-content: center;
    flex-wrap: wrap;
    border: 4vmin solid var(--primary);
    height: 90%;
    padding: 0 6rem;
    width: 95%;
    background-color: var(--white);
    @include bp-phone {
      padding: 0 3rem;
      border-width: 3vmin;
      width: 90%;
      height: 95%;
    }
    @include bp-tablet-p {
      max-width: 800px;
      border-width: 3vmin;
      height: 90%;
      width: 90%;
    }

    @include bp-tablet-l {
      max-width: 800px;
    }
  }

  &__heading {
    // letter-spacing: 1.5rem;
    @include unslant;
    //@include uppercase;
    font-size: 14vmin;
    color: var(--heading);
    margin: 0;
    @include bp-phone {
      font-size: 9vmin;
      // letter-spacing: 0.5rem;
    }
    @include bp-tablet-p {
      font-size: 10vmin;
      // letter-spacing: 0.5rem;
    }
    @include bp-tablet-l {
      font-size: 12vmin;
      // letter-spacing: 0.5rem;
    }
  }

  &__btn {
    @include unslant;
    //@include uppercase;
    text-align: center;
    padding: 2vh 5vh;
    font-size: 2vmin;
    border-radius: 10px;
    color: var(--white);
    background-color: var(--heading);
    cursor: pointer;
    transition: 0.5s all;

    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
      background-color: var(--text);
    }

    & router-link {
      display: block;
      height: 100%;
      width: 100%;
    }
  }

  &__text {
    color: var(--text);
    // letter-spacing: 1rem;
    font-weight: 500;
    @include unslant;
    text-align: center;
    //@include uppercase;
    font-size: 4.5vmin;

    @include bp-phone {
      font-size: 4vmin;
      // letter-spacing: 0.5rem;
    }

    @include bp-tablet-p {
      font-size: 3vmin;
      // letter-spacing: 0.5rem;
    }

    @include bp-tablet-l {
      // letter-spacing: 0.5rem;
    }
  }
}
section,
div {
  border-radius: 25px;
}
</style>
