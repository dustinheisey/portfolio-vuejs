<template>
  <section class="grid-1">
      <div class="grid-1__itm grid-1__itm-1"></div>
      <div class="grid-1__itm grid-1__itm-2"></div>
      <div class="grid-1__itm grid-1__itm-3"></div>
      <div class="grid-1__itm grid-1__itm-4"></div>
      <div class="grid-1__itm grid-1__itm-5"></div>
  </section>
</template>

<style lang="scss" scoped>
//Breakpoints
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

@mixin slant {
  transform: skewY(-8deg);
}

@mixin unslant {
  transform: skewY(7deg);
}

@mixin img-left {
  @include slant;
  height: 110vmin;
  width: 100%;
  padding: 1rem;

  display: grid;

  grid-template-columns: 60% 40%;

  grid-template-areas: "img text";

  @include bp-phone {
    height: 77vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

@mixin img-right {
  @include slant;
  height: 110vh;
  width: 100%;
  padding: 1rem;

  display: grid;

  grid-template-columns: 40% 60%;

  grid-template-areas: "text img";

  @include bp-phone {
    height: 77vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

@mixin grid {
  height: 80vh;
  width: 100%;
  @include slant;
  background-color: transparent;
  margin: 3vh 0;
  display: grid;
  grid-gap: 3vh;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @include bp-phone {
    height: 40vh;
    grid-gap: 2vh;
  }
}

@mixin grid-itm {
  height: 100%;
  width: 100%;
  background-color: var(--black);
}

@mixin icon {
  font-size: 6vh;

  @include bp-phone {
    font-size: 6vh;
  }
}
$primary: var(--primary);

.grid-1 {
  @include grid;
  margin-top: -9vh;
  margin-bottom: 3vh;
  @include bp-phone {
    margin-top: -4vh;
  }
  &__itm {
    @include grid-itm;
    &-1 {
      grid-row: 1/3;
      background-color: var(--black);
    }
    &-2 {
      grid-area: 1/2/3/4;
      background-color: var(--black);
    }
    &-3 {
      grid-column: 4/5;
      grid-row: 1/-1;
      background-color: var(--black);
    }
    &-4 {
      grid-column: 1/4;
      grid-row: 3;
      background-color: var(--black);
    }
    &-5 {
      grid-area: 1/5/-1/-1;
      background-color: var(--black);
    }
  }
}

div {
  border-radius: 25px;
}
</style>
