
let login = document.querySelector(".login");
let sign_up = document.querySelector(".sign_up");
let close_login = document.querySelector(".close_login");

sign_up.addEventListener("click", function (e){
    document.querySelector('.registration-window').classList.add('show');
})

login.addEventListener("click", function (e){
    document.querySelector('.registration-window').classList.add('show');
})

close_login.addEventListener('click', () => {
    document.querySelector('.registration-window').classList.remove('show');
});

const video = document.querySelector('video');

video.addEventListener('mouseover', () => {
    video.play();
});

video.addEventListener('mouseout', () => {
    video.pause();
});

//---------------------------------

function validateForm() {
    var name = document.forms[0]["name"].value;
    var email = document.forms[0]["email"].value;
    var password = document.forms[0]["password"].value;

    if (name == "") {
        alert("Введите имя");
        return false;
    }

    if (email == "") {
        alert("Введите адрес электронной почты");
        return false;
    } else if (!validateEmail(email)) {
        alert("Введите корректный адрес электронной почты");
        return false;
    }

    if (password == "") {
        alert("Введите пароль");
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
