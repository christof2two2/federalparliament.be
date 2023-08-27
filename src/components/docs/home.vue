<template>
  <div>
    <h1>Documentation</h1>

      <p>Information on how to query the dataset and some example queries.</p>
      <p>Parliamentry debates are modeled as a Knowledge Graph (KG). A knowledge graph is a graphical representation of entities and their relationships, typically used to represent complex data in a structured and organized manner. The entities in a knowledge graph are linked together by relationships, which describe the connections between entities. This allows for easy navigation and understanding of the relationships between various concepts and entities.</p>
  </div>
</template>
<script>
export default {
  name: 'docsHome',
  props: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 b{
  text-align: left;
  margin: 0;
  padding: 0;
}
p,h3,h1,h2{
  text-align: left;
}
h1, h2, h3 {
  margin-bottom: 10px;
  margin-top: 10px;
}
.pageTitle{margin-top: 0;
margin-bottom: 0.67em;}
img{width: calc(100% - 10px);
padding: 5px;}
.rlink{
  text-decoration: underline;
  color: inherit
}
p{line-height: 150%;
font-size: 106%;}
.imgWrapper{background: var(--popOutElement);
border-radius: 30px;
margin-top: 20px;
}
</style>
