<template>
    <div class="section-contents">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"
             class="section-contents__circle">
            <circle id="楕円形_11" data-name="楕円形 11" cx="17.5" cy="17.5" r="17.5" fill="#fff"/>
        </svg>
        <span class="section-contents__text">
            <slot/>
        </span>
    </div>
</template>

<script>
  export default {
    name: 'SectionContents',
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variables";

    .section-contents {
        display: flex;
        align-items: flex-start;
        margin: 0 0 0 calc(10vw - #{$circle-m} / 2);
        position: relative;
        color: $white;
    }

    .section-contents__circle {
        width: $circle-m;
        height: $circle-m;
        margin-top: 6px;
        flex-shrink: 0;
    }

    .section-contents__text {
        font-size: $text-s;
        font-weight: 300;
        margin-left: 45px;
    }
</style>
