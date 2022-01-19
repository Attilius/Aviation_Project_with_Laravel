import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TravelInsurance from './pages/TravelInsurance';
import LuggageInsurance from './pages/LuggageInsurance';
import PremiumComfort from './pages/PremiumComfort';
import PrivateJetRent from './pages/PrivateJetRent';
import GroupDiscount from './pages/GroupDiscount';
import BookingCancellation from './pages/BookingCancellation';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import TravelGuide from './pages/TravelGuide';
import NewYork from './pages/cities/NewYork';
import PageNotFound from './pages/PageNotFound';

export default
    [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/about',
            component: About,
            name: 'About'
        },
        {
            path: '/services',
            component: Services,
            name: 'Services'
        },
        {
            path: '/services/travel-insurance',
            component: TravelInsurance,
            name: 'TravelInsurance'
        },
        {
            path: '/services/luggage-insurance',
            component: LuggageInsurance,
            name: 'LuggageInsurance'
        },
        {
            path: '/services/premium-comfort',
            component: PremiumComfort,
            name: 'PremiumComfort'
        },
        {
            path: '/services/private-jet-rent',
            component: PrivateJetRent,
            name: 'PrivateJetRent'
        },
        {
            path: '/services/group-discount',
            component: GroupDiscount,
            name: 'GroupDiscount'
        },
        {
            path: '/services/booking-cancellation',
            component: BookingCancellation,
            name: 'BookingCancellation'
        },
        {
            path: '/contact',
            component: Contact,
            name: 'Contact'
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/register',
            component: Register,
            name: 'Register'
        },
        {
            path: '/travel-guide',
            component: TravelGuide,
            name: 'TravelGuide'
        },
        {
            path: '/travel-guide/new-york',
            component: NewYork,
            name: 'NewYork'
        },
        { 
            path: '*',
            component: PageNotFound, 
            name: 'PageNotFound' 
        }
    ]