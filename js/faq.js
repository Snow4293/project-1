
// For Firebase 
var firebaseConfig = {
   apiKey: "AIzaSyAQk48rak-W76rfuIUgNCTdUjlHmyw8YKI",
   authDomain: "abc-cpn.firebaseapp.com",
   databaseURL: "https://abc-cpn.firebaseio.com",
   projectId: "abc-cpn",
   storageBucket: "abc-cpn.appspot.com",
   messagingSenderId: "88478711508",
   appId: "1:88478711508:web:cc9b21f3f08de2cf998541",
   measurementId: "G-5DQ9FQSLKT"
};
// Initialize Firebase


firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    saveMessage(name, company, email, phone, message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
    document.querySelector('.alert').style.display ='none';
    },2000);

    document.getElementById('contactForm').reset();

}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email:email,
        phone:phone,
        message:message
    });
}