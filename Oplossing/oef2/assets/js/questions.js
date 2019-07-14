// Naam : Yannick Ory
window.addEventListener("load", loaded);

function loaded() {
    let buttonGetQuestions = document.getElementById('button_get_questions');
    buttonGetQuestions.addEventListener("click", handleGetQuestions);
}


function handleGetQuestions() {
    let url = 'questionnaire.json';
    let output = document.getElementById("div_output");
    makeElementEmpty(output);

    fetch(url)
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((questionnaire) => {
            let questionnaireDiv = makequestionnaireDiv(questionnaire);
            output.appendChild(questionnaireDiv);
        })
        .catch((error) => {
            output.appendChild(document.createTextNode(error));
        });


}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

function makequestionnaireDiv(questionnaire) {
    let questionnaireDiv = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(questionnaire.title));
    questionnaireDiv.appendChild(h1);
    let count = 1;
    for (let question of questionnaire.questions) {
        let tekst = document.createTextNode(count + " " + question);
        questionnaireDiv.appendChild(tekst);
        let space = document.createElement("br");
        questionnaireDiv.appendChild(space);
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", `q${count}`);
        questionnaireDiv.appendChild(input);
        let lijn = document.createElement("hr");
        questionnaireDiv.appendChild(lijn);
        count++;
    }


    let button = document.createElement("button");
    button.appendChild(document.createTextNode("send"));
    button.setAttribute("id", "button_send");
    questionnaireDiv.appendChild(button);
    button.addEventListener("click", makeoutputDiv);



    return questionnaireDiv;
}

function makeoutputDiv() {
    let elements = document.querySelectorAll("input");
    console.log(elements);
    let volgnummer = 1;
    let output = document.getElementById("div_output");
    for ($i = 0; $i < elements.length; $i++) {
        let input = document.getElementById("q" + volgnummer);
        let tekst = document.createTextNode(volgnummer + " " + input.value);
        output.appendChild(tekst);
        output.appendChild(document.createElement("hr"));
        volgnummer++;
    }

}
