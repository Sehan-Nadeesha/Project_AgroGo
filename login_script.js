const container = document.getElementById('container');
const goToRegisterPageBtn = document.getElementById('register');
const goTologinPageBtn = document.getElementById('login');
const signinBtn = document.getElementById('signinBtn');
const signUpBtn = document.getElementById('signUpBtn');





goToRegisterPageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add("active");
});

signinBtn.addEventListener('click', (e) => {
    e.preventDefault();

    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;
   
    if (loginEmail == ""){
        alert("Enter Your Email");
    }else if(loginPassword == ""){
        alert("Enter Your Password")
    }else{

        alert("Success")

    // var form = new FormData();
    // form.append("email", loginEmail);
    // form.append("password", loginPassword);

    // var request = new XMLHttpRequest();

    // request.onreadystatechange = function () {
    //     if (request.readyState == 4 & request.status == 200) {

    //         if (request.responseText == "Success") {
               
    //             document.getElementById('loginEmail').value="";
    //             document.getElementById('loginPassword').value="";
    //             window.location="dashboard.php"
    //         }else{
    //             // alert("Somthing Is Wrong !!!")
    //             alert(request.responseText)
    //         }
    //     }
    // }
    // request.open("POST", "signInProcess.php?", true);
    // request.send(form)
    }

    
})


signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   
    if (email == ""){
        alert("Enter Your Email");
    }else if(password == ""){
        alert("Enter Your Password")
    }else if(name == ""){
        alert("Enter your Name");
    }else{

        alert("Success")
       

    // var form = new FormData();
    // form.append("name", name)
    // form.append("email", email);
    // form.append("password", password);

    // var request = new XMLHttpRequest();

    // request.onreadystatechange = function () {
    //     if (request.readyState == 4 & request.status == 200) {
    //         if (request.responseText == "Success") {
    //             alert(request.responseText)
    //             document.getElementById('name').value="";
    //             document.getElementById('email').value="";
    //             document.getElementById('password').value="";
    //         }else{
    //             alert("Somthing Is Wrong !!!")
    //         }
    //     }
    // }
    // request.open("POST", "signUpProcess.php?", true);
    // request.send(form)
    }
})

goTologinPageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove("active");

});