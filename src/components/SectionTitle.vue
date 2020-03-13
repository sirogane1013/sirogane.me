<template>
    <h2 class="section-title" :id="id">
        <svg xmlns="http://www.w3.org/2000/svg" width="149" height="149" viewBox="0 0 149 149"
             class="section-title__circle">
            <g id="グループ_5" data-name="グループ 5" transform="translate(-111.25 -472.75)">
                <circle id="楕円形_7" data-name="楕円形 7" cx="73" cy="73" r="73" transform="translate(112.75 474.25)"
                        fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/>
                <circle id="楕円形_8" data-name="楕円形 8" cx="58.016" cy="58.016" r="58.016"
                        transform="translate(127.273 488.773)" fill="none" stroke="#fff" stroke-miterlimit="10"
                        stroke-width="5"/>
            </g>
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
          triggerHook: 0.2,
          duration: 400,
        })
          .setPin('#' + this.id)
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
        margin: 0 0 150px calc(10vw - #{$circle-double} / 2);
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
    }

    .section-title__text {
        font-size: $text-l;
        font-weight: 400;
        margin-left: 20px;
    }
</style>
