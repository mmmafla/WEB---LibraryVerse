const UsuarioEm = document.getElementById("Usuario o Email");
const ContraseñaLg = document.getElementById("ContraseñaLg");

const Usuario = document.getElementById("Usuario");
const Email = document.getElementById("Email");
const ContraseñaRg = document.getElementById("ContraseñaRg");


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = Usuario.value.trim();
    const emailValue = Email.value.trim();
    const passwordValue = ContraseñaRg.value.trim();


    if(usernameValue === '') {
        setError(Usuario, 'Nombre de usuario es requerido');
    } else {
        setSuccess(Usuario);
    }

    if(emailValue === '') {
        setError(Email, 'Email es requerido');
    } else if (!isValidEmail(emailValue)) {
        setError(Email, 'Provee un Email valido');
    } else {
        setSuccess(Email);
    }

    if(passwordValue === '') {
        setError(ContraseñaRg, 'La contraseña es requerida');
    } else if (passwordValue.length < 8 ) {
        setError(ContraseñaRg, 'La contraseña  debe tener al menos un largo de 8 letras.')
    } else {
        setSuccess(ContraseñaRg);
    }

};
