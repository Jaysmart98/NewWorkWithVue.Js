<template>
<div>
    <button :style="{background:color}">{{text}}</button>
    </div>
</template>

<script>
export default {
  props:['text','color']
}
</script>

<style>

</style>