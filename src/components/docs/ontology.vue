<template>
    <h1 class="pageTitle">Ontology</h1>
    <h2 id="intro">Intro</h2>
      <p>This project scrapes transcripts published by the Belgian parliament and transforms them into a Knowledge Graph (KG) to make it easier to search through the transcripts
      We start by giving some background to the Belgian parliament before explaining the structure of the KG.</p>
     <h2 id="parliamentBackground">Background on the Belgian parliament</h2>
     <p>The Belgian federal parliament publishes transcripts of its meetings on <a class ="rlink" href="https://www.dekamer.be">dekamer.be</a> and <a class="rlink" href="https://www.lachambre.be">lachambre.be</a> as PDF or HTML pages an example of such a transcript can be seen here <a class="rlink" href="https://www.dekamer.be/doc/PCRI/html/55/ip119x.html">here</a>. These transcripts hold debates on new pieces of legislation, budgets, questions to ministers, and many other topics. 
      It is clear these debates hold a lot of value but there is no way to search through these transcripts efficiently, this project tries to improve that.</p>
    <p>Meetings can be held in different subunits of parliament. There are 2 types of these. The plenary sessions and commissions. Plenary sessions hold all 150 Members of Parliament(MP) and hold debates on a wide range of topics. Commissions only hold around 15 MPs and focus on a more narrow policy field.
       Such as the commission on national defence.</p>

       <p>A meeting is made up of different topics. These topics can be grouped and discussed together click <a class="rlink" href="https://www.dekamer.be/doc/PCRI/html/55/ip142x.html">here</a> for an example, we will call these blocks of topics.
         So a meeting is held inside an organization (plenary or a commission) and is made up of blocks of topics with debates.</p>
    <p>The last unique trait of the Belgian parliament is the use of language. MPs speak French or Dutch but within a single speech, they can switch between languages. 
      For translation or other tasks, we must keep these languages separate. Therefore we will say a speech is made up of segments. A segment contains text in only 1 language. If an MP sticks to 1 language in a speech, that speech will have only 1 segment. 
      If an MP switches once its speech will have 2 segments.</p>
    
    <h2 id="diagrams">How to read the diagrams</h2>
     <p> In our diagrams we wil represent nodes as rectangles were we will color <b>URIs grey</b> and <b>literals green</b>. nodes have a name and an example value in brackets.</p>
     <p>The datatype of a literal is displayed after the semicolon. If a language tag is present this is denoted by @lang</p>
     <p>predicates are represented by an arrow and with their name. these names all have a http://federalparliament.be/kg/ns# prefix but this is omitted for legibility. 

    </p>
    <h2>Ontology</h2>
       <h3 id="base">Base</h3>
        <img src="@/assets/base.svg" alt="">
      <p>We will build our KG from the base URI <b>http://federalparliament.be/kg</b>.
      For every legislature there is a predicate called <b>legislature</b> that starts from our base and points to the URI for that legislature.
      For every organization type we 
    </p>
    <p>Current block types are questions,legislation,budgets,interpellations, and govDecleration</p>
      <p>Current block types are questions,legislation,budgets,interpellations, and govDecleration</p>
    <h3 id="meetings">Meetings</h3>
    <img src="@/assets/speeches.svg" alt="">
     <p>To allow translations to be added both originalContent and content is provided.</p>
    <h3 id="topics">Topics</h3>
    <img src="@/assets/topics.svg" alt="">
    <p></p>
      
</template>

<script>
export default {
  name: 'docsKG',
  props: {
    msg: String
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
p{line-height: 150%;}
</style>

