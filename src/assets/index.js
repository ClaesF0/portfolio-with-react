// src/assets/index.js

import {
  Claes_Folkestad_English,
  Claes_Folkestad_Norsk,
  CSS3_logo_and_wordmark,
} from "../assets";

const images = {};

function importAll(r) {
  r.keys().forEach((key) => (images[key] = r(key)));
}

importAll(require.context(".", false, /\.(png|jpe?g|svg|pdf)$/));

export default images;
