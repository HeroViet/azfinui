import HeaderOnly from '~/layouts/HeaderOnly';

const { default: azfinui } = require('~/pages/Home');
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
    { path: '/', component: azfinui },
    { path: '/azfinui', component: azfinui },
    { path: '/azfinui/profile', component: Profile, layout: HeaderOnly },
    { path: '/azfinui/search', component: Search },
    { path: '/azfinui/contact', component: Contact },
    { path: '/azfinui/history', component: History },
    { path: '/azfinui/vision', component: Vision },
    { path: '/azfinui/diagram', component: Diagram },
    { path: '/azfinui/azfinnews', component: AzfinNews },
    { path: '/azfinui/newsday', component: NewsDay },
    { path: '/azfinui/information', component: Information },
    { path: '/azfinui/basics', component: Basics },
    { path: '/azfinui/khoidang', component: khoidang },
    { path: '/azfinui/phiho', component: phiho },
    { path: '/azfinui/haiyenbui', component: haiyenbui },
    { path: '/azfinui/quocdatdinh', component: quocdatdinh },
    { path: '/azfinui/azfineditor', component: azfineditor },
    { path: '/azfinui/azfinnews', component: azfinnews },
    { path: '/azfinui/hagiang', component: hagiang },
    { path: '/azfinui/trinhtuanminh', component: trinhtuanminh },
    { path: '/azfinui/tuanhoang3p', component: tuanhoang3p },
    { path: '/azfinui/mainguyen', component: mainguyen },
    { path: '/azfinui/generalPost', component: generalPost },
    { path: '/azfinui/represent', component: Represent },
    // { path: '/azfinui/generalpo', component: generalPost },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
