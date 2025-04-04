
/******************* CARD RETURN *******************/

const btnGo = document.querySelector(".btnGo");
const btnRetour = document.querySelector(".btnRetour");
const card = document.querySelector(".card");


function turnCardGo (){
    card.style.transform = "rotateY(180deg)";
}

function turnCardReturn () {
    card.style.transform = "rotateY(360deg)";
}


btnGo.addEventListener('click', turnCardGo);
btnRetour.addEventListener('click', turnCardReturn);




/*******************************************************************************************/
/*******************************************************************************************/
/*******************************************************************************************/



/******************* FRENCH MAP INTERACTIVE *******************/

const circleToulouse = document.querySelector("#toulouse");
const content = document.querySelector('.mapExplicationContainer');

function createPresentation() {

    if (document.querySelector('.divToulouse')) return;

   

    const divPresentation = document.createElement('div');
    divPresentation.classList.add('toulouse', 'divToulouse', 'fiche');

   

    divPresentation.innerHTML = `
                        <svg class="closeArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g data-name="Layer 44" id="Layer_44"><path d="M40.61,15.38l-2.83-2.83a.51.51,0,0,0-.71,0L18,31.65a.48.48,0,0,0,0,.7l19.09,19.1a.52.52,0,0,0,.71,0l2.83-2.83a.51.51,0,0,0,0-.71L24.7,32,40.61,16.09A.51.51,0,0,0,40.61,15.38Z"/><path d="M32,3.5A28.5,28.5,0,1,0,60.5,32,28.54,28.54,0,0,0,32,3.5Zm0,52A23.5,23.5,0,1,1,55.5,32,23.52,23.52,0,0,1,32,55.5Z"/></g></svg>
                        <h3> TOULOUSE </h3>
                        
                        <h3>2009/2018</h3><br>

                        <h4>Expériences Professionnelles</h4><br>

                        <h5>Mairie de Pins-Justaret (31)</h5>
                        <h6>Responsable Finance et Comptabilité - Juin 2018 à juin 2021 </h6><br>

                        <p>
                            - Préparation et suivi du budget de la Commune et du CCAS <br>
                            - Mise en œuvre de l'exécution comptable des marchés publics <br>et procédures de
                            contrôle<br>
                            - Gestion de la Trésorerie <br>
                        </p><br>


                        <h4>Formations</h4><br>
                        <p>
                            <strong>Licence professionnelle M.A.T</strong> <br>
                            Université Jean-Jaurès Toulouse 2018 <br><br>

                            Licence 1ere et 2ème année de droit <br>
                            Université Capitole Toulouse 2015/2018 <br><br>

                            Capacité en droit (distanciel) <br>
                            IPST-CNAM Toulouse 2015 <br><br>

                            ESICAD Ecole de de Commerce et de Gestion <br>
                            BTS Management des Unités Commerciales - 1ère années 2009/2011 <br><br>

                            Lycée Pierre Paul Riquet <br><br>
                            Niveau Baccalauréat Littéraire 2006/2009
    `;

    content.append(divPresentation);
    const closeArrow = divPresentation.querySelector(".closeArrow");
    closeArrow.addEventListener("click", deletePresentation);
}



function deletePresentation() {
    const divToulouse = document.querySelector('.divToulouse');
    divToulouse.remove();
}

circleToulouse.addEventListener('click', createPresentation);


/****************** RODEZ ***********************/
const circleRodez = document.querySelector("#rodez");

function createPresentationR() {
    if (document.querySelector('.divRodez')) return;

    const divPresentationR = document.createElement('div');
    divPresentationR.classList.add('rodez', 'divRodez', 'fiche');

    divPresentationR.innerHTML = `
                        <svg class="closeArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g data-name="Layer 44" id="Layer_44"><path d="M40.61,15.38l-2.83-2.83a.51.51,0,0,0-.71,0L18,31.65a.48.48,0,0,0,0,.7l19.09,19.1a.52.52,0,0,0,.71,0l2.83-2.83a.51.51,0,0,0,0-.71L24.7,32,40.61,16.09A.51.51,0,0,0,40.61,15.38Z"/><path d="M32,3.5A28.5,28.5,0,1,0,60.5,32,28.54,28.54,0,0,0,32,3.5Zm0,52A23.5,23.5,0,1,1,55.5,32,23.52,23.52,0,0,1,32,55.5Z"/></g></svg>
                        <h3> Laguiole </h3><br>
                        <h3>2022/2023</h3>
                        <br><br><br>
                        <h4>Expériences Professionnelles</h4><br><br>

                        <h5>Mairie de Laguiole (12)</h5>
                        <h6> Responsable Administratif et Juridique </h6><br><br>

                        <p>
                            <strong>Accompagnement de Projets : </strong><br>
                            - Aménagement d'une Liaison Douce entre le vieux et ancien Foirail <br>
                            - Procédure Dissolution/Création du Syndicat Mixte Station de Ski<br><br>

                            <strong>Accompagnement quotidien :</strong><br>
                            - Préparation phase budgétaire <br>
                            - Rédaction des Actes Administratifs (Délibérations, Arrêtés) <br>
                            - Présentation budgétaire au Conseil Municipal <br>
                            - Suivi Financier des Marchés Publics <br>
                        </p><br>
    `;

    content.append(divPresentationR);
    const closeArrow = divPresentationR.querySelector(".closeArrow");
    closeArrow.addEventListener("click", deletePresentationR);
}

function deletePresentationR() {

    const divRodez = document.querySelector('.divRodez');
    divRodez.remove();
}

circleRodez.addEventListener("click", createPresentationR);



/****************** SAINT QUENTIN ***********************/
const circleSaintQuentin = document.querySelector("#saintQuentin");



function createPresentationSQ() {
    if (document.querySelector('.divSaintQuentin')) return;

    const divPresentationSQ = document.createElement('div');
    divPresentationSQ.classList.add('saintQuentin', 'divSaintQuentin', 'fiche');

    divPresentationSQ.innerHTML = `
                        <svg class="closeArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g data-name="Layer 44" id="Layer_44"><path d="M40.61,15.38l-2.83-2.83a.51.51,0,0,0-.71,0L18,31.65a.48.48,0,0,0,0,.7l19.09,19.1a.52.52,0,0,0,.71,0l2.83-2.83a.51.51,0,0,0,0-.71L24.7,32,40.61,16.09A.51.51,0,0,0,40.61,15.38Z"/><path d="M32,3.5A28.5,28.5,0,1,0,60.5,32,28.54,28.54,0,0,0,32,3.5Zm0,52A23.5,23.5,0,1,1,55.5,32,23.52,23.52,0,0,1,32,55.5Z"/></g></svg>
                        <h3> SAINT-QUENTIN</h3>
                        <h3>2023/2024</h3><br><br><br>
                        <h4>Expériences Professionnelles</h4><br><br>

                        <h5>Direction Départementale des Finances Publiques (02)</h5>
                        <h6> Conseiller aux Décideurs Locaux </h6><br><br>

                        <p>
                            <strong>Accompagnement des élus locaux suivant trois niveaux : </strong><br><br>
                            - Régulière suivant les échéances annuelles rythmant la vie de la collectivité : préparation
                            et vote du budget <br><br>
                            - Thèmatique en fonction de l'actualité des réformes : Mise en place de la réforme sur la
                            nouvelle nomenclature comptable (M57) et le Compte Financier Unique, dématérialisation des
                            documents budgétaires<br><br>
                            - Personnalisée en fonction des besoins des collectivités : analyses financières,
                            accompagnement dans les projets d'investissement
    `;
    

    content.append(divPresentationSQ);
    const closeArrow = divPresentationSQ.querySelector(".closeArrow");
    closeArrow.addEventListener("click", deletePresentationSQ);
}
function deletePresentationSQ() {
    
    const divSaintQuentin = document.querySelector('.divSaintQuentin');
    divSaintQuentin.remove();
}

circleSaintQuentin.addEventListener("click", createPresentationSQ);








/****************** LYON ***********************/
const circleLyon = document.querySelector("#lyon");

function createPresentationL() {

    if (document.querySelector('.divLyon')) return;

    const divPresentationL = document.createElement('div');
    divPresentationL.classList.add('lyon', 'divLyon', 'fiche');

    divPresentationL.innerHTML = `
                        <svg class="closeArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g data-name="Layer 44" id="Layer_44"><path d="M40.61,15.38l-2.83-2.83a.51.51,0,0,0-.71,0L18,31.65a.48.48,0,0,0,0,.7l19.09,19.1a.52.52,0,0,0,.71,0l2.83-2.83a.51.51,0,0,0,0-.71L24.7,32,40.61,16.09A.51.51,0,0,0,40.61,15.38Z"/><path d="M32,3.5A28.5,28.5,0,1,0,60.5,32,28.54,28.54,0,0,0,32,3.5Zm0,52A23.5,23.5,0,1,1,55.5,32,23.52,23.52,0,0,1,32,55.5Z"/></g></svg>    
                        <h3> LYON</h3><br>
                        <h3>2024/2025</h3>
                        <br>
                        <h4>En cours de formation (69)</h4><br>

                        <h6>Développeur Web et Web Mobile </h6><br>

                        <p>
                            Dans le cadre d'une reconversion professionnelle, j'ai entrepris une formation de développeur web web mobilie auprès de la
                            Chambre de Commerce et d'Industrie dans sa branche formation à Lyon.<br><br>
                            Cette formation a commencé en novembre 2024 et se termine en octobre 2025 avec un diplome RNCP de Niveau 5, équivalent Bac +2.    <br>
                            Dans le cadre de cette formation, je dois réaliser un stage de deux mois en juin et juillet
                            2025. C'est une opportunité de pouvoir évoluer au sein d'une structure me permettant de mettre 
                            en pratique les connaissances acquises tout au long de ce cursus, et notamment découvrir l'environnement 
                            d'un développeur au sein d'une entreprise. Le travail en équipe et son organisation scrum, 
                            les bonnes pratiques en terme de code ou encore l'investissement dans les missions de dev sont très stimulatntes.
                            <br><br><br>
                            Par la suite, j'envisage de réaliser une année supplémentaire en alternance pour obtenir un
                            titre professionnelle de niveau Bac+3. Cette alternance
                            débutera en janvier 2026.
                        </p>
    `;

    content.append(divPresentationL);
    const closeArrow = divPresentationL.querySelector(".closeArrow");
    closeArrow.addEventListener("click", deletePresentationL);
}

function deletePresentationL() {

    const divLyon = document.querySelector('.divLyon');
    divLyon.remove();
}

circleLyon.addEventListener("click", createPresentationL);
;




/*******************************************************************************************/
/*******************************************************************************************/
/*******************************************************************************************/



/******************* MODE LIGHT *******************/

document.addEventListener("DOMContentLoaded", () => {
    const btnOn = document.querySelector(".on");
    const btnOff = document.querySelector(".off");
    const titles = document.querySelectorAll(".icon, .wordpress, .js, .mysql, .html, .css, .php, .symfony");
    const textDevs = document.querySelectorAll(".futurJob");
    const arrowMaps = document.querySelectorAll("path");



    function lightToOn() {
        titles.forEach(title => {
            title.style.borderColor = "#8A2BE2";

            title.style.boxShadow = "0 0 2px #8A2BE2, inset 0 0 2px #8A2BE2, 0 0 4px #8A2BE2, inset 0 0 4px #8A2BE2, 0 0 8px #8A2BE2, inset 0 0 8px #8A2BE2, 0 0 16px #8A2BE2, inset 0 0 16px #8A2BE2";
        });

        textDevs.forEach(textDev => {
            textDev.style.borderColor = "#FFF";
            textDev.style.textShadow = "0 0 2px #8A2BE2, 0 0 4px #8A2BE2, 0 0 8px #8A2BE2, 0 0 16px #8A2BE2";
        });

        arrowMaps.forEach(arrowMap => {

            arrowMap.style.filter = "drop-shadow(0 0 5px #8A2BE2) drop-shadow(0 0 10px #8A2BE2) drop-shadow(0 0 15px #8A2BE2)"; 

        });
    }


    function lightToOff() {
        titles.forEach(title => {
            title.style.borderColor = "#212121";
            title.style.boxShadow = "none";
        });

        textDevs.forEach(textDev => {
            textDev.style.borderColor = "#212121";
            textDev.style.textShadow = "none";
        });

        arrowMaps.forEach(arrowMap => {
            arrowMap.style.filter = "none";
        });
    }

    if (btnOn) btnOn.addEventListener("click", lightToOn);
    if (btnOff) btnOff.addEventListener("click", lightToOff);
});




