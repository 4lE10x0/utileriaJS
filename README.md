# UtileriaJS \- Funciones de Validaciones y Calculos para Formularios u otros componentes

Estudiante: Edwin Alexis Esperanza Chavez  
Verano 2026 \- Programación Web

## 📌 ¿Qué problema resuelve?

UtileriaJS es un conjunto ligero de funciones JavaScript pensadas para validar campos comunes en formularios web.  
Evita tener que reescribir las mismas expresiones regulares y lógica de validación una y otra vez.  
Con este componente puedes:

* Validar correos electrónicos, nombres (solo letras), números con longitud controlada, URLs, teléfonos y contraseñas seguras.  
* Calcular la edad a partir de una fecha de nacimiento y verificar si el usuario es mayor de edad.  
* Mostrar mensajes de error emergentes (etiquetas que aparecen al enfocar o perder el foco) y alertas interactivas con SweetAlert2.

Es ideal para prototipos rápidos, formularios de registro, login y cualquier sitio que necesite validación del lado del cliente.

## 📦 Instalación

### 1\. Incluir los archivos CSS y JS

Puedes usar los archivos directamente desde tu proyecto o mediante CDN.

#### 📁 Estructura recomendada

```
tu-proyecto/  
|---formulario.html  
|---css/  
|     |---styles.css  
|---js  
|     |---[utileria.js](http://utileria.js)
```

#### ⚙️ Enlazar el JavaScript al final del `<body>`

```<script src="js/utileria.js"></script>```  
```<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>```

Nota: Si usas Bootstrap, coloca su script después de `utileria.js`. 

### 🔹 Validar correo electrónico

Función: `validarCorreo(correo)`  
Uso en `login.html`:  
```html  
\<div class="form-group"\>  
    \<label for="usuario"\>Usuario\</label\>  
    \<input type="text" id="usuario" name="usuario" placeholder="Ingresa tu usuario"  
           onblur="if(validarCorreo(this.value)){  
                       document.getElementById('correo-label').style.display \= 'none'  
                    } else {  
                       document.getElementById('correo-label').style.display \= 'inline'  
                    }"\>  
    \<span class="emergent-label" id="correo-label"\>correo no válido\!\</span\>  
\</div\>
```
El span con clase emergent-label se muestra cuando el valor no cumple la expresión regular.

### 🔹 Solo letras (nombre)

Función: `soloLetras(texto)`  
Uso en `index.html`:  
```html  
\<div class="mb-3"\>  
    \<label for="nombre" class="form-label"\>Nombre (Solo letras)\</label\>  
    \<input type="text" id="nombre" class="form-control" placeholder="Ingrese su nombre"  
           onblur="if(soloLetras(this.value)){  
                       document.getElementById('nombre-label').style.display \= 'none';  
                    } else {  
                       document.getElementById('nombre-label').style.display \= 'inline';  
                    }"\>  
    \<span class="emergent-label" id="nombre-label"\>ingresa solo letras\</span\>  
\</div\>
```

### 🔹 Validar longitud de un número

Función: `validarLongitud(numero, maxLongitud)`  
Uso en `index.html`:  
```html  
\<div class="mb-3"\>  
    \<label for="numero" class="form-label"\>Número (Validar longitud)\</label\>  
    \<input type="text" id="numero" class="form-control" placeholder="Ingrese un número con máximo 10 dígitos"  
           onblur="if(validarLongitud(this.value, 10)){  
                       document.getElementById('numero-label').style.display \= 'none';  
                    } else {  
                       document.getElementById('numero-label').style.display \= 'inline';  
                    }"\>  
    \<span class="emergent-label" id="numero-label"\>ingresa solo números\!\</span\>  
\</div\>
```

### 🔹 Validar URL

Función: `validarURL(url)`  
Uso en `index.html`:  
```html  
\<div class="mb-3"\>  
    \<label for="url" class="form-label"\>Página web (URL)\</label\>  
    \<input type="url" class="form-control" id="url" placeholder="https://ejemplo.com"  
           oninput="if(validarURL(this.value)){  
                       document.getElementById('url-label').style.display \= 'none';  
                    } else {  
                       document.getElementById('url-label').style.display \= 'inline';  
                    }"\>  
    \<span class="emergent-label" id="url-label"\>ingresa solo enlaces\!\</span\>  
\</div\>
```

### 🔹 Validar teléfono

Función: `validarTelefono(telefono)`  
Uso en `index.html`:  
```html  
\<div class="mb-3"\>  
    \<label for="telefono" class="form-label"\>Teléfono\</label\>  
    \<input type="text" class="form-control" id="telefono" placeholder="+52 9511234567"  
           oninput="if(validarTelefono(this.value)){  
                       document.getElementById('telefono-label').style.display \= 'none';  
                    } else {  
                       document.getElementById('telefono-label').style.display \= 'inline';  
                    }"\>  
    \<span class="emergent-label" id="telefono-label"\>ingresa un teléfono\!\</span\>  
\</div\>
```

### 🔹 Validar contraseña segura

Función: `validarPassword(password)`  
Uso en `login.html`:  
```html  
\<div class="form-group"\>  
    \<label for="password"\>Contraseña\</label\>  
    \<input type="password" id="password" name="password" placeholder="Ingresa una contraseña"  
           title="Debe tener al menos una mayúscula, una minúscula, un número, un carácter especial y una longitud mínima de 8 caracteres"  
           onblur="if(validarPassword(this.value)){  
                       document.getElementById('password-label').style.display \= 'none'  
                    } else {  
                       document.getElementById('password-label').style.display \= 'inline'  
                    }"\>  
    \<span class="emergent-label" id="password-label"\>contraseña no válida\!\</span\>  
\</div\>
```

### 🔹 Calcular edad y verificar mayoría de edad

Funciones: `calcularEdad(fechaNacimiento)` y `esMayorDeEdad(fechaNacimiento)`  
Uso en `index.html` con SweetAlert2:  
```html  
\<div class="mb-3"\>  
    \<label for="fechaNacimiento" class="form-label"\>Fecha de nacimiento\</label\>  
    \<input type="date" class="form-control" id="fechaNacimiento"\>  
\</div\>  
\<button type="button" class="btn btn-primary" onclick="validarDate()"\>Validar\</button\>  
Y en utileria.js:  
javascript  
const validarDate \= () \=\> {  
    const fecha \= document.getElementById('fechaNacimiento').value;  
    if (esMayorDeEdad(fecha)) {  
        Swal.fire({  
            icon: "success",  
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
```

## 📸 Capturas de pantalla

> Formulario con sus errores:
>
> ![Formulario con errores](https://i.postimg.cc/3rvw4pLW/Captura-de-pantalla-2026-07-05-184914.png)

> Formulario validado:
>
> ![Formulario validado](https://i.postimg.cc/Y9Bsd5Hk/Captura-de-pantalla-2026-07-05-184956.png) 

> SweetAlert mostrando resultado del input date:
>
> ![SweetAlert resultado succes del input date](https://i.postimg.cc/8kRSgbXT/Captura-de-pantalla-2026-07-05-184934.png)

>Log In con sus errorer:
>
>![Log In con errores](https://i.postimg.cc/k5sbH8rR/Captura-de-pantalla-2026-07-05-190237.png)
>![Log In con errores](https://i.postimg.cc/vZdxHXb7/Captura-de-pantalla-2026-07-05-190249.png)

>Log In validado:
>
>![Log In validado](https://i.postimg.cc/TwhpH4JM/Captura-de-pantalla-2026-07-05-190320.png)
