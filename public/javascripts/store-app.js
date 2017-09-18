import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import typeAhead from './modules/typeAhead'; //brought in this.
import makeMap from './modules/map';
import ajaxHeart from './modules/heart.js';

autocomplete( $('#address'), $('#lat'), $('#lng') );

typeAhead( $('.search') );

makeMap( $('#map') );

const heartForms = $$('form.heart');
heartForms.on('submit', ajaxHeart);