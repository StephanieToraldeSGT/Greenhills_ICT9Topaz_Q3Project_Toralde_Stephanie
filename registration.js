function to_register() {
    let first = document.getElementById('fname').value;
    let last = document.getElementById('lname').value;
    let user = document.getElementById('user').value;
    let termsChecked = document.getElementById('terms').checked;

    if (first === "" || last === "" || user === "") {
        alert("Please fill in all the text boxes!");
        return;
    }

    if (!termsChecked) {
        alert("You must agree to the Terms of Use to proceed.");
        return;
    }

    let proceed = confirm("Everything looks good! Ready to register as " + user + "?");
    
    if (proceed) {
        window.location.href = "confirmation.html";
    }
}

