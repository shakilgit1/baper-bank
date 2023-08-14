// step 1 add click event handler
document.getElementById('login-btn').addEventListener('click', function(){
    // step 2 use.value to get input field value
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3 get password
    const passField = document.getElementById('user-pass');
    const password = passField.value;
    // DANGER: Do not verify email pass on the client side / on this system
    // step 4 verify email password
    if(email === 'shakil@bank.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Incorrect email or password');
    }


})