/*import { Car } from '../images/svg-1.svg'*/
// import PiggyBank from '../images/svg-2.svg'
// import Paper from '../images/svg-4.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    /*description: 'Get access to our exclusive app that allows ou to send unlimited transactions without getting charged any fees',*/
    buttonLabel: 'Get started',
    imgStart: false,
    img: require ('../images/svg-1.svg'),
    alt: 'Car',
    dark: true,
    primary: true,
    dartText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: require('../images/svg-2.svg'),  //2
    alt: 'PiggyBank',
    dark: false,  //верно
    primary: false, //верно
    dartText: true  //верно
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our team',
    headline: 'Creating an account is extremely easy',
    description: 'Get everything set up and ready in under 10 minutes. All you need is add your information and you\'re ready to go',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: require('../images/svg-4.svg'),
    alt: 'Paper',
    dark: false,  //верно
    primary: false, //верно
    dartText: true //верно
};