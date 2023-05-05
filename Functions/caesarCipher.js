let caesarCipher = function (str, shift) {
    if (shift < 0) {
        return caesarCipher(str, shift + 26);
    }

    let result = "";

    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        // Check if there are only letters and spaces (ignoring case("/i"))
        if (c.match(/[a-z\s]/i)) {
            let code = str.charCodeAt(i);

            
            // Check uppercase letters
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }

            // Check lowercase letters
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        result += c;
    }
    
    return result;
}

module.exports = caesarCipher;