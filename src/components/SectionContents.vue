<template>
    <div class="section-contents">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"
             class="section-contents__circle">
            <circle cx="25" cy="25" r="20" fill="none" stroke="#fff" stroke-width="3" />
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
        margin: 0 0 50px calc(10vw - #{$circle-m} / 2);
        position: relative;
        color: $white;
    }

    .section-contents__circle {
        width: $circle-m;
        height: $circle-m;
        margin-top: 2px;
        flex-shrink: 0;
        border-radius: 50%;
    }

    .section-contents__text {
        font-size: $text-s;
        font-weight: 300;
        margin-left: 45px;
    }
</style>
