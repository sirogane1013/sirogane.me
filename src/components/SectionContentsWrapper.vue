<template>
    <div class="section-contents-wrapper">
        <slot/>
    </div>
</template>

<script>
  export default {
    name: 'SectionContentsWrapper',
  }
</script>

<style lang="scss">
    .section-contents-wrapper {
        box-sizing: border-box;
        margin: 0 0 100px 0;

        &.animate .section-heading__circle {
            transform-origin: center;
            animation: .2s ease-out .7s both pop;
        }

        &.animate .section-contents__circle, &.animate .section-list-child__circle, &.animate .section-image__circle {
            transform-origin: center;
            animation: .2s ease-out .8s both pop;
        }
    }

    @keyframes pop {
        0% {
            transform: scale(0);
        }
        80% {
            transform: scale(1.1);
        }
        100% {
            transform: scaleY(1);
        }
    }
</style>
