





function validateForm() {

    let a = document.forms["myForm"]["first"].value;
    let b = document.forms["myForm"]["second"].value;
    let c = document.forms["myForm"]["third"].value;
    let d = document.forms["myForm"]["fourth"].value;
    let error = document.getElementById("test-img");
    let error1 = document.getElementById("test");

    let error4 = document.getElementById("test3");
    let error5 = document.getElementById("test-img3")
    let error6 = document.getElementById("test4")
    let error7 = document.getElementById("test-img4");

    let emailError = document.getElementById("test-img2");
    let emailError2 = document.getElementById("test2");

    if (d === 'null' || d === '' || d.length < 5) {

        error.style.opacity = 1;
        error1.style.opacity = 1;

    } else {

        error.style.opacity = 0;
        error1.style.opacity = 0;
    }



    if (b === "null" || b === '') {
        error4.style.opacity = 1;
        error5.style.opacity = 1;

    } else {

        error4.style.opacity = 0;
        error5.style.opacity = 0;
    }

    if (a === "null" || a === '') {

        error6.style.opacity = 1;
        error7.style.opacity = 1;

    } else {

        error6.style.opacity = 0;
        error7.style.opacity = 0;
    }

       if (c ==="null" || c === '') {

        emailError.style.opacity = 1;
        emailError2.style.opacity = 1;

       } else if (!isValid(c)) {

        emailError.style.opacity = 1;
        emailError2.style.opacity = 1;
       } else {

        emailError.style.opacity = 0;
        emailError2.style.opacity = 0;
       }
}

function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}