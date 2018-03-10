<template>
  <footer class="footer">
    <small class="footer__copywrite">Made by me, <span class="footer__copywrite--name">Dustin Heisey</span> &copy;</small>
    <div class="footer__links">
        <a href="https://github.com/CuriousSkeptic/PortfolioV2" target="_blank"><i class="devicon-github-plain colored section__icon--github"></i></a>
        <a href="#header" v-smooth-scroll="{offset: -50}" class="to-top">
          <svg width="100%" height="100%" viewBox="0 0 41 22">
            <g transform="matrix(1,0,0,1,-434,-242)">
              <g id="Up" transform="matrix(1,3.69779e-32,1.2326e-32,1,245.5,-143.5)">
                <path d="M209,385.5L188.5,405.5L190.6,407.5L209,389.6L227.4,407.5L229.5,405.5L209,385.5Z"/>
              </g>
            </g>
          </svg>
        </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
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
@mixin bp-phone {
    @media only screen and (max-width: 599px) {
        @content;
    }
}
.footer {
    height: 8vh;
    width: 100%;
    @include center;
    background-color: var(--primary);
    justify-content: space-between;
}
.footer__copywrite {
    font-size: 2.5vh;
    text-transform: uppercase;
    color: var(--white);
    margin-left: 3vh;
    &--name {
        transition: all .3s;
        &:hover {
            color: var(--black);
        }
    }
    @include bp-phone {
        margin: auto;
        font-size: 2vh;
    }
}

.footer__links {
    display: flex;
    align-items: center;
}
.section__icon--github {
    font-size: 5vmin;
    color: var(--white);
    transition: all .3s;
    &:hover {
        color: var(--black);
    }
}
.to-top {
    color: white;
    fill: currentColor;
    transition: 1s all;
    margin-right: 3vh;
    height: 5vmin;
    width: 5vmin;
    @include uppercase;
    &:hover {
        color: black;
        fill: currentColor;
    }
}
</style>
