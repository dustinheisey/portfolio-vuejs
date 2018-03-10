<template>
  <section class="section-left">
      <div class="section__img-box">
          <div class="section__img-box--outer">
              <a :href="link" target="_blank" class="section__img-box--inner">
                  <div class="section__img-box--img">
                    <img :src="src" :alt="heading" class="section__img">
                  </div>
              </a>
          </div>
      </div>
      <div class="section__text-box">
        <h2 class="section__text--heading"><a :href="link" target="_blank">{{heading}}</a></h2>
        <div tooltip="HTML5" tooltip-position="bottom" class="tooltip--html"><i v-if="html" class="devicon-html5-plain colored section__icon--html"></i></div>
        <div tooltip="CSS3" tooltip-position="bottom" class="tooltip--css"><i v-if="css" class="devicon-css3-plain colored section__icon--css"></i></div>
        <div tooltip="Javascript" tooltip-position="bottom" class="tooltip--js"><i v-if="js" class="devicon-javascript-plain colored section__icon--js"></i></div>
        <div tooltip="Twitter Bootstrap" tooltip-position="bottom" class="tooltip--bootstrap"><i v-if="bootstrap" class="devicon-bootstrap-plain colored section__icon--bootstrap"></i></div>
        <div tooltip="Wordpress" tooltip-position="bottom" class="tooltip--wordpress"><i v-if="wordpress" class="devicon-wordpress-plain colored section__icon--wordpress"></i></div>
        <div tooltip="SEO" tooltip-position="bottom" class="tooltip--google"><i v-if="google" class="devicon-google-plain colored section__icon--google"></i></div>
        <div tooltip="SCSS" tooltip-position="bottom" class="tooltip--sass"><i v-if="sass" class="devicon-sass-plain colored section__icon--sass"></i></div>
        <div tooltip="VueJS" tooltip-position="bottom" class="tooltip--vuejs"><i v-if="vuejs" class="devicon-vuejs-plain colored section__icon--vuejs"></i></div>
        <div tooltip="Webpack" tooltip-position="bottom" class="tooltip--webpack"><i v-if="webpack" class="devicon-webpack-plain colored section__icon--webpack"></i></div>
        <div tooltip="Babel" tooltip-position="bottom" class="tooltip--babel"><i v-if="babel" class="devicon-babel-plain colored section__icon--babel"></i></div>
      </div>
  </section>
</template>

<script>
import Grid1 from './grid/Grid1'
import Grid2 from './grid/Grid2'
import Grid3 from './grid/Grid3'
import Grid4 from './grid/Grid4'
import Grid5 from './grid/Grid5'

export default {
  props: ['heading', 'subheading', 'grid', 'link', 'src'],
  components: {
    Grid1,
    Grid2,
    Grid3,
    Grid4,
    Grid5
  },
  data () {
    return {
      html: false,
      css: false,
      js: false,
      bootstrap: false,
      wordpress: false,
      google: false,
      sass: false,
      vuejs: false,
      webpack: false,
      babel: false
    }
  },
  created () {
    for (var icon in this.subheading) {
      if (this.subheading[icon] === 'html') {
        this.html = true
      } else if (this.subheading[icon] === 'css') {
        this.css = true
      } else if (this.subheading[icon] === 'js') {
        this.js = true
      } else if (this.subheading[icon] === 'bootstrap') {
        this.bootstrap = true
      } else if (this.subheading[icon] === 'wordpress') {
        this.wordpress = true
      } else if (this.subheading[icon] === 'google') {
        this.google = true
      } else if (this.subheading[icon] === 'sass') {
        this.sass = true
      } else if (this.subheading[icon] === 'vuejs') {
        this.vuejs = true
      } else if (this.subheading[icon] === 'webpack') {
        this.webpack = true
      } else if (this.subheading[icon] === 'babel') {
        this.babel = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

[tooltip]{
  position:relative;
  display:inline-block;
}
[tooltip]::before {
    content: "";
    position: absolute;
    top:-6px;
    left:50%;
    transform: translateX(-50%);
    border: none;
    z-index: 99;
    opacity:0;
}
[tooltip-position='bottom']::before{
  top:100%;
  margin-top:8px;
  transform: translateX(-50%) translatey(-100%) rotate(-180deg)
}
[tooltip]::after {
    content: attr(tooltip);
    position: absolute;
    left:50%;
    top:-6px;
    transform: translateX(-50%)   translateY(-100%);
    background: var(--black);
    text-align: center;
    color: var(--white);
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: 'lato';
    min-width: 80px;
    border-radius: 5px;
    pointer-events: none;
    padding: 1vmin;
    z-index:99;
    opacity:0;
}
[tooltip-position='bottom']::after{
  top:100%;
  margin-top:8px;
  transform: translateX(-50%) translateY(0%);
}
[tooltip]:hover::after,[tooltip]:hover::before {
   opacity:1
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
        display:flex;
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
        display:flex;
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
    }
}
@mixin grid-itm {
    height: 100%;
    width: 100%;
    background-color: var(--primary);
}
@mixin icon {
    font-size: 6vh;
    @include bp-phone {
        font-size: 6vh;
    }
}
 .section{
    &-left {
        @include img-left;
        background-color: var(--white);
    }
    &__img {
        height: 85%;
        width: 85%;
        background-color: var(--white);
        @include unslant;
        grid-area: img;
        &-box {
            @include center;
            &--outer {
                @include center;
                height: 90vh;
                width: 90vh;
                margin: 3rem;
                background-color: var(--black);
                box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.73);
                transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                @include bp-phone {
                    height: 45vh;
                    width: 45vh;
                    margin-bottom: 0;
                }
                &:hover {
                    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                }
            }
            &--inner {
                @include center;
                height: 90%;
                width: 90%;
                background-color: var(--grey-light);
            }
            &--img {
                @include center;
                height: 90%;
                width: 90%;
                border: 2rem solid var(--primary);
                background-color: var(--white);
            }
        }
    }
    &__text-box {
        @include unslant;
        @include center-h;
        margin: auto;
        grid-area: text;
        @include bp-phone {
            margin-top: 6vh;
        }
    }
    &__text {
        &--heading {
            font-size: 6vmin;
            @include uppercase;
            margin-bottom: 1rem;
            & a {
                color: var(--black);
                transition: .5s all;
                &:hover {
                color: var(--primary);
                }
            }
            @include bp-phone {
                font-size: 8vmin;
            }
            @include bp-tablet-p {
                font-size: 5vmin;
            }
        }
    }
}
</style>
