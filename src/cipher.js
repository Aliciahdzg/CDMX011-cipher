const cipher = {
    encode: (offset, string) => {
        let cipherResult = "";
        let cipherLetter = "";
        if (offset === null && typeof string !== String) {
            throw new TypeError("valores inválidos");
        } else if (offset == 0 && string == 0) {
            throw new TypeError("valores inválidos");
        }
        /*ciclo for para iterar por cada letra y sacar el codigo ASCII donde i es igual al indice donde va a iniciar
        el metodo length devuelve el número de elementos de mi lista de caracteres de mensaje
        y lo hara mientras i sea menor que mensajeMayus.length, al finalizar la iteracion a i le suma 1 al indice para cambiar el varlor*/
        for (let i = 0; i < string.length; i++) {
            let valueASCII = string.charCodeAt(i); //variable que guarda el numero ASCII de cada letra que se esta iterando
            //let cifrar = ((letraASCII - 65 + offset) % 26) + 65; //Formula del cifrado cesar 

            if ((valueASCII >= 65) && (valueASCII < 91)) {
                cipherLetter = ((valueASCII - 65 + offset) % 26) + 65;
            } else if ((valueASCII >= 97) && (valueASCII < 123)) {
                cipherLetter = ((valueASCII - 97 + offset) % 26) + 97;
            } else {
                cipherResult += string[i];
                continue
            }
            /*else if (valueASCII == 32) {
                //resultadoCifrado += string[i];
                //continue
                cifrar = (valueASCII - 32) + 32;
            } else if (valueASCII == 33) {
                cifrar = (valueASCII - 33) + 33;
            } else if (valueASCII == 64) {
                cifrar = (valueASCII - 64) + 64;
            }*/
            //console.log(letraASCII, cifrar)
            let cipherMessage = String.fromCharCode(cipherLetter);


            cipherResult += cipherMessage;
        }

        return cipherResult;
    },

    decode: (offset, string) => {
        let mensajeDescifrado = "";
        let descifrar = ""
        if (offset === null && typeof string !== String) {
            throw new TypeError("valores inválidos");
        } else if (offset == 0 && string == 0) {
            throw new TypeError("valores inválidos");
        }
        for (let i = 0; i < string.length; i++) {
            let letraASCII = string.charCodeAt(i);
            //console.log(letraASCII)

            if ((letraASCII >= 65) && (letraASCII < 91)) {
                descifrar = ((letraASCII + 65 - offset) % 26) + 65;
            } else if ((letraASCII >= 97) && (letraASCII < 123)) {
                descifrar = ((letraASCII - 122 - parseInt(offset)) % 26) + 122;
            } else {
                mensajeDescifrado += string[i]
            }
            //console.log(letraASCII, descifrar)
            let descifrado = String.fromCharCode(descifrar);

            mensajeDescifrado += descifrado;
        }

        return mensajeDescifrado;
    }


}





export default cipher;