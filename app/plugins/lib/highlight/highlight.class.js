import hljs from 'highlight.js'
import 'highlight.js/styles/xcode.css'

class Highlight {
    constructor(options) {
        const _options = options ? options : {};
        hljs.configure(_options);
    }

    static initBlock(className) {
        const _className = className ? className : 'highlight';
        const els = document.getElementsByClassName(_className);
        _.forEach(els, function (el) {
            hljs.highlightBlock(el);
        });
    }

    static init() {
        hljs.initHighlighting();
    }
}


export default Highlight
