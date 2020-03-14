<template>
    <h3 class="section-heading">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128"
             class="section-heading__circle">
             <circle cx="64.77" cy="64.77" r="20" fill="#fff" class="c" />
        </svg>
        <span class="section-heading__text">
            <slot/>
        </span>
    </h3>
</template>

<script>
  export default {
    name: 'SectionHeading',
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variables";

    .section-heading {
        display: flex;
        align-items: center;
        margin: 0 0 30px calc(10vw - #{$circle-blur} / 2);
        position: relative;
        color: $white;
    }

    .section-heading__circle {
        width: $circle-blur;
        height: $circle-blur;
        flex-shrink: 0;
    }

    .section-heading__text {
        font-size: $text-m;
        font-weight: 400;
        margin-left: 5px;
    }
</style>
