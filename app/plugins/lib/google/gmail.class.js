 import  TextCoderLite  from '~/plugins/lib/google/textCoderLite.class.js'

class GMail {
    constructor(options) {
        const _options = options ? options : {};
    }

    static b64EncodeUnicode(str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
    }

    static b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    static b64EncodeUTF8(str) {
        const base64js = require('base64-js')
        const encoded = new TextCoderLite('utf-8').encode(str);
        const b64Encoded = base64js.fromByteArray(encoded);
        return b64Encoded;
    }
}


export default GMail
