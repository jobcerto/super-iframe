import axios from 'axios';
import queryString from 'query-string';

import Cookies from 'js-cookie';
import collect from 'collect.js';
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

const watchForOptions = (callback) => {
    const intervalId = setInterval(() => {
        const attributes = queryString.parse(window.location.search);

        if (attributes.token !== undefined) {
            clearInterval(intervalId);
            return callback(true, attributes.token);
        }

        return callback(false, null);
    }, 1000);
};

const store = JSON.parse(localStorage.getItem('cassinotips'));

const app = () => {

    if (store !== null) {
        return initializeIframe();
    }
    watchForOptions((isFound, token) => isFound ? setUp(token) : null);
};


const fetchLandpageOptions = async (token) => {

    const {data} = await axios.get(`https://igames.job/api/auth/?api_token=${token}`);

    localStorage.setItem('cassinotips', JSON.stringify(data));


    return data;

}

const setUp = (token) => {

    (async () => {

        const options = await fetchLandpageOptions(token)

        await initializeIframe(options.games);

    })();
}

const initializeIframe = (games = null) => {
    const gamesCollection = collect(games ?? store.games);

    console.log(gamesCollection)


    if (gamesCollection.doesntContain('url', window.location.href)) {
        return;
    }

    const currentGame = gamesCollection.firstWhere('url', window.location.href);

    return createIframe(currentGame);
};


const createIframe = (game) => {

    let iframe = document.createElement('iframe');

    iframe.id = "cassinotips-iframe";

    iframe.src = game.play_url;

    iframe.style = "width: 100%; border:0; margin:0; padding:0; overflow:hidden;";
    iframe.height = "275";


    let body = document.getElementsByTagName('body')[0];

    return insertNodeAfter(iframe, body);
};

const insertNodeAfter = (newNode, referenceNode) => {
    return referenceNode.insertBefore(newNode, referenceNode.firstChild);
};


document.addEventListener('DOMContentLoaded', () => {
    return app();
});
