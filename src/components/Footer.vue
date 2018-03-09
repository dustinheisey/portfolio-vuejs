<template>
  <footer class="footer">
    <small class="footer__copywrite">Made by me, <span class="footer__copywrite--name">Dustin Heisey</span> &copy;</small>
    <a href="https://github.com/CuriousSkeptic/Portfolio" target="_blank"><i class="devicon-github-plain colored section__icon--github"></i></a>
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

    @include bp-phone {
        margin: auto;
        font-size: 2vh;
    }

    &--name {
        transition: all .3s;

        &:hover {
            color: var(--black);
        }
    }
}

.section__icon--github {
    font-size: 5vmin;
    margin-right: 3vh;
    color: var(--white);
    transition: all .3s;

    &:hover {
        color: var(--black);
    }
}
</style>
