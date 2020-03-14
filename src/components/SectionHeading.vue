<template>
    <h3 class="section-heading">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128"
             class="section-heading__circle">
            <g>
                <g>
                    <image width="128" height="128"
                           xlink:href="data:image/png;base64,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"/>
                    <circle cx="64.77" cy="64.77" r="17.06" fill="#fff" />
                </g>
            </g>
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
