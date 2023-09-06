<template>

  <div class="content">
    <h2>Downloads</h2>
    <p>Data files per legislative term. Data is published as text files in the <a href="https://en.wikipedia.org/wiki/Turtle_(syntax)">turtle</a> format.</p>
<div class="downloadBox">
    <section class="grid-container">
  <div class="grid-item"><p>legislative term</p></div>
  <div class="grid-item"><p>Time</p></div>
  <div class="grid-item"><p>Size</p></div>
  <div class="grid-item"></div>
  <div class="grid-item"><p>Term 55</p></div>
  <div class="grid-item"><p>20 June 2019 - Present</p></div>
  <div class="grid-item"><p>90Mb</p></div>
  <div class="grid-item"><div class="test"><a href="data/term55.ttl" download> <svg version="1.1" class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">
          <g><g id="Download">
          <path d="M372.939,264.667c-6.641,0-12.03,5.39-12.03,12.03v84.212H24.061v-84.212c0-6.641-5.39-12.03-12.03-12.03
            S0,270.056,0,276.697v96.242c0,6.641,5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03v-96.242
            C384.97,270.056,379.58,264.667,372.939,264.667z"/>
          <path d="M183.703,285.202c4.68,4.632,12.512,4.68,17.191,0l84.2-83.009c4.752-4.704,4.74-12.319,0-17.011
            c-4.74-4.704-12.439-4.704-17.179,0l-63.46,62.558V12.03c0-6.641-5.438-12.03-12.151-12.03s-12.151,5.39-12.151,12.03v235.71
            l-63.46-62.558c-4.752-4.704-12.439-4.704-17.179,0c-4.752,4.704-4.752,12.319,0,17.011L183.703,285.202z"/></g></g>
          </svg><p class="downloadP">Download</p></a></div></div>
  <div class="grid-item">Term 54</div>
  <div class="grid-item"><p>19 June 2014 - 25 April 2019</p></div>
  <div class="grid-item"></div>
  <div class="grid-item"><p>Coming Soon</p></div>
  <div class="grid-item">Term 53</div>
  <div class="grid-item"><p>6 July 2010 - 24 April 2014</p></div>
  <div class="grid-item"></div>
  <div class="grid-item"><p>Coming Soon</p></div>
  <div class="grid-item">Term 52</div>
  <div class="grid-item"><p>28 June 2007 - 6 May 2010</p></div>
  <div class="grid-item"></div>
  <div class="grid-item"><p>Coming Soon</p></div>
  <div class="grid-item">Term 51</div>
  <div class="grid-item"><p>3 June 2003 - 26 April 2007</p></div>
  <div class="grid-item"></div>
  <div class="grid-item"><p>Coming Soon</p></div>
  <div class="grid-item">Term 50</div>
  <div class="grid-item"><p>1 July 1999 - 10 April 2003</p></div>
  <div class="grid-item"></div>
  <div class="grid-item"><p>Coming Soon</p></div>
</section>
</div>
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
a{  text-decoration: underline;
  color: inherit}
.icon{
  width: 20px;
  height: 20px;
  fill: var(--primary);
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  

}
.downloadLinks>div{
  display:flex;
align-items: center;
}
hr{width: 100%;}
.grid-container {
  background-color: var(--primary); /* color of the line between cells */
  display: grid;
  
  grid-template-areas:
    "a a a a" 
    "b b b b";
  
  row-gap: 1px; /* size of the line around the grid */
  
  
}
.downloadP{
  display: inline-block;
}
.grid-item {
  background-color:var(--backgroundColor); /* cells need a bg color for this to work */
  min-height: 55px;
  align-items: center;
  display: flex;
  justify-content: center;

}
.downloadBox{
  width: 60%;
  border: 2px;
  border-color: var(--primary);
  border-style:solid;
  border-radius: 5px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
}
.filler{
  height: 500px;
}
</style>