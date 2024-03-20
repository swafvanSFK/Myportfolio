function submitHandler(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let alert = document.getElementById('alert');

    alert.style.display = 'none';

    if (name.length == 0){
        alert.textContent = "ENTER YOUR NAME . IT'S MANDATORY!"
        alert.style.display = 'block';
        return false;
    }
    if(email.length == 0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
        alert.textContent = "PLEASE ENTER VALID EMAIL";
        alert.style.display = 'block';
        return false;
    }
    if(message.length == 0){
        alert.textContent = "PLEASE TYPE YOUR MESSAGE TO SEND";
        alert.style.display = 'block';
        return false;
    }

    return false;
}