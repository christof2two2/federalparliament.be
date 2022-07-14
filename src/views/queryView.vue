<template>
  <div class="content">
         <button v-on:click="runningQuery=!runningQuery"> set query running to true </button>
         <button v-on:click="myFunction_set()"> change spinner color </button>
         <h1>{{darkMode}}</h1>

    <h1>Quzeying dink</h1>
    
    <div class="queryDiv">
    <textarea v-model="queryText" class="queryField" type="text"> </textarea>
    <div class='queryRunbuttonDiv'>   
      <svg v-if="runningQuery==false" v-on:click="query()" class="queryButton" width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>run-query</title><path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z"/></svg> 
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
      <ul>
        <button>Next Page</button>
          <select @change="changeRowsPerPage($event)">
            <option v-for="(n,i) in RowsPerPageOptions" :key="i" :value = "n">{{n}} rows per page</option>

          </select>
      </ul>
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
    columnHeaders: reactive([]),
    runningQuery: reactive(false),
    errorText:  reactive(" "),
    queryResultState: reactive("none"),
    rowsPerPage: reactive(50),
    RowsPerPageOptions: [50,100,200,500],
    pageIndex: 0,
    amountOfRows:0,
    amountOfPages:0
    }
  },
  components: { orbitSpinner
  },
  beforeMount(){
    document.getElementsByClassName("queryField").readOnly = "false";    
 },
  methods:{
    changeRowsPerPage(e){
      console.log("nieuwe waarde voor rows per page:",e.target.value);
      this.rowsPerPage = e.target.value;
      this.amountOfPages = Math.ceil(this.amountOfRows/this.rowsPerPage);

    },
    getNrows(data,starti,stopi){
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
      this.tableData = this.getNrows(d,0,this.rowsPerPage);
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
  document.getElementById("queryButton").style.fill = "blue";
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
  color: var(--primary);
  background-color: var(--backgroundColor);

}
.queryResultArea{
  background-color: var(--backgroundColor);
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
  fill: var(--iconColor);
}
.queryRunbuttonDiv{
  display: inline-block;
  margin-left: 30px;
  height: 40px;
  width: 40px;
  vertical-align: bottom;
}

table{
  border: 1px solid;
}
</style>