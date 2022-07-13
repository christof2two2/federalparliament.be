<template>
  <div class="content">
         <button v-on:click="runningQuery=!runningQuery"> set query running to true </button>
         <button v-on:click="myFunction_set()"> change spinner color </button>
    <h1>Quzeying dink</h1>
    
    <div class="queryDiv">
    <textarea v-model="queryText" class="queryField" type="text"> </textarea>
    <div class='queryRunbuttonDiv'>    
      <img v-if="runningQuery==false" v-on:click="query()" class="queryButton" src="@/assets/runQueryButton.png">
      <orbitSpinner v-if="runningQuery==true"> </orbitSpinner>
    </div>

    </div>
    <div class="queryResult">
      <h1>Output</h1>
    <div v-if="queryResultState=='good'">
      <table class="queryResultArea"> 
        
        <tr>
        <th v-for="(header,i) in columnHeaders" :key="i"> {{header}}</th>
        </tr>

        <tr v-for="(row,i) in tableData" :key="i">
        <td v-for="(column,j) in row" :key="j"> {{column.value}}</td>
        </tr>
      </table>
    </div>
    <div v-else-if="queryResultState=='bad'">
    <p>{{errorText}}</p>
    </div>
    </div>
  </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
import orbitSpinner from '@/components/orbitSpinner.vue'
export default {
  
  name: 'queryView',
  data(){
    return {
    queryText:`PREFIX l: <http://federalparliament.be/55/legislation/> 
PREFIX ns: <http://federalparliament.be/ns#> 
SELECT ?block 
WHERE {?block ns:topic l:647.}`,
    tableData: reactive([]),
    columnHeaders: reactive(["dink","dink2"]),
    runningQuery: reactive(false),
    errorText:  reactive(" "),
    queryResultState: reactive("none"),
    pageRows: reactive(50),
    pageIndex: 0,
    amountOfRows:0,
    }
  },
  components: { orbitSpinner
  },
  beforeMount(){
    document.getElementsByClassName("queryField").readOnly = "false";    
 },
  methods:{
    getNrows(data,starti,stopi){
      console.log("nrows",data.length);
      if (stopi > data.length){
        stopi = data.length;
      }

      var out = [];
      for (let i = starti; i < stopi;i++){
        out.push([{"value":i}].concat(Object.values(data[i])));
      }
    return out;
    },
    

    makeTable(d){
      console.log("making a table bitches");
      console.log(d.length);
      var keys = ["#"]
      keys = keys.concat( Object.keys(d[0]));
      this.columnHeaders = keys;
      console.log(this.columnHeaders);
      this.tableData = this.getNrows(d,0,100);
      console.log(this.tableData);

    },
    query(){
      this.runningQuery = true;
      console.log(this.queryText);
      var queryUrl = "http://federalparliament.be/sparql" + '?query=' + encodeURIComponent(this.queryText)+'&format=application%2Fsparql-results%2Bjson';
      this.httpGetAsync(queryUrl,this.handleResponse);
      console.log("done sending request")
      
    },
    httpGetAsync(theUrl,callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4)
            callback(xmlHttp);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
},
handleResponse(resp){
  this.runningQuery = false;
  console.log('status from async',resp.status)
  if (resp.status == 200){
    var result = JSON.parse(resp.responseText);
    this.makeTable(result["results"]["bindings"]);
    this.queryResultState = "good"
  }
  else if (resp.status == 400){
    console.log('response if bad request',resp.responseText);
    var temp = resp.responseText.split('\n')[0];
    temp = temp.substring(temp.indexOf(":")+1);
    this.errorText = temp;
    this.queryResultState = "bad"
  }
},

myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  document.getElementById("app").style.setProperty('--spinnerColor', 'red');
  document.getElementById("app").style.setProperty('--primary', 'red');
}

  }
}
</script>
<style scoped>

.content{
  margin-left: 15%;
  width: 70%;
  background-color: var(--backgroundColor);
}
p ,h2, a, h1, ul {
  text-align: left;
}
.queryField{
  width: 90%;
  min-height: 100px;
  resize: vertical;
  vertical-align: bottom;
  margin-bottom: 30px;
  text-align: left;

}
.queryResultArea{
  background-color: whitesmoke;
  min-width: 90%;
  min-height: 100px;
  border: 5px;
}
.queryButton{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
.queryRunbuttonDiv{
  display: inline-block;
  margin-left: 30px;
  height: 40px;
  width: 40px;
  vertical-align: bottom;
}

</style>