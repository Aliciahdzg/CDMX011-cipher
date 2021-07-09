const cipher = {
    encode: (offset, string) => {
        let mensajeMayus = string.toUpperCase();
        let resultadoCifrado = "";
        /*ciclo for para iterar por cada letra y sacar el codigo ASCII donde i es igual al indice donde va a iniciar
        el metodo length devuelve el número de elementos de mi lista de caracteres de mensaje
        y lo hara mientras i sea menor que mensajeMayus.length, al finalizar la iteracion a i le suma 1 al indice para cambiar el varlor*/
        for (let i = 0; i < mensajeMayus.length; i++) {
            let letraASCII = mensajeMayus.charCodeAt(i); //variable que guarda el numero ASCII de cada letra que se esta iterando
            if (letraASCII == 32) {
                String.fromCharCode(cifrar)
            }
            let cifrar = ((letraASCII - 65 + offset) % 26) + 65; //Formula del cifrado cesar 
            let Cifrado = String.fromCharCode(cifrar);

            resultadoCifrado += Cifrado;


            /*let resultado = "";
            let letraCifrar = 0;
            for (let i = 0; i < mensajeEscrito.length; i++) {
                let letraASCII = mensajeEscrito.charCodeAt(i);
                if ((letraASCII >= 65) && (letraASCII < 91)) {
                    letraCifrar = ((letraASCII - 65 + desplazamiento) % 26) + 65;
                    console.log(letraASCII)
                    console.log(letraCifrar)
                }
                let nuevaCadena = String.fromCharCode(letraCifrar);
                resultado += nuevaCadena;
                return resultado;*/

        }

        return resultadoCifrado
    },

    decode: (offset, string) => {
        let mensajeDescifrado = "";
        if (offset === null && typeof string !== String) {
            throw new TypeError("valores inválidos")
        } else if (offset == 0 && string == 0) {
            throw new TypeError("valores inválidos")
        }
        for (let i = 0; i < string.length; i++) {
            let letraASCII = string.charCodeAt(i);
            let descifrar = ((letraASCII + 65 - offset) % 26) + 65;
            let descifrado = String.fromCharCode(descifrar);

            mensajeDescifrado += descifrado;

        }

        return mensajeDescifrado
    }


}





export default cipher;