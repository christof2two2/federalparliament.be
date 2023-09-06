<template>
    <h1 class="pageTitle">Ontology</h1>
    <h2 id="intro">Intro</h2>
      <p>This project scrapes transcripts published by the Belgian parliament and transforms them into a Knowledge Graph (KG) to make it easier to search through the transcripts
      We. start by giving some background to the Belgian parliament before explaining the structure of the KG.</p>
     <h2 id="parliamentBackground">Background on the Belgian Parliament</h2>
     <p>The Belgian federal parliament publishes transcripts of its meetings on <a class ="rlink" href="https://www.dekamer.be">dekamer.be</a> and <a class="rlink" href="https://www.lachambre.be">lachambre.be</a> as PDF or HTML pages an example of such a transcript can be seen here <a class="rlink" href="https://www.dekamer.be/doc/PCRI/html/55/ip119x.html">here</a>. These transcripts hold debates on new pieces of legislation, budgets, questions to ministers, and many other topics. 
      It is clear these debates hold a lot of value but there is no way to search through these transcripts efficiently, this project tries to improve that.</p>
    <h3>Types of Parliamentary Meetings</h3>
    <ul>
      <li>Parliamentary meetings in Belgium can be categorized into two main types: plenary sessions and commissions.</li>
      <li>Plenary sessions involve all 150 Members of Parliament (MPs) and cover a wide range of topics.</li>
      <li>Commissions are smaller in scale, with approximately 15 MPs, and focus on specific policy areas, such as the commission on national defense.</li>
    </ul>
    <h3>Structure of Meetings</h3>
    <ul>
      <li>Each parliamentary meeting consists of different topics that can be grouped and discussed together (<a class="rlink" href="https://www.dekamer.be/doc/PCRI/html/55/ip142x.html">example</a>). These grouped topics are referred to as "blocks of topics."</li>
    
<li>Therefore, a meeting is conducted within a specific organizational unit (either plenary or commission) and is composed of blocks of topics that are discussed during the session.</li>    </ul>
    <h3>Language Diversity</h3>
      <ul>
  <li>A unique aspect of the Belgian parliament is the use of multiple languages. MPs speak either French or Dutch, and they may switch between these languages within a single speech.</li>
  
  <li>To facilitate translation and other language-related tasks, it is essential to keep track of the languages used by MPs. Each speech is divided into segments, each containing text in only one language. If an MP switches languages during their speech, multiple segments will be present within that speech.</li>
</ul> 



    
    <h2 id="diagrams">How to read the diagrams</h2>
    <p>As mentioned we use a Knowledge Graph (KG) to store our data, KGs consist of nodes, which represent entities, and edges, which represent the relationships or connections between these entities.
     There are two primary types of nodes: literals and Uniform Resource Identifiers (URIs). A literal is a direct data value, like text or numbers, while an URI is a web address used to uniquely identify online resources.
    </p>
    <p>A more thorough explanation of a Knowledge Graph can be found <a class="rlink" href="https://neo4j.com/blog/what-is-knowledge-graph/">here.</a></p>
    <ul>
      <li>In our diagrams, nodes are represented as rectangles. We use <b>grey for URIs</b> (Uniform Resource Identifiers) and <b>green for literals</b>.</li>
      <li>Nodes have both a name and an example value enclosed in brackets.</li>
      <li>The datatype of a literal is displayed after a semicolon. If a language tag is present, it is denoted by "@lang."</li>
      <li>Predicates are depicted as arrows along with their names. These predicate names all have the prefix <b>http://federalparliament.be/kg/ns#</b> but for legibility, we omit this prefix in our diagrams.</li>
    </ul>
    <h2>Ontology</h2>
    <p>The following section provides an explanation of the ontology structure for our knowledge graph, 
      which will be presented through three diagrams for visual clarity.
      We will first present the diagram, followed by an explanation.</p>
       <h3 id="base">Base</h3>
       <div class="imgWrapper"><img src="@/assets/base.svg" alt=""></div>
      <p>"We will construct our Knowledge Graph (KG) using the base URI <b>http://federalparliament.be/kg</b>. Within this KG, each legislative term is denoted by a predicate known as <b>parliamentaryTerm</b>, which originates from our base URI and links to the URI representing that specific legislative term.
    The URI for each parliamentary term or legislature includes a predicate called <b>number</b>, which points to a literal containing the numerical identifier of the term.
    The predicate  <b>organization</b>, points to an organization or body responsible for conducting meetings within the parliamentary term. 
These organizations can be committees or plenary sessions. Both the type and name of the organization are stored as literals.
    </p>
    <p>
Moving a level deeper, we find information about the meetings themselves. The predicate <b>meeting</b> links to an URI for each meeting held within a organization. 
This URI contains details such as the date of the meeting, a link to the original document, and the meeting's index within the organization.

Meetings are structured into topic blocks, and each block is linked to a URI that specifies the type of topics under discussion. These topics encompass questions, interpellations, legislation, and government declarations. 
The possible type values for topics are: questions, interpellations, legislation, and govDeclaration.
</p>
  <p>Furthermore, there is a predicate called <b>topic</b> that points to a URI for each individual topic. However, the specifics of topics will be addressed in a later section. Additionally, there is a predicate <b>speech</b> , 
  which points to a speech delivered by a person during the debate on these topics.
Details about the structure of speeches will be covered in the following section."</p>

    <h3 id="meetings">Meetings</h3>
     <div class="imgWrapper"><img src="@/assets/speeches.svg" alt=""></div>
<p>Speeches are connected to the speaker performing them through the speaker predicate. Individual persons are represented by URIs derived from <b>http://federalparliament.be/people</b> 
  followed by their full name. Additionally, we store the first name, last name, and full name as literals for each person.</p>
<p>Speeches are further divided into segments, as people may switch languages within a speech. These segments contain text in a single language. 
  The <b>content</b> predicate points to a literal containing the spoken text, along with a language tag. Additionally, an <b>originalContent</b> predicate is provided 
  for cases where the text is translated, resulting in multiple content literals.
Both segments and speeches have predicates that point to the next and previous segments or speeches, along with an attached index literal to maintain their order.
</p>
    <h3 id="topics">Topics</h3>
    <div class="imgWrapper"><img src="@/assets/topics.svg" alt=""></div>
    <p>Topics are categorized into three types: <b>interpellations</b>, <b>questions</b>, and <b>legislation</b> (also referred to as <b>bills</b>). These categories are associated with the URI for the parliamentary term. 
    Each topic contains items, each of which is linked to an unique identifier code literal.
Interpellations and questions have predicates attached to specify both the target of the question and the person who posed it. The predicates <b>content</b> and <b>answer</b> point to the speeches that correspond with the question that was asked and the answer that was given. 
These three topic types—interpellations, questions, and bills—are the subjects of discussion during meetings and are referenced using the <b>topic</b> predicate from the URI of the corresponding topic block.
</p>
      
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
h1, h2 {
  margin-bottom: 10px;
  margin-top: 10px;
}
h3{margin-bottom: 5px;
margin-top: 5px;}
.pageTitle{margin-top: 0;
margin-bottom: 0.67em;}
img{width: calc(100% - 10px);
padding: 5px;}
.rlink{
  text-decoration: underline;
  color: inherit
}
ul {
    text-align: left;
    
  }
  li{margin-bottom: 8px;}
p{line-height: 130%;
font-size: 106%;}
.imgWrapper{background: var(--popOutElement);
border-radius: 30px;
margin-top: 20px;
}
</style>

