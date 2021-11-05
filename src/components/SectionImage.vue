<template>
  <div class="section-image" v-lazy-container="{ selector: 'img' }">
    <div :class="{
      'section-image__wrapper': true,
      'section-image__wrapper--open': showDescription,
      }">
      <img :data-src="img.src"
           :data-loading="img.preSrc"
           :alt="alt" @click="toggleDesc" @mouseover="willChange"
           @mouseleave="removeWillChange">
      <p :class="{
        'section-image__over-caption': true,
        'section-image__over-caption--open': showDescription,
        }"
         v-html="caption"/>
    </div>
    <p :class="{
      'section-image__caption': true,
      'section-image__caption--close': !showDescription,
      }"
       v-html="caption"/>
    <p :class="{
      'section-image__description': true,
      'section-image__description--open': showDescription,
      }"
       ref="desc">
      <slot/>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionImage',
  props: {
    img: {
      type: Object,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showDescription: false,
      descHeight: 0.
    }
  },
  methods: {
    toggleDesc() {
      this.showDescription = !this.showDescription;

      const element = this.$refs.desc;
      if (this.showDescription) {
        element.style.height = this.descHeight;
      } else {
        element.style.height = '0';
      }
    },
    willChange() {
      this.$refs.desc.style.willChange = "height, opacity";
    },
    removeWillChange() {
      this.$refs.desc.style.willChange = null;
    }
  },
  mounted() {
    const element = this.$refs.desc;
    element.style.height = `auto`;

    const {height} = getComputedStyle(element);
    element.style.height = '0';

    getComputedStyle(element).height;
    this.descHeight = height;
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables";

.section-image {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;

}

.section-image__wrapper {
  width: 640px;
  max-width: 70vw;
  height: 300px;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(3px);

    &[lazy=loaded] {
      filter: none
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    border-radius: 20px;
    background: rgba(26, 26, 26, 0.7);
    pointer-events: none;
    transition: background .5s;
  }

  &--open:after {
    background: none;
  }
}

.section-image__circle {
  width: $circle-m;
  height: $circle-m;
  margin-top: 6px;
  flex-shrink: 0;
  align-self: flex-start;
  border-radius: 50%;
}

.section-image__over-caption {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  text-align: center;
  margin: 0;
  font-size: $text-s;
  font-weight: 400;
  opacity: 1;
  z-index: 1;
  transition: transform .3s, opacity .3s;
  pointer-events: none;
  &--open {
    opacity: 0;
    transform: translateY(5px);
  }
}

.section-image__caption {
  margin: .5em 0;
  padding: 0;
  font-size: $text-s;
  font-weight: 400;
  color: $white;
  text-align: start;
  transition: opacity .3s, transform .3s;
  transition-delay: .2s;
  opacity: 1;
  @media (min-width: 576px) {
    text-align: center;
  }

  &--close {
    opacity: 0;
    transform: translateY(-2.5px);
    transition-delay: 0s;
  }
}

.section-image__description {
  width: 640px;
  max-width: 70vw;
  margin: 10px 0 0 0;
  font-size: 20px;
  font-weight: 300;
  text-align: justify;
  opacity: 0;
  transform: translateY(-5px);
  transition: height .5s ease, opacity .5s ease, transform .5s;
  transition-delay: 0s;

  &--open {
    opacity: 1;
    transform: translateY(0);
    transition: height .5s, opacity .5s .2s, transform .5s;
  }
}
</style>
