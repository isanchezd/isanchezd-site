import '@fortawesome/fontawesome-free/js/all';
import { dropDown as dropdown, collapse as collapse } from 'bootstrap';



import { $DOMContendLoadedHandler } from './handlers/dom-contend-loaded.handler';


const boot = () => {
    window.addEventListener('DOMContentLoaded', $DOMContendLoadedHandler);
}

boot();
