document.addEventListener('DOMContentLoaded', function () {
const signUpButton=document.getElementById('SignUpButton');
const signInButton=document.getElementById('SignInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    //e.preventDefault();
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click',function(){
    //e.preventDefault();
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

});
