<template>
    <div class="line">
    </div>
</template>

<script>
  export default {
    name: 'TheLogo',
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variables";

    .line {
        width: 2px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 10vw;
        background-color: $white;
    }

</style>
