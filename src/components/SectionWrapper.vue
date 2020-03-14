<template>
    <div class="section-wrapper" :id="id">
        <slot/>
        <div class="section-line">
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SectionWrapper',
    props: {
      id: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
        validator: function (value) {
          return [
            'grey',
            'red',
            'blue',
            'yellow',
            'green',
            'purple',
          ].indexOf(value) !== -1
        }
      }
    },
    mounted() {
      const scene = this.$scrollmagic.scene({
        triggerElement: '#'+this.id,
        triggerHook: "onEnter",
      })
        .setClassToggle("body, .section-title__circle, .section-contents__circle, .section-list-child__circle", "bg-"+this.color)
      ;
      this.$scrollmagic.addScene(scene);
    },
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variables";

    .section-line {
        width: 2px;
        height: calc(100% + 900px);
        position: absolute;
        top: 0;
        left: calc(10vw - 1px);
        background-color: $white;
        z-index: -1;
        transform: scaleY(0);
        transform-origin: top;
        &.animate {
            animation: .6s ease-out .35s both line;
        }
    }

    .section-wrapper {
        position: relative;
        box-sizing: border-box;
        margin: 500px 0 900px 0;
    }
    
    @keyframes line {
        0% {
            transform: scaleY(0);
        }
        100% {
            transform: scaleY(1);
        }
    }
</style>
