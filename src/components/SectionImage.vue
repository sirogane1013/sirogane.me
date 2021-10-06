<template>
  <div class="section-image" v-lazy-container="{ selector: 'img' }">
    <img :data-src="img.src"
         :data-loading="img.preSrc"
         :alt="alt" width="100" height="100" @click="toggleDesc" @mouseover="willChange"
         @mouseleave="removeWillChange">
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
  align-items: flex-end;
  position: relative;

  & > img {
    width: 450px;
    max-width: 70vw;
    height: 220px;
    border-radius: 20px;
    object-fit: cover;
    filter: blur(5px);
    transition: filter .2s;
    cursor: pointer;

    &[lazy=loaded] {
      filter: none
    }
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
  margin: 0 0 0 45px;
  padding: 0;
  font-size: $text-s;
  font-weight: 300;
  text-align: end;
  color: $white;
}

.section-image__description {
  width: 450px;
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
