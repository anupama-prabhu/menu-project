function popupalert() {
    delay(2000).then(() => showAlert());
}


function showAlert() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("visible");
}

function closeAlert() {
    var popup = document.getElementById("myPopup");
    popup.style.visibility = "hidden";
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function showemailpage() {
    var emailspan = document.getElementById("signupid");
    emailspan.style.visibility = "visible";
}

function closeemail() {
    var popup = document.getElementById("signupid");
    popup.style.visibility = "hidden";
}

function validateFname() {
    let name = document.getElementById('firstname').value;
    let fdiv = document.getElementById('fdiv');
    if (name.trim().length == 0) {
        document.getElementById('fout').innerText = 'Please Enter First Name'
        fdiv.classList.remove('has-success')
        fdiv.classList.add('has-error')
    } else {
        document.getElementById('fout').innerText = ''
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }
}

function validateLname() {
    let name = document.getElementById('lastname').value;
    let ldiv = document.getElementById('ldiv');
    if (name.trim().length == 0) {
        document.getElementById('lout').innerHTML = 'Please Enter Last Name'
        ldiv.classList.remove('has-success')
        ldiv.classList.add('has-error')
    } else {
        document.getElementById('lout').innerText = ''
        ldiv.classList.remove('has-error')
        ldiv.classList.add('has-success')
    }
}
const validateEmail = () => {
    let email = document.getElementById('email').value;
    if (email.trim().length == 0) {
        document.getElementById('email').innerText = 'Please Enter Email Id'
    } else {
        if (email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null) {
            document.getElementById('eout').innerHTML = 'Please Enter Valid Email'
        } else {
            document.getElementById('eout').innerText = ''

        }
    }
}

function validatePassword() {
    let pwd = document.getElementById('pwd').value;
    if (pwd.trim().length < 15) {
        if (pwd.trim().length < 8) {
            document.getElementById('pout').innerText = 'minimum length is 8'
            document.getElementById('pout').style.display = "block";
            document.getElementById('pout').style.backgroundColor = "red";
        } else if (pwd.trim().length > 8 && pwd.trim().length < 11) {
            document.getElementById('pwd').innerText = ''
            document.getElementById('pwd').style.backgroundColor = "orange";

        } else {
            document.getElementById('pwd').style.backgroundColor = "green";
        }
    }
}

const showPassword = () => {
    let pwd = document.getElementById('password');
    if (pwd.type == 'password') {
        pwd.type = "text";
    } else {
        pwd.type = "password";

    }
}

function validateCPassword() {
    let pwd = document.getElementById('passwordd').value;
    let cpwd = document.getElementById('cpassword').value;
    if (pwd !== cpwd) {
        document.getElementById('cpout').innerText = 'password doesnot match'
    } else {
        document.getElementById('cpout').innerText = ''
    }

}