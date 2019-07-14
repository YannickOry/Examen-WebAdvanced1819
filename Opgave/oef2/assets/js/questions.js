window.addEventListener("load", loaded);

function loaded() {
    let buttonGetQuestions = document.getElementById('button_get_questions');
    buttonGetQuestions.addEventListener("click", handleGetQuestions);
}


function handleGetQuestions() {
    let url = 'questionnaire.json';
    let output = document.getElementById("div_output");
    makeElementEmpty(output);
    // doe de fetch, zet de gegevens in de response van de server in de variabele questionnaire
    //      let questionnaireDiv = makequestionnaireDiv(questionnaire);
    //      output.appendChild(questionnaireDiv);
}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

function makequestionnaireDiv(questionnaire) {
    let questionnaireDiv = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(questions.title));
    questionnaireDiv.appendChild(h1);
    // doorloop alle questions in questionnaire
    //    maak een textNode aan met daarin volgnummer en vraag
    //    voeg de textnode toe aan questionnaireDiv
    //    questionnaireDiv.appendChild(document.createElement("br"));
    //    maak een input aan
    //       gebruik setAttribute om type="text" toe te voegen aan de input
    //       gebruik setAttribute om id="q1", id="q2", ... toe te voegen
    //       voeg de input toe aan questionnaireDiv


    let button = document.createElement("button");
    button.appendChild(document.createTextNode("send"));
    button.setAttribute("id", "button_send");
    questionnaireDiv.appendChild(button);
    // bij een klik op de button moeten alle ingegeven antwoorden getoond worden.
    // gebruik hiervoor de functie makeoutputDiv hieronder


    return questionnaireDiv;
}

function makeoutputDiv() {
    let output = document.getElementById("div_output");
    let volgnummer = 1;
    let input = document.getElementById("q" + volgnummer);
    // zolang input niet gelijk is aan null
    //    voeg een textnode met volgnummer en value van de input toe aan output
    //    output.appendChild(document.createElement("hr"));
    //    verhoog volgnummer
    //    selecteer de volgende input

}
