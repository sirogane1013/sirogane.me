<template>
  <div class="menu">
    <div class="menu__btn" @click="isOpen=!isOpen">
      <svg class="hamburger" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask">
          <rect x="0" y="0" width="100" height="100" fill="white"/>
          <rect v-for="n in 3" :key="'buns'+n"
                width="55" height="10"
                x="22.5" :y="20*n+5"
                rx="5" ry="10"
                fill="black"
                :class="{
                  'hamburger__buns': true,
                  'hamburger__buns--open': isOpen,
                }"
          />
          <rect width="55" height="10" x="22.5" y="45" rx="5" ry="10"
                fill="black"
                :class="{
                  'hamburger__cross': true,
                  'hamburger__cross-1': true,
                  'hamburger__cross-1--open': isOpen,
                }"
          />
          <rect width="55" height="10" x="22.5" y="45" rx="5" ry="10"
                fill="black"
                :class="{
                  'hamburger__cross': true,
                  'hamburger__cross-2': true,
                  'hamburger__cross-2--open': isOpen,
                }"
          />
        </mask>
        <circle cx="50" cy="50" r="50" mask="url(#mask)"/>
      </svg>
    </div>
    <div :class="{
        'menu__content': true,
        'menu__content--open': isOpen,
      }"
         @click="isOpen=false">
      <div :class="{
        'menu__line': true,
        'menu__line--open': isOpen,
      }"/>
      <ul class="menu__navs">
        <li :class="{
            'menu__nav': true,
            'menu__nav--1': true,
            'animate': isOpen,
          }">
          <a href="#about-section">About</a>
          <svg viewBox="0 0 100 100" :class="{
            'menu__circle': true,
            'animate': isOpen,
          }">
            <circle cx="50" cy="50" r="50" fill="#fff"/>
          </svg>
        </li>
        <li :class="{
            'menu__nav': true,
            'menu__nav--2': true,
            'animate': isOpen,
          }">
          <a href="#works-section">Works</a>
          <svg viewBox="0 0 100 100" :class="{
            'menu__circle': true,
            'animate': isOpen,
          }">
            <circle cx="50" cy="50" r="50" fill="#fff"/>
          </svg>
        </li>
        <li :class="{
            'menu__nav': true,
            'menu__nav--3': true,
            'animate': isOpen,
          }">
          <a href="#contact-section">Contact</a>
          <svg viewBox="0 0 100 100" :class="{
            'menu__circle': true,
            'animate': isOpen,
          }">
            <circle cx="50" cy="50" r="50" fill="#fff"/>
          </svg>
        </li>
        <li :class="{
            'menu__nav': true,
            'menu__nav--btt': true,
            'animate': isOpen,
          }">
          <a href="#">back to top</a>
          <svg viewBox="0 0 100 100" :class="{
            'menu__circle': true,
            'animate': isOpen,
          }">
            <circle cx="50" cy="50" r="50" fill="#fff"/>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheMenu",
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/_variables";

.menu {
}

.hamburger {
  width: 100%;
  height: 100%;
  fill: $white;

  &__buns {
    transition: transform .1s linear;
    transform-origin: center;
    transition-delay: .2s;

    &--open {
      transform: scaleX(0);
      transition-delay: 0s;
    }
  }

  &__cross {
    transition: transform .1s linear;
    transform-origin: center;
    transition-delay: 0s;
  }

  &__cross-1 {
    transform: scaleX(0) rotate(0);

    &--open {
      transform: scaleX(1) rotate(45deg);
      transition-delay: .2s;
    }
  }

  &__cross-2 {
    transform: scaleX(0) rotate(0);

    &--open {
      transform: scaleX(1) rotate(-45deg);
      transition-delay: .2s;
    }
  }
}

.menu__btn {
  position: fixed;
  width: 50px;
  height: 50px;
  top: 20px;
  right: 10px;
  z-index: 2;
  cursor: pointer;
}

.menu__content {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;

  &--open {
    opacity: 1;
    pointer-events: auto;
  }
}

.menu__line {
  width: 2px;
  height: 210px;
  position: absolute;
  top: 70px;
  right: 33.5px;
  background-color: $white;
  z-index: -1;
  transition: transform .3s .15s ease-out;
  transform-origin: top;
  transform: scaleY(0);

  &--open {
    transform: scaleY(1);
  }
}

.menu__navs {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 90px;
  width: 100%;
  font-size: $text-m;
  list-style: none;
  text-align: right;
  box-sizing: border-box;
}

.menu__nav {
  margin-right: 24px;
  margin-top: 25px;

  & a {
    color: $white;
    margin-right: 30px;
    transition: opacity .3s;
    transition-delay: 0s;
    opacity: 0;
  }

  &--btt {
    margin-top: 40px;
  }

  &.animate a {
    opacity: 1;
  }

  &--1.animate a {
    transition-delay: .4s;
  }

  &--2.animate a {
    transition-delay: .5s;
  }

  &--3.animate a {
    transition-delay: .6s;
  }

  &--btt.animate a {
    transition-delay: .8s;
  }
}

.menu__circle {
  width: 20px;
  height: 20px;

  &.animate {
    transform-origin: center;
    animation: .2s both pop;
  }

  .menu__nav--1 & {
    animation-delay: .3s;
  }

  .menu__nav--2 & {
    animation-delay: .4s;
  }

  .menu__nav--3 & {
    animation-delay: .5s;
  }

  .menu__nav--btt & {
    animation-delay: .8s;
  }
}

@keyframes pop {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scaleY(1);
  }
}

</style>