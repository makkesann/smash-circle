<template> 
<div>
  <header>
    <div id="top-mv">
      <h1 id="header_title" class="display-1 text-center" v-html="title"></h1>
    </div>
  </header>
</div> 
</template>

<script>
export default {
  props: ["title"]
}
</script>