var checkview = document.getElementById('viewpass');
var userinput = document.getElementById('user');
var passwordinput = document.getElementById('password');
checkview.addEventListener('change', function () {
    if (checkview.checked) {
        passwordinput.type = 'text';
    }
    else {
        passwordinput.type = 'password';
    }
});
