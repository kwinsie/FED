# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Quincy Kapenga

  #### Je startniveau:
  Rood

  #### Je focus:
  Beetje van beide
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.foam.org/nl
  #### Screenshot(s) van de eerste pagina (small screen): 
  Home
  <img src="readme-images/Homepage.jpeg" width="375px" alt="Beginscherm op mobiel">

  #### Screenshot(s) van de tweede pagina (small screen):
  Plan je bezoek
  <img src="readme-images/Plan_je_bezoek.jpeg" width="375px" alt="Plan je bezoek scherm op mobiel">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  - hyrargie (h1,h2,h3) is niet goed
    - Meerdere H1 per pagina
    - Volgorde is verkeerd

  - H1 veranderd soms met java, wardoor de screenreader hem raar leest
  - De taal veranderd soms wanneer het niet nodig is
  - Links als see more, beloning zijn onduidelijk

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Opzetten van de html van de eerste pagina ging redelijk goed, vooral door de breakdownschets. Ik merk alleen dat ik nog wat moeite heb met 
  de volgorde van de regels, bijv. na de h2 een img of eerst de p ivm toegankelijkheid. Ook weet ik niet meer zo goed hoe ik een border       
  toevoeg aan bepaalde elementen van mijn nav.

  <img src="readme-images/Scherm­afbeelding code week 1 inspringen.png" width="375px" alt="schermafbeelding van de inspringingen van mijn code">
  <img src="readme-images/Scherm­afbeelding code week 1 volgorde.png" width="375px" alt="schermafbeelding van de volgorde van mijn code">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Quincy            | Beyzanur            | Quinten                                                                             | Ilias.                            | Zakaria |
  | ---               | ---                 | ---                                                                                 | ---                               | ---           |
  | Volgorde van HTML | nav menu            | Image achter tekst                                                                  | Algemene feedback op HTML         | Ziek :(       |
  | CSS border van li | HTML elementen/tags | List style nie aanpasbaar bij "see more"                                            | Wanneer list/article te gebruiken |               |
  | ...               | Fonts               | Nth-of-type(0) lukt niet altijd                                                     | Wanneer wel/geen section          |               |
  |                   |                     | Elementen omdraaien                                                                 |   
  |                   |                     | "see more" (about fish) verstoppen.                                                 |
  |                   |                     | Link om h3 heen                                                                     |
  |                   |                     | Border color gold werkt niet op de a en button borders krijg ik niet weg op de nav  |



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - ul maken van de lijsten bij bijvoorbeeld nu te zien
  - lang element toevoegen aan dingen die in een andere taal staan.
  - aleen children springen in, als ik duidelijkheid wil kan ik ook een witregel gebruiken.
  - enkel laag nav, niet meer uitwerken dan dat
  - 3 style sheets 1 voor algemeen en 1 per pagina.
  - search bar staat in een search section en een form
  - alt alleen als het plaatje zelf informatie is
  - als je de witruimte onder de img weg wil hebben doe je img{ display:block; }
  - a11y hide content
  - padding op a :) met  display:block; omdat het inline is

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik heb tot nu vooral aan mijn header gewerkt, het ging over het algemeen best goed. Het positioneren met flexbox en grid en het stijlen van de rest van de content ging goed. Ik heb ook een beetje met javascript gewerkt voor mijn menu en dat werkt voor zo ver ik ben gekomen. Het enige waar ik voor nu tegenaan loop is position sticky, de nav beweegt over het scherm zoals ik wil, maar wanneer ik mijn menu open, beweegt mijn hele pagina omlaag. Ook weet ik nog niet helemaal hoe ik er voor moet zorgen dat mijn menu inklapt als ik mijn search aandruk en hoe ik mijn form in de search stijl mbt het kruisje dat er in ontstaat.

<img src="readme-images/Nav open foto 02-10.jpeg" width="375px" alt="schermafbeelding van de navigatie open">
<img src="readme-images/Nav partly closed foto 02-10.jpeg" width="375px" alt="schermafbeelding van de navigatie dicht en de site die mee scrollt">
<img src="readme-images/Search foto 02-10.jpeg" width="375px" alt="schermafbeelding van de mijn search bar kruisje">
<img src="readme-images/Javascript foto 02-10.jpeg" width="375px" alt="schermafbeelding van de javascript voor mijn menu">

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Quincy      | Beyzanur         | Quinten    | Ilias        | Zakaria  |
  | ---         | ---              | ---        | ---          | ---       |
  | Position sticky  | Positioneren list             | Horizontal scrol door image   | Foto resizen    | Flexbox          |
  | Java zoek button | Stijlen hamburger | Responsive | ... |...           |
  | Stijlen form           | ...                | Figcaptions          | ...              | ...           |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Kijken of de nav position absolute werkt
  - Met if else kijken of mijn nav met search gaat werken
  - 
  - ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  ben vooral beig geweest met JS en dat gaat na veel trial en error best goed, het ene menu moest open en dan moest het andere op hetzelfde moment dicht. verder veel styling, maar ik had meer willen doen.

  <img src="readme-images/js menu.jpeg" width="375px" alt="schermafbeelding van de javascript voor mijn menu">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Quincy      | Beyzanur         | Quinten    | Ilias        | Zakaria  |
  | ---         | ---              | ---        | ---          | ---       |
  | Hamburger menu timing  | hamburger | tweede ul aanspreken  | divss    |      |
  | wanneer span | margin 0 | streepjes bij see more| ... |...           |
  | tijdens scrollen kleur veranderen           | search bar      | Figcaptions          | ...              | ...           |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>