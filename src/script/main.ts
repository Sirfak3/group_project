const checkview = document.getElementById('viewpass') as HTMLInputElement;
const userinput = document.getElementById('user') as HTMLInputElement;
const passwordinput = document.getElementById('password') as HTMLInputElement;

checkview.addEventListener('change', () => {
    if (checkview.checked) {
        passwordinput.type = 'text';
    } else {
        passwordinput.type = 'password';
    }
})