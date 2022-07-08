
let vide
let namevide
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let invalidMail
let mail, named, firstname
function enterName() {
    if ((document.form1.firstname.value == "") && (vide == undefined)){
        vide = document.createElement('p')
        vide.innerHTML = "un prénom doit être renseigné"
        vide.style.color = 'red'
        document.getElementById("labelfirstname").appendChild(vide)
        return 0;
        
    }

    if ((document.form1.name.value == "") && (namevide == undefined)) {
        namevide = document.createElement('p')
        namevide.innerHTML = "un nom doit être renseigné"
        namevide.style.color = "red"
        document.getElementById("labelname").appendChild(namevide)
        return 0;
    }
    if (!document.form1.email.value.match(mailformat) ){
        invalidMail = document.createElement('p')
        invalidMail.innerHTML = "une adresse email valide doit être renseignée"
        invalidMail.style.color = "red"
        document.getElementById("labelemail").appendChild(invalidMail)
        return 0;
    }

    named = document.form1.name.value;
    firstname = document.form1.firstname.value
    mail = document.form1.email.value
    form1.classList.add('out');
    document.getElementById('form2').classList.add('textformin')
    let title = document.getElementsByClassName('titre')
    let bonjour = document.createElement('p')
    bonjour.innerHTML = 'bonjour '+ firstname + ' ' + named + ''
    title[0].classList.add('titreout')
    bonjour.classList.add('bonjour')
    bonjour.classList.add('bonjourin')
    document.getElementById('container').appendChild(bonjour)

}