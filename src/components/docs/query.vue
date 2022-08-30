<template>
<h1>Querying</h1>
<h2 id=howto>How to query</h2>
<p>The dataset can be querried using the SPARQL langauge.</p>
<p>If you are not familair with SPARQL this tutorial might prove usefull <a class="rlink" href=https://docs.stardog.com/tutorials/learn-sparql>docs.stardog.com/tutorials/learn-sparql</a>.</p>
<p>There are several ways you can query this dataset.</p>
<ul>
  <li><p>Use the <router-link class="rlink" to="/query">query </router-link> tab.</p></li>
  <li><p>Accesing the endpoint at <a class="rlink" href="http://federalparliament.be/sparql">federalparliament.be/sparql</a> via code by wrapping the endpoint. A wrapper for python can be found here <a class="rlink" href=https://github.com/RDFLib/sparqlwrapper>github.com/RDFLib/sparqlwrapper </a>.</p></li>
  <li><p>If you want to perform a large amount of queries, download the data files and host your own endpoint.</p></li>
</ul>
<h2 id=examples>Example queries</h2>
<h3>getting all speeches made by a person</h3>
<h3>getting all questions asked by a person</h3>
</template>

<script>
export default {
  name: 'docsQuery',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2,h3,  b{
  text-align: left;
  margin: 0;
  padding: 0;
}
p{
  text-align: left;
}
h1, h2, h3 {
  margin-bottom: 10px;
  margin-top: 15px;
}
.pageTitle{margin-top: 0.67em;margin-bottom: 0.67em;}
div{ height: 1000px;}
img{width: 90%;
margin-top: 20px;}
.rlink{
  text-decoration: underline;
  color: inherit
}
ul{
  list-style: decimal;
}
ul > li::marker {
  font-weight: bold;
}
</style>

