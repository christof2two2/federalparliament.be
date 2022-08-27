<template>
  <div class="content">
    <h1>About this project</h1>
    <p>Hello, i am Christophe and this project started as my master thesis.
    
    </p>
    <h1>Contact</h1>
    <p>You can contact me in the following ways.</p>
    <ul class="contactWays">
       <li>Personal Website: 
       <a download="resume.pdf" href="resume.pdf"> cchalmet.be </a>
      </li>

      <li>Email: 
       <a href="mailto:christophe.chalmet@outlook.be"> Christophe.Chalmet@outlook.be </a>
      </li>
      <li>Github: 
       <a href="https://github.com/Christophe-Chalmet"> Christophe-Chalmet </a>
      </li>

    </ul>
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