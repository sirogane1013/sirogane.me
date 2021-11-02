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
    </div>
    <p class="section-image__caption" v-html="caption"></p>
    <p class="section-image__description" v-bind:class="{'show': showDescription}"
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
    background: rgba(102, 102, 102, 0.5);
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

.section-image__caption {
  margin: .5em 0;
  padding: 0;
  font-size: $text-s;
  font-weight: 400;
  color: $white;
  text-align: start;
  @media (min-width: 576px) {
    text-align: center;
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
  transition: height .5s ease, opacity .5s ease;

  &.show {
    opacity: 1;
  }
}
</style>
