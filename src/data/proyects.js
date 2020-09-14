import rutaz from '../assets/img/rutazApp.png'
import rutaz2 from '../assets/img/rutaz-app-2.jpg'
import rutaz3 from '../assets/img/rutaz-app-3.jpg'
import portafolio from '../assets/img/imagen.jpg'
import pedidos1 from '../assets/img/pedidosApp1.png';
import pedidos2 from '../assets/img/pedidosApp2.png';
import flydata from '../assets/img/flydata.png';
import flydatamobile from '../assets/img/flydatamobile.png';
import flydatadesk from '../assets/img/flydatadesk.png';
import cards from '../assets/img/cards.png';
import sisAdmin1 from '../assets/img/sisAdmin1.png';
import sisAdmin2 from '../assets/img/sisAdmin2.png';

export const Proyects = [
    {
        id: '1253',
        name: 'Rutaz App',
        mainImage: rutaz,
        images: [rutaz, rutaz2, rutaz3],
        tecs: 'Ionic / NodeJs, Mongo / Socket.io',
        desc: 'Rutaz App es una aplicación móvil que muestra las rutas de transporte público y la ubicación en tiempo real de los camiones. Fue un proyecto que desarrollé realizando mi estadía en una empresa de Tepic, Nayarit.',
        urlGit: null,
        urlLive: null
    },
    {
        id: '4506',
        name: 'Portafolio',
        mainImage: portafolio,
        images: [portafolio],
        tecs: 'React',
        desc: 'Portafolio es una landing page para poder mostrar mi trabajo.',
        urlGit: 'https://github.com/MarianoHuitron/portafolio/',
        urlLive: 'https://marianohuitron.com/'
    },
    {
        id: '7896',
        name: 'San José Pan',
        mainImage: pedidos1,
        images: [pedidos1, pedidos2],
        tecs: 'Ionic / NodeJs / Mongo / Stripe ',
        desc: 'Una aplicación móvil tipo e-commerce para una panadería. Permite realizar pedidos y hacer pagos online mediante Stripe.',
        urlGit: 'https://github.com/MarianoHuitron/pedidos-app-front/',
        urlLive: null
    },
    {
        id: '1011',
        name: 'Fly Data Storage',
        mainImage: flydata,
        images: [flydata, flydatamobile, flydatadesk],
        tecs: 'HTML5 / CSS3',
        desc: 'Se trata de un reto de desarrollo web que tomé de la página Frontend Mentor para poner en práctica mis habilidades.',
        urlGit: 'https://github.com/MarianoHuitron/fly-data-storage-challenge-mentor',
        urlLive: 'https://fly-data-storage-challenge-mentor.vercel.app/'
    },
    {
        id: '1572',
        name: 'Four Card Feature',
        mainImage: cards,
        images: [cards],
        tecs: 'HTML5 / CSS3',
        desc: 'Se trata de un reto de desarrollo web que tomé de la página Frontend Mentor para poner en práctica mis habilidades.',
        urlGit: 'https://github.com/MarianoHuitron/four-card-feature',
        urlLive: 'https://four-card-feature-lovat-beta.vercel.app/'
    },
    {
        id: '4544',
        name: 'Sistema Administración de pedidos',
        mainImage: sisAdmin1,
        images: [sisAdmin1, sisAdmin2],
        tecs: 'PHP / MVC / MySQL / AJAX',
        desc: 'Sistema de administración de pedidos realizado como proyecto escolar.',
        urlGit:  'https://github.com/MarianoHuitron/sistema-pedidos-pan',
        urlLive: null
    }
]