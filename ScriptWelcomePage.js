function Welcome() 
{
let name = document.getElementById('nameInput').value
if (name == '') {

     let welcomeText = 'Please enter your name!' 
    document.getElementById('Welcome').innerText = welcomeText
    } else {
     let welcomeText = 'Welcome, ' + name + '!' 
    document.getElementById('Welcome').innerText = welcomeText
}
    
}