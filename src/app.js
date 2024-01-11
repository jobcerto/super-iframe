import axios from 'axios';
import queryString from 'query-string';

import Cookies from 'js-cookie';
import collect from 'collect.js';

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


    initializeHeader();


}

const initializeHeader = () => {
    let cassinoTipsHeader = document.createElement('div');

    cassinoTipsHeader.innerHTML = `
    <div class="tw-container tw-mx-auto tw-flex tw-items-center tw-justify-between">
        <nav class="tw-inline-flex tw-items-center tw-gap-x-4 md:tw-gap-x-8">
            <a href="#">
                <span class="far fa-bell text-2xl"></span>
            </a>
            <span class="tw-bg-gray-800 tw-border tw-border-2 tw-border-green-700 tw-text-green-500 tw-rounded-md tw-px-1.5 md:tw-px-3 tw-py-1.5 tw-text-xs md:tw-text-sm">Sincronizado</span>

            <a href="#" class="tw-inline-flex tw-rounded-full tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-bg-gray-800">
                <i class="far fa-user"></i>
            </a>
        </nav>
    </div>
    `;

// Add the CSS class to the new div
    cassinoTipsHeader.className = 'tw-bg-green-950 tw-shadow-lg tw-border-b-4 tw-border-green-900 tw-h-24 tw-px-4 lg:tw-px-0 tw-py-4 tw-flex tw-items-center tw-sticky tw-top-0 tw-z-50 tw-relative';

// Find the div with ID 'fe_header'
    let header = document.getElementById('fe_header');

    insertNodeAfter(cassinoTipsHeader, header);
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

window.cassinoTips = app();