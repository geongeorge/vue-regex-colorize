<template>
    <span class="regex">
        <slot></slot>
      </span>
</template>
<script>
import RegexColorize from 'regex-colorize';
// import 'regex-colorize/themes/sweetest.css'

export default {
    mounted() {
        var rgx = new RegexColorize();
        rgx.colorizeAll();
    }
}
</script>
