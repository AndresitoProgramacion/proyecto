console.log('Completa el Formulario:');

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('correo').value;
    const dp = document.getElementById('departamento').value;
    const ciudad = document.getElementById('ciudad').value;
    const cargo = document.getElementById('cargo').value;

    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('correo electronico:', email);
    console.log('departamento:', dp);
    console.log('ciudad:', ciudad);
    console.log('cargo:', cargo);

    if (nombre === '' || apellido === '' || email === '' || dp === '' || ciudad === '' || cargo === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    console.log('Formulario enviado:');
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('correo electronico:', email);
    console.log('departamento:', dp);
    console.log('ciudad:', ciudad);
    console.log('cargo:', cargo);
});
