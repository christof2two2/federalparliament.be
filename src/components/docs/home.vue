<template>
  <div>
    <h1>Documentation</h1>

      <p>Welcome to our documentation page! Here, you can find all the documentation on the dataset, can easily navigate through the provided sidebar on the left.</p>
      <p>This project aims to simplify the process of searching through parliamentary debates. Currently, these debates are transcribed and published in PDF format on the parliament's website, making them difficult to search efficiently. Our approach involves two main steps: First, we extract information from these PDFs using a web scraping tool. Next, we store this data in the form of a knowledge graph (KG), enabling easy querying.</p>
      <p>There are 3 sections in the documentation.</p>
      <p>Onotlogy:
This section will describe how the knowledge graph is structured wich you will need to know to be able to query it. 
</p>
<p>Querying:
This provides information on ways to query the dataset and example queries.
</p>
<p>Scraper:
Explains how the transcripts were transformed into a knowledge graph and a link to the source code of the scraping tool used to extract information from the transcripts.
</p>
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
