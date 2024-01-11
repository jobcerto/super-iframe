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


    initializeHeader();


}

const initializeHeader = () => {
    let cassinoTipsHeader = document.createElement('div');

    cassinoTipsHeader.innerHTML = `<header class="tw-antialiased tw-text-base tw-text-green-400 tw-font-sans tw-bg-green-950 tw-shadow-lg tw-border-b-4 tw-border-green-900 tw-h-24 tw-px-4 lg:tw-px-0 tw-py-4 tw-flex tw-items-center tw-sticky tw-top-0 tw-z-50 tw-relative">

    <div class="tw-container tw-mx-auto tw-flex tw-items-center tw-justify-between">
        <a href="#">
            <img src="https://cassinotips.com.br/images/greenfortuna.png" alt="Cassino Tips" class="tw-h-10 sm:tw-h-12 md:tw-h-16">
        </a>

        <nav class="tw-inline-flex tw-items-center tw-gap-x-4 md:tw-gap-x-8">
            <a href="#">
                <span class="far fa-bell tw-text-2xl"></span>
            </a>
            <span class="tw-bg-gray-800 tw-border tw-border-2 tw-border-green-700 tw-text-green-500 tw-rounded-md tw-px-1.5 md:tw-px-3 tw-py-1.5 tw-text-xs md:tw-text-sm">Sincronizado</span>

            <a href="#" class="tw-inline-flex tw-rounded-full tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-bg-gray-800">
                <i class="far fa-user"></i>
            </a>
        </nav>
    </div>

    <nav>

</nav>
</header>
<section  x-data="{
            secondsBeforeNextSignal:0,
            seconds(seconds) {
               this.secondsBeforeNextSignal = seconds;
            },
            countdown() {
                if (this.secondsBeforeNextSignal > 0) {
                    this.secondsBeforeNextSignal--;
                }
            }
        }" x-init="setInterval(() => countdown(), 1000)" class="tw-h-full tw-py-4">
    <nav class="tw-font-sans tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 tw-w-full" x-show.transition="secondsBeforeNextSignal !== 0" style="display: none;">

       <div class="tw-bg-green-900 tw-rounded-md tw-px-4 tw-py-6 tw-text-xl tw-font-bold tw-text-green-200">
            🕑 Válido até: 11:33
        </div>
            <div class="tw-bg-green-900 tw-rounded-md tw-px-4 tw-py-6 tw-text-xl tw-font-bold tw-text-green-200">
            👉 7x Normal
        </div>
            <div class="tw-bg-green-900 tw-rounded-md tw-px-4 tw-py-6 tw-text-xl tw-font-bold tw-text-green-200">
            ⚡ 9x Turbo
        </div>
            <div class="tw-bg-green-900 tw-rounded-md tw-px-4 tw-py-6 tw-text-xl tw-font-bold tw-text-green-200">
            🎲 Nº de Jogadas: 12
        </div>
  
</nav>
    <div class="tw-w-full tw-flex tw-items-center tw-justify-center tw-mt-4">
    <button x-show="secondsBeforeNextSignal !== 0" type="button" class="tw-w-full tw-bg-green-950 tw-text-center tw-text-green-500 tw-rounded-md tw-p-3 tw-text-xl tw-font-medium" disabled="" style="display: none;">
        <i class="fas fa-spin fa-spinner"></i> Aguarde
        <span x-text="secondsBeforeNextSignal">0</span> para gerar novo sinal
    </button>

    <button @click="seconds(179)" x-show="secondsBeforeNextSignal === 0" type="button" class="tw-w-full tw-bg-green-700 tw-text-center tw-text-white tw-rounded-md tw-p-3 tw-text-xl tw-font-bold">
        <i class="far fa-check-circle"></i> GERAR SINAL
    </button>
</div>

    
</section>


`;

    let header = document.getElementById('fe_web_container');

    header.className = 'cassinotips';

    cassinoTipsHeader.className = 'tw-bg-green-975';

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

window.addEventListener('DOMContentLoaded', app);