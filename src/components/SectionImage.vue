<template>
    <div class="section-image">
        <img :src="src" :alt="alt" width="100" height="100">
        <p class="section-image__caption" v-html="caption"></p>
    </div>
</template>

<script>
  export default {
    name: 'SectionImage',
    props: {
      src: {
        type: String,
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
</style>
