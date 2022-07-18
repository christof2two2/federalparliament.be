<template>
  <div class="content">
    <h1>Query</h1>
    <div class="queryDiv">
    <textarea v-model="queryText" class="queryField" type="text" spellcheck="false"> </textarea>
    <div class='queryRunbuttonDiv'>   
      <svg v-if="runningQuery==false" v-on:click="query()" class="queryButton" width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>run-query</title><path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z"/></svg> 
      <orbitSpinner v-if="runningQuery==true"> </orbitSpinner>
    </div>

    </div>
    <div class="queryResult">
      <h1>Output</h1>
    <div class="goodQuery" v-if="queryResultState=='good'">
      <div class="tableTopBanner">
        <div><p>Query returned in <b>{{this.queryTime}} seconds</b></p></div>

        <div class="rightTopBanner">
          <p><b>{{this.tableData.rowCount}} rows</b> in result</p>

          <div  v-on:click="downloadData()" style="cursor:pointer;">
          <svg  class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 485 485">
          <g>
          <path d="M426.5,458h-368C51,458,45,464,45,471.5S51,485,58.5,485h368c7.5,0,13.5-6,13.5-13.5S434,458,426.5,458z"/>
          <path d="M233,378.7c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l107.5-107.5c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0L256,336.5v-323 C256,6,250,0,242.5,0S229,6,229,13.5v323l-84.4-84.4c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1L233,378.7z"/></g></svg>
          <p>Download results</p>
          </div>
     </div>
      
      
      
      </div>

      <div class="tableWrapper">
      <table class="queryResultArea"> 
        <tr>
        <th v-for="(header,i) in tableData.header" :key="i"> {{header}}</th>
        </tr>
        <tbody>
        <tr v-for="(row,i) in tableData.data" :key="i">
        <td v-for="(column,j) in row" :key="j"> {{column.value}}</td>
        </tr>
        </tbody>
      </table>
      </div>
      <div class="tableBottomBanner">

                  <select @change="changeRowsPerPage($event)">
            <option v-for="(n,i) in RowsPerPageOptions" :key="i" :value = "n">{{n}} rows per page</option>

          </select>
        <div>
        <button class="pageButton" :class="{invisible:pageButtons[i]<0,currentPage:value==tableData.currentPage}"  @click="displayPage(value)" v-for="(value,i) in pageButtons" :key="i">{{pageButtons[i]}}</button>
        </div>
      <div>
      <svg version="1.1" class="icon rotate" :class="{inactiveButton: tableData.currentPage==0}" xmlns="http://www.w3.org/2000/svg" @click="displayPage(0)"  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 192.689 192.689">
      <g><g id="Double_Chevron_Right">
      <path d="M188.527,87.755l-83.009-84.2c-4.692-4.74-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l74.54,75.61
			l-74.54,75.61c-4.704,4.74-4.704,12.439,0,17.179c4.704,4.74,12.319,4.74,17.011,0l82.997-84.2
			C193.05,100.375,193.062,92.327,188.527,87.755z"/>
      <path d="M104.315,87.755l-82.997-84.2c-4.704-4.74-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l74.528,75.61
      l-74.54,75.61c-4.704,4.74-4.704,12.439,0,17.179s12.319,4.74,17.011,0l82.997-84.2C108.838,100.375,108.85,92.327,104.315,87.755z"/></g></g>
      </svg>




      <svg version="1.1" class="icon rotate" :class="{inactiveButton: tableData.currentPage==0}" xmlns="http://www.w3.org/2000/svg" @click="displayPage(tableData.currentPage -1)" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 240.823 240.823">
      <g>
      <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
      l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
      C187.881,124.315,187.881,116.495,183.189,111.816z"/>
      </g>
      </svg>

      <svg version="1.1" class="icon" :class="{inactiveButton: tableData.currentPage==tableData.totalPages-1}" xmlns="http://www.w3.org/2000/svg" @click="displayPage(tableData.currentPage +1)" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 240.823 240.823">
      <g>
      <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
      l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
      C187.881,124.315,187.881,116.495,183.189,111.816z"/>
      </g>
      </svg>

      <svg version="1.1" class="icon" :class="{inactiveButton: tableData.currentPage==tableData.totalPages-1}" xmlns="http://www.w3.org/2000/svg"  @click="displayPage(tableData.totalPages -1)"  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 192.689 192.689">
      <g><g id="Double_Chevron_Right">
      <path d="M188.527,87.755l-83.009-84.2c-4.692-4.74-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l74.54,75.61
			l-74.54,75.61c-4.704,4.74-4.704,12.439,0,17.179c4.704,4.74,12.319,4.74,17.011,0l82.997-84.2
			C193.05,100.375,193.062,92.327,188.527,87.755z"/>
      <path d="M104.315,87.755l-82.997-84.2c-4.704-4.74-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l74.528,75.61
      l-74.54,75.61c-4.704,4.74-4.704,12.439,0,17.179s12.319,4.74,17.011,0l82.997-84.2C108.838,100.375,108.85,92.327,104.315,87.755z"/></g></g>
      </svg>
      </div>
      </div>
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
    queryText:`PREFIX legis: <http://federalparliament.be/55/>
PREFIX ns: <http://federalparliament.be/ns#>
PREFIX MP: <http://federalparliament.be/MP/>
SELECT ?asker ?question WHERE { 
legis:questions ns:item ?question.
?asker ns:asked ?question.
?question ns:interviewee 
<http://federalparliament.be/politicalActors/Sophie%20Wilm%C3%A8s>.
}`,
    tableData: reactive(
      { "header":[],
        "data":[],
        rowCount:0,
        currentPage:0,
        totalPages:0,
        rowsPerPage:25,
      }
    ),
    columnHeaders: reactive([]),
    runningQuery: reactive(false),
    errorText:  reactive(" "),
    queryResultState: reactive("none"),
    RowsPerPageOptions: [25,50,100,200,500],
    queryStart:0,
    queryTime:0,
    rawQueryResults : {},
    pageButtons: reactive([-1,-1,-1,-1,-1]),
    amountOfPageButtons: 7, // has to be uneven
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
      var start = this.tableData.rowsPerPage*this.tableData.currentPage;
      console.log("stat index for current page",start)
      this.tableData.rowsPerPage = e.target.value;
      start = Math.floor(start/this.tableData.rowsPerPage);
      console.log("new page:",start);
      this.tableData.totalPages = Math.ceil(this.rawQueryResults["results"]["bindings"].length/this.tableData.rowsPerPage);
      var buttons = []
      var temp = Math.min(this.amountOfPageButtons,this.tableData.totalPages);
      for (var i = 0;i<temp;i++){
        buttons.push(i);
      }
      this.pageButtons=buttons;
      this.displayPage(start);

    },
    getNrows(starti,stopi){
      var data = this.rawQueryResults["results"]["bindings"];
      if (stopi > data.length){
        stopi = data.length;
      }

      var out = [];
      for (let i = starti; i < stopi;i++){
        out.push([{"value":i}].concat(Object.values(data[i])));
      }
    return out;
    },
    
    setHeader(){
      var keys = ["#"]
      keys = keys.concat( this.rawQueryResults["head"]["vars"]);
      //Object.keys(this.rawQueryResults["results"]["bindings"][0])
      this.tableData.header = keys;
    },
    displayPage(i){
      console.log("displaying page:",i)
      console.log("total pages",this.tableData.totalPages)
      if (i >=this.tableData.totalPages || i <0){
        console.log('no valid page index')
        return;}
      console.log("fecting data")
      this.tableData.currentPage = i;
      this.tableData.data = this.getNrows(i*this.tableData.rowsPerPage,(i+1)*this.tableData.rowsPerPage);
      console.log("done fecting data")
      if (this.amountOfPageButtons >= this.tableData.totalPages){
        console.log("more or equal amount of buttons to pages no need to shift");
        return;
        }
      var buttons = []
      var halfOfButtons = Math.floor((this.amountOfPageButtons-1)/2);
      if (i > halfOfButtons &&  this.tableData.totalPages -i > halfOfButtons){
        for(var j = i-halfOfButtons; j < i + halfOfButtons+1; j++){
          buttons.push(j)
        }

      }
      else if (i <= halfOfButtons) {
        for(var k = 0; k < this.amountOfPageButtons; k++){
          buttons.push(k)
        }

      }
      else if (this.tableData.totalPages -i <= halfOfButtons){
        for(var l = this.tableData.totalPages- this.amountOfPageButtons; l < this.tableData.totalPages; l++){
          buttons.push(l)
        }
        
      }
      this.pageButtons = buttons;
      console.log("new buttons", this.pageButtons);
      


    },

    makeTable(){
      console.log("length of query resuklts",this.rawQueryResults["results"]["bindings"].length);
      console.log("page count",Math.ceil(this.rawQueryResults["results"]["bindings"].length/this.tableData.rowsPerPage));
      this.tableData.rowCount = this.rawQueryResults["results"]["bindings"].length;
      this.tableData.totalPages = Math.ceil(this.rawQueryResults["results"]["bindings"].length/this.tableData.rowsPerPage);
      this.setHeader();
      var buttons = []
      var temp = Math.min(this.amountOfPageButtons,this.tableData.totalPages);
      for (var i = 0;i<temp;i++){
        buttons.push(i);
      }
      this.pageButtons=buttons;
      this.displayPage(0);
    },
    query(){
      this.runningQuery = true;
      var queryUrl = "http://federalparliament.be/sparql" + '?query=' + encodeURIComponent(this.queryText)+'&format=application%2Fsparql-results%2Bjson';
      this.httpGetAsync(queryUrl,this.handleResponse);
    },
    httpGetAsync(theUrl,callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4)
            callback(xmlHttp);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    this.queryStart = new Date();
    xmlHttp.send(null);
},
handleResponse(resp){
  this.queryTime =  (new Date() - this.queryStart)/1000;
  this.runningQuery = false;
  console.log('status from async',resp.status)
  console.log('response text',resp.responseText)
  if (resp.status == 200){
    this.rawQueryResults = JSON.parse(resp.responseText);
    this.makeTable();
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

isValidPageIndex(i){
  return ((i >=0) && (i<this.tableData.totalPages));
},

downloadData(){

  var hiddenElement = document.createElement('a');
  console.log(this.rawQueryResults["results"]["bindings"]);
  const dictionaryKeys = Object.keys(this.rawQueryResults["results"]["bindings"][0]);

  const dictValuesAsCsv = this.rawQueryResults["results"]["bindings"].map(dict => (
    dictionaryKeys.map(key => dict[key].value).join(',')
  ));

  const result = [dictionaryKeys.join(','), ...dictValuesAsCsv].join('\n');


  hiddenElement.href = 'data:attachment/text,' + encodeURI(result);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'queryResult.csv';
  hiddenElement.click();
},

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
  min-height: 200px;
  resize: vertical;
  vertical-align: bottom;
  margin-bottom: 30px;
  text-align: left;
  color: var(--primary);
  background-color: var(--backgroundColor);
  font-size: larger

}


.queryButton{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  fill: var(--iconColor);
}

.icon{
  width: 20px;
  height: 20px;
  fill: var(--iconColor);
  cursor: pointer;
  bottom: 0;
  margin: 0;
  padding: 0;
}
.pageButton{
  width: 25px;
  height: 25px;
  margin: 0;
  padding: 0;
}
.inactiveButton{
  fill: var(--inactiveIcon);
  cursor: default;
}

.queryRunbuttonDiv{
  display: inline-block;
  margin-left: 30px;
  height: 40px;
  width: 40px;
  vertical-align: bottom;
}

tbody{
  height: 50px; 
  overflow: auto;
    
  /* Hide the horizontal scroll */
  overflow-x: hidden; 
}

.tableWrapper{
  margin: 0;
  padding: 0;
  width: 100%;
  flex-grow: 1;
  overflow: auto;
}

.queryResultArea{
  background-color: var(--backgroundColor);
  width: 100%;
  overflow: auto;
  margin: 0;
  padding: 0;
  text-align: left;
  vertical-align: bottom;
  border: 1px solid var(--primary);
  border-collapse: separate;
  border-left: 0;
  border-radius: 5px;
  border-spacing: 0px;
}




.goodQuery{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-flow: column;
  
}

.tableTopBanner {
  margin: 0;
  padding:0;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

p {
  padding: 0;
  margin: 0;
}

.tableTopBanner div{
    padding: 0;
    margin: 0;
    display: inline-flex;
    vertical-align: middle;
}

.tableTopBanner svg{
    padding: 0;
    margin: 0;
    display: table-cell;
    vertical-align: middle;
    margin-left: 15px;
}

.rotate{
  transform: rotate(180deg);
}

.rightTopBanner{
  margin-right: 20px;
}



th {
    border-color: inherit;
    border-collapse: separate;
    font-size: large;

}
tr {
    display: table-row;
    border-color: inherit;
}
th, td {
    padding: 5px 4px 6px 4px; 
    border-left: 1px solid #ddd;    
}
td {
    border-top: 1px solid #ddd;    
}
th:first-child tr:first-child th:first-child, tbody:first-child tr:first-child td:first-child {
    border-radius: 5px 0 0 0;
}
th:last-child tr:last-child th:first-child, tbody:last-child tr:last-child td:first-child {
    border-radius: 0 0 0 5px;
}
td:nth-child(1) {  
  border-left-color: var(--primary)
}
th:nth-child(1){
   border-left-color: var(--primary)
}
.invisible{
  display: none;
}
.currentPage{
  background-color:lightcyan;
}
div ul path g{
  padding: 0;
  margin: 0;

}
.tableBottomBanner{
  margin-top: 10px;
  display: inline-flex;
  justify-content: space-between;
}

.tableBottomBanner div{
  position: relative;
  display: inline-block;
  bottom: 0;
}

.tableBottomBanner svg {
  margin-left: 5px;
}
</style>