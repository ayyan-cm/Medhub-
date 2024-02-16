//signup - login form change
document.addEventListener('DOMContentLoaded', function(){
    var loginDiv = document.querySelector('.login');
    var signUpDiv = document.querySelector('.sign-up');

    var loginLink = document.getElementById('loginLink');
    var signUpLink = document.getElementById('signUpLink');

    loginLink.addEventListener('click', function(event){
        event.preventDefault();
        loginDiv.style.display = 'block';
        signUpDiv.style.display = 'none';
    });

    signUpLink.addEventListener('click', function(event){
        event.preventDefault();
        loginDiv.style.display = 'none';
        signUpDiv.style.display = 'block';
    });
});

