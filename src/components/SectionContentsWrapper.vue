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

<style lang="scss" scoped>
    .section-contents-wrapper {
        box-sizing: border-box;
        margin: 0 0 100px 0;
    }
</style>
