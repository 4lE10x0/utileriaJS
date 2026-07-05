const validarCorreo = (correo) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(correo);
};

const soloLetras = (texto) => {
    const regex = /^[A-Za-z]+$/
    return regex.test(texto);
};

const validarLongitud = (numero, maxLongitud) => {
    return numero.length <= maxLongitud;
};

const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const birth = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - birth.getFullYear();
    const mes = hoy.getMonth() - birth.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < birth.getDate())) {
        edad--;
    }
    return edad;
};

const esMayorDeEdad = (fechaNacimiento) => {
    let edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
};

const validarPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    return regex.test(password);
}

const validarURL = (url) => {
    const regex = /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}(\/\S*)?$/i;
    return regex.test(url);
};

const validarTelefono = (telefono) => {
    const regex = /^(\+?\d{1,3}\s?)?\d{10}$/;
    return regex.test(telefono);
};


const validarDate = () => {
    const fecha = document.getElementById('fechaNacimiento').value;
    let mes = "";
    if (esMayorDeEdad(fecha)) {
        Swal.fire({
            icon: "succes",
            title: "Edad Calculada",
            text: "Eres mayor de edad"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Ooops",
            text: "Eres menor de edad"
        });
    }
};