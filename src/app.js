import axios from 'axios';
import queryString from 'query-string';

import Cookies from 'js-cookie';
import collect from 'collect.js';
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

const app = () => {

    const parsed = queryString.parse(location.search);

    const attributes = collect(parsed);


    if (!attributes.has('super-iframe')) {
        return;
    }

    // if (!cassinoTipsCookieExists()) {
    //     return;
    // }
    //
    // const cassinoTipsCookie = getCassinoTipsCookie();
    //
    // console.log(cassinoTipsCookie);


    initializeIframe();


}

const initializeIframe = () => {
    let iframe = document.createElement('iframe');

    iframe.src = "https://greenfortuna.io/landpages/play";
    iframe.style = "width: 100%;";
    iframe.height = "275";


    let header = document.getElementById('fe_web_container');

    insertNodeAfter(iframe, header);
}

const insertNodeAfter = (newNode, referenceNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
};


const cassinoTipsCookieExists = () => {
    const cassinoTipsCookie = Cookies.get('cassinotips');

    return typeof cassinoTipsCookie !== 'undefined';
}
const getCassinoTipsCookie = () => {
    const cassinoTipsCookie = Cookies.get('cassinotips');

    return JSON.parse(cassinoTipsCookie);
};

window.addEventListener('DOMContentLoaded', app);