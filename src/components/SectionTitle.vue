<template>
    <h2 class="section-title" :id="id">
        <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124"
             class="section-title__circle">
            <circle cx="62" cy="62" r="60" fill="transparent" stroke="#fff" stroke-width="3" transform="rotate(-90 62 62)" class="c1" />
            <circle cx="62" cy="62" r="50" fill="transparent" stroke="#fff" stroke-width="3" transform="rotate(90 62 62)" class="c2" />
        </svg>
        <span class="section-title__text">
            <slot/>
        </span>
    </h2>
</template>

<script>
  export default {
    name: 'SectionTitle',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    mounted() {
      const scene = this.$scrollmagic.scene({
          triggerElement: '#' + this.id,
          triggerHook: 1,
          reverse: false,
        })
            .setClassToggle('#' + this.id + ' > *,#' + this.id + ' ~ *', 'animate')
      ;
      this.$scrollmagic.addScene(scene);
    }
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variables";

    .section-title {
        display: flex;
        align-items: center;
        margin: 0 0 300px calc(10vw - #{$circle-double} / 2);
        padding: 0;
        position: relative;
        color: $white;
    }

    .section-title__circle {
        width: $circle-double;
        height: $circle-double;
        border-radius: 50%;
        flex-shrink: 0;
        background-color: $grey;
        transition: background-color .5s;
        & > .c1, .c2 {
            stroke-dasharray: 0 377;
        }
        &.animate > .c1 {
            animation: .7s ease-in-out both circle-n;
        }
        &.animate > .c2 {
            animation: 1s ease-in-out both circle-r;
        }
    }

    .section-title__text {
        font-size: $text-l;
        font-weight: 400;
        margin-left: 20px;
    }

    @keyframes circle-n {
        0% {
            stroke-dasharray: 0 377;
        }
        99.9%, to {
            stroke-dasharray: 377 377;
        }
    }

    @keyframes circle-r {
        0% {
            stroke-dasharray: 0 314;
        }
        99.9%, to {
            stroke-dasharray: 314 314;
        }
    }
</style>
