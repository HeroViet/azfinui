import HeaderOnly from '~/layouts/HeaderOnly';

const { default: Home } = require('~/pages/Home');
const { default: Profile } = require('~/pages/Profile');
const { default: Search } = require('~/pages/Search');
const { default: Contact } = require('~/pages/Contact');
const { default: History } = require('~/pages/AboutUs/History');
const { default: Vision } = require('~/pages/AboutUs/Vision');
const { default: Diagram } = require('~/pages/AboutUs/Diagram');
const { default: AzfinNews } = require('~/pages/AboutUs/AzfinNews');
const { default: NewsDay } = require('~/pages/KnowLedge/NewsDay');
const { default: Information } = require('~/pages/KnowLedge/Information');
const { default: Basics } = require('~/pages/KnowLedge/Basics');
const { default: khoidang } = require('~/pages/Author/khoidang');
const { default: phiho } = require('~/pages/Author/phiho');
const { default: haiyenbui } = require('~/pages/Author/haiyenbui');
const { default: quocdatdinh } = require('~/pages/Author/quocdatdinh');
const { default: azfineditor } = require('~/pages/Author/azfineditor');
const { default: azfinnews } = require('~/pages/Author/azfinnews');
const { default: hagiang } = require('~/pages/Author/hagiang');
const { default: trinhtuanminh } = require('~/pages/Author/trinhtuanminh');
const { default: tuanhoang3p } = require('~/pages/Author/tuanhoang3p');
const { default: mainguyen } = require('~/pages/Author/mainguyen');
const { default: generalPost } = require('~/pages/generalPost');
const { default: Represent } = require('~/pages/Represent');

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/@profile', component: Profile, layout: HeaderOnly },
    { path: '/@search', component: Search },
    { path: '/@contact', component: Contact },
    { path: '/@history', component: History },
    { path: '/@vision', component: Vision },
    { path: '/@diagram', component: Diagram },
    { path: '/@azfinnews', component: AzfinNews },
    { path: '/@newsday', component: NewsDay },
    { path: '/@information', component: Information },
    { path: '/@basics', component: Basics },
    { path: '/@khoidang', component: khoidang },
    { path: '/@phiho', component: phiho },
    { path: '/@haiyenbui', component: haiyenbui },
    { path: '/@quocdatdinh', component: quocdatdinh },
    { path: '/@azfineditor', component: azfineditor },
    { path: '/@azfinnews', component: azfinnews },
    { path: '/@hagiang', component: hagiang },
    { path: '/@trinhtuanminh', component: trinhtuanminh },
    { path: '/@tuanhoang3p', component: tuanhoang3p },
    { path: '/@mainguyen', component: mainguyen },
    { path: '/@generalPost', component: generalPost },
    { path: '/@represent', component: Represent },
    // { path: '/@generalpo', component: generalPost },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
