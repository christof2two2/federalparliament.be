<template>
<h1>Scraping tool</h1>
<p>The scraping tool is created using Python and the Scrapy library. It identifies different chapters in transcripts primarily by employing regular expressions (regex). Following this, each chapter is scraped individually, as they have varying formats, once again relying on regex for parsing. </p>
<p>Source code: <a class="rlink" href="https://github.com/christof2two2/BelgianFederalParliamentScraper">github.com/christof2two2/BelgianFederalParliamentScraper</a></p>
</template>

<script>
export default {
  name: 'docsScraper',
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

