// // Je veux créer un add event listener et lorsque le curseur passe dessus la div, elle affiche un nouveau document qui présentera ce que j'y ai fait

// // 1. j'appelle les divs
// // 2. je crée le addEventListener lorsque le curseur passe dessus
// // 3. je crée un document qui présente ce que j'ai fait



// // J'appelle ma div que je nomme divToulouse
// const divToulouse = document.querySelector('#toulouse');
// const divRodez = document.querySelector('.rodez');
// const divSaintQuentin = document.querySelector('.saintQuentin');
// const divLyon = document.querySelector('.lyon');




// // TOULOUSE
// function createPresentationToulouse() {

//     const presentationToulouse = document.createElement('div');
//     presentationToulouse.classList.add('presentationToulouse', 'presentationExperience');
//     presentationToulouse.innerHTML = `
// <h3> Toulouse </h3>
// <h3>1989 - 2018</h3>
// <h4>Expériences Professionnelles</h4><br>

// <h5>Mairie de Pins-Justaret (31)</h5> 
// <h6> Responsable Finance et Comptabilité - Juin 2018 à juin 2021 </h6><br>

// <p>
// - Préparation et suivi du budget de la Commune et du CCAS <br>
// - Mise en œuvre de l'exécution comptable des marchés publics et procédures de contrôle<br>
// - Gestion de la Trésorerie <br>
// </p><br>


// <h4>Formations</h4>
// <p>
//  Licence professionnelle M.A.T <br>
//  Université Jean-Jaurès Toulouse 2018 <br><br> 

//  Licence 1ere et 2ème année de droit <br>
//  Université Capitole Toulouse 2015/2018 <br><br>

//  Capacité en droit (distanciel) <br>
//  IPST-CNAM Toulouse 2015 <br><br>

//  ESICAD Ecole de de Commerce et de Gestion <br>
//  BTS Management des Unités Commerciales - 1ère années 2009/2011 <br><br>

//  Lycée Pierre Paul Riquet <br><br>
//  Niveau Baccalauréat Littéraire 2006/2009
//  </p>   `;

//     divToulouse.append(presentationToulouse);
// }




// // RODEZ
// function createPresentationRodez() {

//     const presentationRodez = document.createElement('div');
//     presentationRodez.classList.add('presentationRodez', 'presentationExperience');
//     presentationRodez.innerHTML = `
//     <h3> Laguiole </h3>
//     <h3>2022 - 2023</h3>
//     <h4>Expériences Professionnelles</h4><br>

//     <h5>Mairie de Laguiole (12)</h5> 
//     <h6> Responsable Administratif et Juridique  </h6><br>

//     <p>
//     Accompagnement de Projets : <br>
//     - Aménagement d'une Liaison Douce entre le vieux et ancien Foirail <br>
//     - Procédure Dissolution/Création du Syndicat Mixte Station de Ski<br><br>

//     Accompagnement quotidien :<br>
//     - Préparation phase budgétaire <br>
//     - Rédaction des Actes Administratifs (Délibérations, Arrêtés) <br>
//     - Présentation budgétaire au Conseil Municipal <br>
//     - Suivi Financier des Marchés Publics <br>
//     </p><br>
//     `;

//     divRodez.append(presentationRodez);
// }

// // SAINT-QUENTIN
// function createPresentationSaintQuentin() {

//     const presentationSaintQuentin = document.createElement('div');
//     presentationSaintQuentin.classList.add('presentationSaintQuentin', 'presentationExperience');

//     presentationSaintQuentin.innerHTML = `
//     <h3> Saint-Quentin </h3>
//     <h3>2023 - 2024</h3>
//     <h4>Expériences Professionnelles</h4><br>

//     <h5>Direction Départementale des Finances Publiques (02)</h5> 
//     <h6> Conseiller aux Décideurs Locaux  </h6><br>

//     <p>
//     Accompagnement des élus locaux suivant trois niveaux : <br>
//     - Régulière suivant les échéances annuelles rythmant la vie de la collectivité : préparation et vote du budget <br>
//     - Thèmatique en fonction de l'actualité des réformes : Mise en place de la réforme sur la nouvelle nomenclature comptable (M57) et le Compte Financier Unique, dématérialisation des documents budgétaires<br>
//     - Personnalisée en fonction des besoins des collectivités : analyses financières, accompagnement dans les projets d'investissement

//    </p>
//     `;

//     divSaintQuentin.append(presentationSaintQuentin);
// }

// // LYON
// function createPresentationLyon() {

//     const presentationLyon = document.createElement('div');
//     presentationLyon.classList.add('presentationLyon', 'presentationExperience');

//     presentationLyon.innerHTML = `
//     <h3> Lyon </h3>
//     <h3>2024 - 2025</h3>
//     <h4>Formation</h4><br>

//     <h5>Direction Départementale des Finances Publiques (02)</h5> 
//     <h6> Développeur Web et Web Mobile </h6><br>

//     <p>
//     Dans le cadre d'une reconversion professionnelle, j'ai débuté une formation auprès de la Chambre de Commerce et d'Industrie dans sa branche formation à Lyon.<br>
//     Celle-ci a commencé en novembre 2024 et doit se terminer en octobre 2025 et me permettra d'acquérir les compétences nécessaires pour devenir Développeur Web et Web Mobile. <br>
//     Dans le cadre de cette formation, je dois réaliser un stage de deux mois en juin et juillet 2025. C'est une opportunité que de pouvoir évoluer au sein d'une structure acceuillante et me permettre d'acquièrir des compétences supplémentaires.<br><br>
//     Par la suite, j'envisage de réaliser une année supplémentaire en alternance pour obtenir un titre professionnelle de niveau Bac+3, et me spécialiser en back-end. Cette alternance débuterait en janvier 2026. 




//    </p>
//     `;

//     divLyon.append(presentationLyon);
// }








// function closePresentationToulouse() {
//     presentationToulouse = document.querySelector('.presentationToulouse');
//     presentationToulouse.remove();
// }


// function closePresentationRodez() {
//     presentationRodez = document.querySelector('.presentationRodez');
//     presentationRodez.remove();
// }

// function closePresentationSaintQuentin() {
//     presentationSaintQuentin = document.querySelector('.presentationSaintQuentin');
//     presentationSaintQuentin.remove();
// }

// function closePresentationLyon() {
//     presentationLyon = document.querySelector('.presentationLyon');
//     presentationLyon.remove();
// }




// // Activation/désactivation des boutons
// divToulouse.addEventListener('mouseenter', createPresentationToulouse);
// divToulouse.addEventListener('mouseleave', closePresentationToulouse);

// divRodez.addEventListener('mouseenter', createPresentationRodez);
// divRodez.addEventListener('mouseleave', closePresentationRodez);

// divSaintQuentin.addEventListener('mouseenter', createPresentationSaintQuentin);
// divSaintQuentin.addEventListener('mouseleave', closePresentationSaintQuentin);

// divLyon.addEventListener('mouseenter', createPresentationLyon);
// divLyon.addEventListener('mouseleave', closePresentationLyon);

const circleToulouse = document.querySelector('#toulouse');
const textToulouse = document.querySelector('#presentationToulouse');

const circleRodez = document.querySelector('#rodez');
const textRodez = document.querySelector('#presentationRodez');

const circleSaintQuentin = document.querySelector('#saintQuentin');
const textSaintQuentin = document.querySelector('#presentationSaintQuentin');

const circleLyon = document.querySelector('#lyon');
const textLyon = document.querySelector('#presentationLyon');

console.log(textRodez);



circleToulouse.addEventListener('mouseenter', () => {
    console.log(circleToulouse)
    textToulouse.style.display = 'block';
    console.log(textToulouse)
});


circleToulouse.addEventListener('mouseleave', () => {
    textToulouse.style.display = 'none';
});



circleRodez.addEventListener('mouseenter', () => {
    textRodez.style.display = 'block';

});

circleRodez.addEventListener('mouseleave', () => {
    textRodez.style.display = 'none';
});



circleSaintQuentin.addEventListener('mouseenter', () => {
    textSaintQuentin.style.display = 'block';
});

circleSaintQuentin.addEventListener('mouseleave', () => {
    textSaintQuentin.style.display = 'none';
});



circleLyon.addEventListener('mouseenter', () => {
    textLyon.style.display = 'block';
});

circleLyon.addEventListener('mouseleave', () => {
    textLyon.style.display = 'none';
});


// circleToulouse.addEventListener('mouseenter', () => {
//     textToulouse.setAttribute('visibility', 'visible'); // Affiche le texte au clic
// });

// circleToulouse.addEventListener('mouseleave', () => {
//     textToulouse.setAttribute('visibility', 'hidden'); // Cache le texte quand la souris sort
// });






/******************* MODE LIGHT *******************/

document.addEventListener("DOMContentLoaded", () => {
    const btnOn = document.querySelector(".on");
    const btnOff = document.querySelector(".off");
    const titles = document.querySelectorAll(".icon, .wordpress, .js, .mysql");
    const textDevs = document.querySelectorAll(".futurJob");
    const arrowMaps = document.querySelectorAll(".frenchMap image");
  


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
            arrowMap.style.filter = "drop-shadow(0 0 5px #8A2BE2) drop-shadow(0 0 10px #8A2BE2)"; // Ajoute un effet lumineux aux images
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







