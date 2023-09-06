<template>
<h1>Querying</h1>
<h2 id=howto>How to query</h2>
<p>The dataset can be queried using the SPARQL langauge.</p>
<p>If you are not familair with SPARQL this tutorial might prove usefull <a class="rlink" href=https://docs.stardog.com/tutorials/learn-sparql>docs.stardog.com/tutorials/learn-sparql</a>.
<br> If you only want to learn how to make SPARQL queries. This <a class="rlink" href="https://medium.com/wallscope/constructing-sparql-queries-ca63b8b9ac02"> medium article</a> provides a good explanation on how to make queries using SPARQL.</p>
<p>There are several ways you can query this dataset.</p>
<ul>
  <li><p>Use the <router-link class="rlink" to="/query">query </router-link> tab.</p></li>
  <li><p>Accesing the endpoint at <a class="rlink" href="http://federalparliament.be/sparql">federalparliament.be/sparql</a> via code by wrapping the endpoint. A wrapper for python can be found here <a class="rlink" href=https://github.com/RDFLib/sparqlwrapper>github.com/RDFLib/sparqlwrapper </a>.</p></li>
  <li><p>If you want to perform a large amount of queries, download the data files and host your own endpoint. The dataset can be downloaded from the <router-link class="rlink" to="/downloads">download </router-link> tab.</p></li>
</ul>
<h2 id=examples>Example queries</h2>
<h3>Getting all Speeches Made by Someone</h3>
<div class="queryExample">
<p>
<b>PREFIX</b> legis: &lt;http://federalparliament.be/kg/55/&gt;<br>
<b>PREFIX</b> ns: &lt;http://federalparliament.be/kg/ns#&gt;<br>
<br>
<b>SELECT</b> ?person ?speech ?content <b>WHERE</b> {<br>
<br>
?person ns:firstName ?firstName. <br>
?person ns:lastName ?lastName. <br>
?person ns:speaker ?speech. <br>
?speech ns:segment ?segment. <br>
?segment ns:originalContent ?content <br>
<b>FILTER</b>(?firstName = 'Bram' && ?lastName ='Delvaux')<br><br>
}
</p>
</div>
<p>Example query that returns everything said by Bram Delvaux in parliament during the 55<sup>the</sup> parliamentary  term.</p>
<h3>Getting all Questions or Interpellations Asked by Someone</h3>
<div class="queryExample">
  <p>
    <b>PREFIX</b> legis: &lt;http://federalparliament.be/kg/55/&gt;<br> 
    <b>PREFIX</b> ns: &lt;http://federalparliament.be/kg/ns#&gt;<br> <br>
    <b>SELECT</b> ?code ?content <b>WHERE</b> {<br> <br>
    legis:questions ns:item ?question. <br>
    ?asker ns:asker ?question. <br>
    ?asker ns:fullName ?fullName. <br>
    ?question ns:code ?code. <br>
    ?question ns:content ?contentSpeech. <br>
    ?contentSpeech ns:segment ?segment. <br>
    ?segment ns:originalContent ?content. <br>
    <b>FILTER</b>(?fullName = 'Peter De Roover') <br> <br>
}
  </p>
</div>
<p>This query returns all questions aksed by Peter De Roover during the 55<sup>the</sup> parliamentary term. It returns the code and the text of every question. To get interpellations instead of questions replace legis:questions with legis:interpellations.</p>
<h3>Getting all Questions or Interpellations Asked to Someone</h3>
<div class="queryExample">
  <p>
    <b>PREFIX</b> legis: &lt;http://federalparliament.be/kg/55/&gt;<br>
<b>PREFIX</b> ns: &lt;http://federalparliament.be/kg/ns#&gt;<br> <br>
<b>SELECT</b> ?code  WHERE { <br><br>
legis:questions ns:item ?question. <br>
?question ns:interviewee ?interviewee. <br>
?interviewee ns:fullName ?fullName. <br>
?question ns:code ?code <br>
<b>FILTER</b>(?fullName = 'Alexander De Croo') <br> <br>
}
  </p>
</div>
<p>Returns a list of all the codes belonging to the questions that were asked to Alexander De Croo.</p>
<h3>Getting the Debate on a Bill</h3>
<div class= "queryExample">
  <p><b>PREFIX</b> legis: &lt;http://federalparliament.be/kg/55/&gt;<br>
      <b>PREFIX</b> ns: &lt;http://federalparliament.be/kg/ns#&gt;<br> <br>
      <b>SELECT</b> ?fullName  ?content <b>WHERE</b> { <br> <br>
      legis:bills ns:item ?bill. <br>
      ?bill ns:code ?code. <br>
      ?block ns:topic ?bill. <br>
      ?block ns:speech ?speech. <br>
      ?speech ns:segment ?segment. <br>
      ?segment ns:originalContent ?content. <br>
      ?speaker ns:speaker ?speech. <br>
      ?speaker ns:fullName ?fullName. <br>
      <b>FILTER</b>(<b>STR</b>(?code) = '1859') #does not always work without STR() function sparql might cast types to ints <br><br>
}</p>
</div>
<p>Returns full debate on a piece of legislation. In this case the debate over a bill with code 1859.</p>
<h3>Getting Everything Said by a Person Over a Bill</h3>
<div class= "queryExample">
  <p><b>PREFIX</b> legis: &lt;http://federalparliament.be/kg/55/&gt;<br>
      <b>PREFIX</b> ns: &lt;http://federalparliament.be/kg/ns#&gt;<br> <br>
      <b>SELECT</b> ?content <b>WHERE</b> { <br> <br>
      legis:bills ns:item ?bill. <br>
      ?bill ns:code ?code. <br>
      ?block ns:topic ?bill. <br>
      ?block ns:speech ?speech. <br>
      ?speech ns:segment ?segment. <br>
      ?segment ns:originalContent ?content. <br>
      ?speaker ns:speaker ?speech. <br>
      ?speaker ns:fullName 'Eva De Bleeker'. <br >
      <b>FILTER</b>(<b>STR</b>(?code) = '1859') #does not always work without STR() function sparql might cast types to ints <br><br>
}</p>
</div>
<p>Returns everyhting Eva De Bleeker said about bill 1859.</p>
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
.queryExample{
  margin-left: 5%;
  margin-right: 5%;
  padding: 10px;
  margin-bottom: 0;
  background-color: var(--fullPopOutElement);
  border-radius: 10px;
}
</style>

