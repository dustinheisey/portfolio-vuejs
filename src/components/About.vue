<template>
  <section class="about" id="about">
      <div class="about__box">
          <div class="about__box--inner">
              <div class="about__text-box">
                  <h2 class="about__heading">This is me</h2>
                  <p class="about__text">My name is Dustin Heisey. I'm a Front End Web Developer, Artist, Blogger, and Entrepreneur.</p>
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
@mixin uppercase {
  text-transform: uppercase;
}
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
    height: 80vh;
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

    &--inner {
      @include center;
      height: 90%;
      width: 95%;
      background-color: var(--grey-light);

      @include bp-phone {
        width: 90%;
      }
    }
  }

  &__text-box {
    @include center;
    text-align: center;
    align-content: center;
    flex-wrap: wrap;
    border: 5vmin solid var(--primary);
    height: 90%;
    padding: 0 6rem;
    width: 95%;
    background-color: var(--white);
    @include bp-phone {
      padding: 0 3rem;
      border: 3vmin solid var(--color-primary);
      width: 90%;
      height: 90%;
    }
    @include bp-tablet-p {
      max-width: 800px;
    }
  }

  &__heading {
    // letter-spacing: 1.5rem;
    @include unslant;
    @include uppercase;
    font-size: 13vmin;
    margin: 0;
    @include bp-phone {
      font-size: 8vmin;
      // letter-spacing: 0.5rem;
    }
    @include bp-tablet-p {
      font-size: 9vmin;
      // letter-spacing: 0.5rem;
    }
    @include bp-tablet-l {
      font-size: 11vmin;
      // letter-spacing: 0.5rem;
    }
  }

  &__btn {
    @include unslant;
    @include uppercase;
    text-align: center;
    padding: 2vh 5vh;
    font-size: 2vmin;
    border: none;
    color: var(--white);
    background-color: var(--black);
    cursor: pointer;

    &:focus {
      outline: 0;
    }

    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
    }

    & router-link {
      display: block;
      height: 100%;
      width: 100%;
    }
  }

  &__text {
    color: var(--grey);
    // letter-spacing: 1rem;
    font-weight: 500;
    @include unslant;
    @include uppercase;
    font-size: 5vmin;

    @include bp-phone {
      font-size: 4vmin;
      // letter-spacing: 0.5rem;
    }

    @include bp-tablet-p {
      // letter-spacing: 0.5rem;
    }

    @include bp-tablet-l {
      // letter-spacing: 0.5rem;
    }
  }
}
</style>
