import '@babel/polyfill';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { swiperInit } from "./js/swiper";
import { push } from './js/brands.js';
import { pushDevice } from './js/device.js';
import { slideMenuOpen } from './js/menu.js';
import { slideMenuClose } from './js/menu.js';
import { handleResize } from './js/menu.js';
import { callDialogOpen } from './js/call.js';
import { callDialogClose } from './js/call.js';
import { feedbackDialogOpen } from './js/feedback.js';
import { feedbackDialogClose } from './js/feedback.js';
import './scss/style.css';
import './index.html';


swiperInit();
push();
pushDevice();
slideMenuOpen();
slideMenuClose();
handleResize();
callDialogOpen();
callDialogClose();
feedbackDialogOpen();
feedbackDialogClose();









