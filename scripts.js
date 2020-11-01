/* Add your JavaScript to this file */

window.onload = function () {

    this.emailVerfication();

}

function emailVerfication() {

    var message = document.getElementsByClassName('message')[0];


    var subscribe = document.getElementsByClassName('btn')[1].onclick = function (button) {
        var userEmail = document.getElementById('email').value;
        button.preventDefault();

        if (userEmail !== "") {
            message.innerHTML = ("Thank you! Your email address" + " " + userEmail + " " + "has been added to our mailing list");
            return (True);
        }

        else {
            message.innerHTML = ("Please enter a valid email address");
            return (False);
        }

    };

}








/*
var text = getElementByID('email');
if (userEmail.innerHTML === validEmail);
if (userEmail.match(validEmail));
*/