<template>
  <section class="contact" id="contact">
      <div class="contact__box--outer">
          <div class="contact__box--inner">
              <div class="contact__box--text">
                  <h2 class="contact__heading">Interested in working with me?</h2>
                  <p class="contact__text">Message me at <a href="mailto:hello@dustinheisey.com" class="contact__link">hello@dustinheisey.com</a>, and let's get started!</p>
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

@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  align-content: center;
}

@mixin uppercase {
  text-transform: uppercase;
}
.contact {
  height: 110vh;
  width: 100%;
  @include center;
  background-color: var(--white);
  clip-path: polygon(0 22%, 100% 0%, 100% 120%, 0 100%);
  margin-top: -12vh;

  @include bp-phone {
    height: 60vh;
    margin-top: -9vmin;
    clip-path: polygon(0 16%, 100% 3%, 100% 120%, 0 100%);
  }

  @include bp-tablet-p {
    clip-path: polygon(0 15%, 100% 6%, 100% 120%, 0 100%);
  }

  @include bp-tablet-l {
    clip-path: polygon(0 20%, 100% 3%, 100% 120%, 0 100%);
  }

  @include bp-laptop {
    clip-path: polygon(5 20%, 100% 3%, 100% 120%, 0 100%);
  }

  @include bp-desktop {
    clip-path: polygon(0 20%, 100% 3%, 100% 120%, 0 100%);
  }

  &__box--outer {
    @include center;
    margin-top: 28vh;
    height: 60%;
    width: 90%;
    background-color: var(--black);
    box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.73);

    @include bp-phone {
      margin-top: 10vh;
    }
  }

  &__box--inner {
    @include center;
    height: 85%;
    width: 94.5%;
    background-color: var(--grey-light);
  }

  &__box--text {
    @include center;
    flex-wrap: wrap;
    align-content: center;
    height: 85%;
    width: 94.5%;
    padding: 5%;
    background-color: var(--white);
    border: 2rem solid var(--primary);
    @include bp-phone {
      border-width: 1vh;
    }
  }
  &__heading {
    color: var(--black);
    font-size: 6vh;
    // letter-spacing: 0.1rem;
    font-weight: bolder;
    margin-top: 5vh;
    @include uppercase;

    @include bp-phone {
      font-size: 1.5rem;
    }

    @include bp-tablet-p {
      font-size: 3vh;
    }
  }

  &__text {
    // letter-spacing: 0.05rem;
    color: var(--grey-light);
    font-weight: 700;
    @include uppercase;
    font-size: 3vh;
    margin-bottom: 5vh;

    @include bp-phone {
      font-size: 1rem;
    }

    @include bp-tablet-p {
      font-size: 2vh;
      // letter-spacing: 0.3rem;
    }
  }

  &__link {
    color: var(--primary);
    transition: all 0.3s;

    &:hover {
      color: var(--black);
    }
  }
}
</style>
