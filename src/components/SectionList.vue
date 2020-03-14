<template>
    <ul class="section-list">
        <li v-for="li in list" v-bind:key="li.index"
            class="section-list-child">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"
                 class="section-list-child__circle">
                <circle cx="17.5" cy="17.5" r="17.5" fill="#fff"/>
            </svg>
            <span class="section-list-child__text" v-html="li">
            </span>
        </li>
    </ul>
</template>

<script>
  export default {
    name: 'SectionList',
    props: {
      list: Array,
    },
  }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variables";

    .section-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .section-list-child {
        display: flex;
        align-items: center;
        margin: 0 0 10px calc(10vw - #{$circle-s} / 2);
        position: relative;
        color: $white;
    }

    .section-list-child__circle {
        width: $circle-s;
        height: $circle-s;
        flex-shrink: 0;
    }

    .section-list-child__text {
        font-size: $text-s;
        font-weight: 300;
        margin-left: 47.5px;
    }
</style>
