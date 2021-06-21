import "bootstrap";

// app/javascript/packs/application.js
import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!

import { initMapbox, updateMap } from '../plugins/init_mapbox';

import {} from "../plugins/glasses.js";
import {} from "../plugins/onboarding_modal.js";

import {} from "../plugins/button_hover.js";
const map = initMapbox();
updateMap(map);
import {} from "../plugins/updatecss.js";



