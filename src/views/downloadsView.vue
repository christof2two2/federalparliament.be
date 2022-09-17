<template>
  <div class="content">
    <a href="turtle/legis_55.txt" download> test download van 55 dink</a>
  </div>
</template>
<script>

export default {
  name: 'downloadsView',
  components: {},
  methods: {
    async downloadItem(type) {
    console.log(type);
    var hiddenElement = document.createElement('a');

    var result = " 12";
    hiddenElement.href = 'data:attachment/text,' + encodeURI(result);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'queryResult.pdf';
    hiddenElement.click();
    },
  },
}
</script>

<style scoped>

.content{
  margin-left: 15%;
  width: 70%;
}
p ,h2, a, h1, ul {
  text-align: left;
}

</style>