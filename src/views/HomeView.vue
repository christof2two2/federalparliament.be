<template>
  <div class="content">
    <h1>Easily search in Belgian parliamentary debates.</h1>
    <h2></h2>
    <div class="featureParent">
<section class="grid-1">
  <img class="smoll item-1" src="@/assets/dekamer.png" alt="">
  <img class ="item-2" src="@/assets/searching.svg" alt="">
  <img  class="item-3" src="@/assets/open_source.svg" alt="">
  <div class="item-4"><h2>Original data</h2></div>
  <div class="item-5"><h2>Easily search through debates</h2></div>
  <div class="item-6"><h2>Open source</h2></div>
  <div class="item-7"><p>Dataset was made by scraping official meeting transcripts from the parliament's website.</p></div>
  <div class="item-8"><p>
    Want to find an answer to a question, looking for a debate about a specific bill, or you want to get everyhting that was said by a member of parliament
    it can all be done in a single query.
    </p></div>
  <div class="item-9"><p>Dataset and scraping tool are open source.</p></div>
</section>
</div>

  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
}
</script>

<style scoped>
img{
  width: 17vw;
}
.smoll{
  width: 14vw;
}
.content{
  margin-top: 50px;
  margin-left: 10vw;
margin-right: 10vw;
}
.grid-1 {
  display:grid;
  grid-template-columns: auto auto auto;
  
  grid-gap: 20px;
  grid-column-gap: 50px;
  grid-template-areas:
    "a a a"
    "b b b"
    "c c c";
  
}
.factImg{
height: 150px;
width: 150px;
}
.factText{
  margin: 0;
  padding: 0;
  display: inline;
  vertical-align: middle;
}
.features{display: inline-block;
bottom: 0;
width: 25%;}
.grid-1 > div{
  margin: 0;
  padding: 0;
}
.grid-1 > div > *{
  margin: 0;
  padding: 0;
}
.middle{
  margin-right: 5%;
  margin-left: 5%;
}
.featureParent{margin-top: 100px;
}
.item-1 , .item-2 , .item-3  {
  justify-self: center;
}

.item-1 > *, .item-2 > *, .item-3 > * {
  position: relative;
  bottom: 0;
  left: 0;
  align-self: end;
  }

img{  position: relative;
  bottom: 0;
  left: 0;
  align-self: end;
  margin: 0;
  padding: 0;
  }
p {line-height: 140%;
font-size: large;}
.factSection{
  display: inline-grid;
  grid-template-areas:
    "a a";
gap: 10px;
}
.divider{
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: 50px;
  margin-left: 50px;
  color: var(--secondaryTextColor);
  border: 1px solid;
  border-radius: 7px;
}
.grid-item{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>