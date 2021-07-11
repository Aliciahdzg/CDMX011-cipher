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
            } else if (valueASCII == 32) {
                //resultadoCifrado += string[i];
                //continue
                cipherLetter = (valueASCII - 32) + 32;
            } else if (valueASCII == 33) {
                cipherLetter = (valueASCII - 33) + 33;
            } else if (valueASCII == 64) {
                cipherLetter = (valueASCII - 64) + 64;
            }
            //console.log(letraASCII, cifrar)
            /*else {
                cipherResult += string[i];
                continue
            }*/
            let cipherMessage = String.fromCharCode(cipherLetter);


            cipherResult += cipherMessage;
        }

        return cipherResult;
    },

    decode: (offset, string) => {
        let decipherMessage = "";
        let descipher = ""
        if (offset === null && typeof string !== String) {
            throw new TypeError("valores inválidos");
        } else if (offset == 0 && string == 0) {
            throw new TypeError("valores inválidos");
        }
        for (let i = 0; i < string.length; i++) {
            let valueASCII = string.charCodeAt(i);
            //console.log(letraASCII)

            if ((valueASCII >= 65) && (valueASCII < 91)) {
                descipher = ((valueASCII + 65 - offset) % 26) + 65;
            } else if ((valueASCII >= 97) && (valueASCII < 123)) {
                descipher = ((valueASCII - 122 - parseInt(offset)) % 26) + 122;
            } else if (valueASCII == 32) {
                //resultadoCifrado += string[i];
                //continue
                descipher = (valueASCII - 32) + 32;
            } else if (valueASCII == 33) {
                descipher = (valueASCII - 33) + 33;
            } else if (valueASCII == 64) {
                descipher = (valueASCII - 64) + 64;
            }
            /*else {
                decipherMessage += string[i]
                continue
            }*/
            //console.log(letraASCII, descifrar)
            let descifrado = String.fromCharCode(descipher);

            decipherMessage += descifrado;
        }

        return decipherMessage;
    }


}





export default cipher;