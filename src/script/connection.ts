document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('formlogin') as HTMLFormElement;

    var Promise: any;

    async function acessar(event:Event): Promise<void> {
        event.preventDefault();

        const userinput = document.getElementById('user') as HTMLInputElement;
        const passinput = document.getElementById('password') as HTMLInputElement;

        const username = userinput.value;
        const password = passinput.value;

        if (username === '' || password === '') {
            alert('Preencha todos os campos');
            return;
        }

        const meuJSON = {user: username, pass: password};

        try {
            const response = await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(meuJSON)
            });

            const result = await response.json();

            if(result.success) {
                alert('Funcionou');
            } else {
                alert('Nome de usuario ou senha incorretos');
            }
        }
        catch (error) {
            console.log('Erro: ', error);

        }
    }

    if (form) {
        form.addEventListener('submit', acessar);
    }
});