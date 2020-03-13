<template>
    <div class="section-image">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"
             class="section-image__circle">
            <circle id="楕円形_11" data-name="楕円形 11" cx="17.5" cy="17.5" r="17.5" fill="#fff"/>
        </svg>
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
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-end;
        margin: 100px 0 150px calc(10vw - #{$circle-m} / 2);
        position: relative;

        & > img {
            width: 450px;
            max-width: 70vw;
            height: 220px;
            border-radius: 20px;
            margin-left: 30px;
            object-fit: cover;
        }
    }

    .section-image__circle {
        width: $circle-m;
        height: $circle-m;
        margin-top: 6px;
        flex-shrink: 0;
        align-self: flex-start;
    }

    .section-image__caption {
        margin: 0 0 0 45px;
        padding: 0;
        font-size: $text-s;
        font-weight: 300;
        color: $white;
    }
</style>
