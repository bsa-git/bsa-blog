class TextCoderLite {
    constructor(encoding) {// etc. encoding='utf-8'
        const _encoding = encoding;
    }

    _utf8ToBytes(string, units) {
        units = units || Infinity
        let codePoint
        let length = string.length
        let leadSurrogate = null
        let bytes = []
        let i = 0

        for (; i < length; i++) {
            codePoint = string.charCodeAt(i)

            // is surrogate component
            if (codePoint > 0xD7FF && codePoint < 0xE000) {
                // last char was a lead
                if (leadSurrogate) {
                    // 2 leads in a row
                    if (codePoint < 0xDC00) {
                        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                        leadSurrogate = codePoint
                        continue
                    } else {
                        // valid surrogate pair
                        codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
                        leadSurrogate = null
                    }
                } else {
                    // no lead yet

                    if (codePoint > 0xDBFF) {
                        // unexpected trail
                        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                        continue
                    } else if (i + 1 === length) {
                        // unpaired lead
                        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                        continue
                    } else {
                        // valid lead
                        leadSurrogate = codePoint
                        continue
                    }
                }
            } else if (leadSurrogate) {
                // valid bmp char, but last char was a lead
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                leadSurrogate = null
            }

            // encode utf8
            if (codePoint < 0x80) {
                if ((units -= 1) < 0) break
                bytes.push(codePoint)
            } else if (codePoint < 0x800) {
                if ((units -= 2) < 0) break
                bytes.push(
                    codePoint >> 0x6 | 0xC0,
                    codePoint & 0x3F | 0x80
                )
            } else if (codePoint < 0x10000) {
                if ((units -= 3) < 0) break
                bytes.push(
                    codePoint >> 0xC | 0xE0,
                    codePoint >> 0x6 & 0x3F | 0x80,
                    codePoint & 0x3F | 0x80
                )
            } else if (codePoint < 0x200000) {
                if ((units -= 4) < 0) break
                bytes.push(
                    codePoint >> 0x12 | 0xF0,
                    codePoint >> 0xC & 0x3F | 0x80,
                    codePoint >> 0x6 & 0x3F | 0x80,
                    codePoint & 0x3F | 0x80
                )
            } else {
                throw new Error('Invalid code point')
            }
        }

        return bytes
    }

    _utf8Slice(buf, start, end) {
        let res = ''
        let tmp = ''
        end = Math.min(buf.length, end || Infinity)
        start = start || 0;

        for (let i = start; i < end; i++) {
            if (buf[i] <= 0x7F) {
                res += this._decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
                tmp = ''
            } else {
                tmp += '%' + buf[i].toString(16)
            }
        }

        return res + this._decodeUtf8Char(tmp)
    }

    _decodeUtf8Char(str) {
        try {
            return decodeURIComponent(str)
        } catch (err) {
            return String.fromCharCode(0xFFFD) // UTF 8 invalid char
        }
    }

    /**
     * Encode utf-8 to bytes
     * @param str
     * @return {Array}
     */
    encodeUtf8ToBytes(str) {
        let result;
        if ('undefined' === typeof Uint8Array) {
            result = this._utf8ToBytes(str);
        } else {
            result = new Uint8Array(this._utf8ToBytes(str));
        }
        return result;
    }

    /**
     * Decode bytes to utf-8
     * @param bytes (Array)
     * @return {String}
     */
    decodeBytesToUtf8(bytes) {
        return this._utf8Slice(bytes, 0, bytes.length);
    }

    /**
     * Escape the whole string (with UTF-8, see encodeURIComponent) and then encode it
     * etc.
     * b64EncodeUnicode('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
     * b64EncodeUnicode('\n'); // "Cg=="
     *
     * @param str
     * @return {string}
     */
    b64EncodeUnicode(str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
    }

    /**
     * Escape the whole string (with UTF-8, see encodeURIComponent) and then encode it
     *
     * @param str
     * @return {string}
     */
    b64UrlEncodeUnicode(str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        const b64Encoded = btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
        // Replace for URL
        return b64Encoded.replace(/\+/g, '-').replace(/\//g, '_')
    }

    /**
     * To decode the Base64-encoded value back into a String
     * etc.
     * b64DecodeUnicode('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
     * b64DecodeUnicode('Cg=='); // "\n"
     *
     * @param str
     * @return {string}
     */
    b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    /**
     *  Base64 from encode UTF-8
     *  Rewrite the DOMs atob() and btoa() using JavaScript's TypedArrays and UTF-8
     *
     * @param str
     * @return {*}
     */
    b64EncodeUTF8(str) {
        const base64js = require('base64-js')
        const byteArray = this.encodeUtf8ToBytes(str);
        const b64Encoded = base64js.fromByteArray(byteArray);
        return b64Encoded
    }

    /**
     *  Base64 for URL from encode UTF-8
     *  Rewrite the DOMs atob() and btoa() using JavaScript's TypedArrays and UTF-8
     *
     * @param str
     * @return {*}
     */
    b64UrlEncodeUTF8(str) {
        const base64js = require('base64-js')
        const byteArray = this.encodeUtf8ToBytes(str);
        const b64Encoded = base64js.fromByteArray(byteArray);
        // Replace for URL
        return b64Encoded.replace(/\+/g, '-').replace(/\//g, '_')
    }

    /**
     * Transliteration Rus to Latin for URL
     * @param text
     */
    static toTranslitForURL(text) {
        return text.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
            function (all, ch, space, words, i) {
                if (space || words) {
                    return space ? '-' : '';
                }
                var code = ch.charCodeAt(0),
                    index = code == 1025 || code == 1105 ? 0 :
                        code > 1071 ? code - 1071 : code - 1039,
                    t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                        'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                        'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                        'shch', '', 'y', '', 'e', 'yu', 'ya'
                    ];
                return t[index];
            });
    };
}

export default TextCoderLite