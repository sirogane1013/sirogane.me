<template>
    <div class="section-wrapper" :id="id">
        <slot/>
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
        .setClassToggle("body, .section-title__circle", "bg-"+this.color)
      ;
      this.$scrollmagic.addScene(scene);
    },
  }
</script>

<style lang="scss" scoped>
    .section-wrapper {
        box-sizing: border-box;
        margin: 500px 0 900px 0;
    }
</style>
