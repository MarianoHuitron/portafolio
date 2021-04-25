import rutaz from '../assets/img/rutazApp.png'
import rutaz2 from '../assets/img/rutaz-app-2.png'
import rutaz3 from '../assets/img/rutaz-app-3.png'
import portafolio from '../assets/img/imagen.png'
import pedidos1 from '../assets/img/pedidosApp1.png';
import pedidos2 from '../assets/img/pedidosApp2.png';
import flydata from '../assets/img/flydata.png';
import flydatamobile from '../assets/img/flydatamobile.png';
import flydatadesk from '../assets/img/flydatadesk.png';
import cards from '../assets/img/cards.png';
import sisAdmin1 from '../assets/img/sisAdmin1.png';
import sisAdmin2 from '../assets/img/sisAdmin2.png';
import imagesApp1 from '../assets/img/imagesApp1.png';
import imagesApp2 from '../assets/img/imagesApp2.png';
import imagesApp3 from '../assets/img/imagesApp3.png';
import todoApp from '../assets/img/todoApp.png';
import recipes from '../assets/img/recipes1.png';
import sanJose from '../assets/img/sanjose.png';

export const Proyects = [
    {
        id: '1111',
        name: 'Recetas',
        mainImage: recipes,
        images: [recipes],
        tecs: 'React',
        desc: 'Aplicación web de recetas de comida consumiendo la api TheMealDB.',
        urlGit: 'https://github.com/MarianoHuitron/recipes-app',
        urlLive: 'https://keen-goldwasser-5e35cd.netlify.app/'
    },
    {
        id: '1112',
        name: 'Rutaz App',
        mainImage: rutaz,
        images: [rutaz, rutaz2, rutaz3],
        tecs: 'Ionic / NodeJs, Mongo / Socket.io',
        desc: 'Rutaz App es una aplicación móvil que muestra las rutas de transporte público y la ubicación en tiempo real de los camiones. Fue un proyecto que desarrollé realizando mi estadía en una empresa de Tepic, Nayarit.',
        urlGit: null,
        urlLive: null
    },
    {
        id: '1113',
        name: 'Portafolio',
        mainImage: portafolio,
        images: [portafolio],
        tecs: 'React',
        desc: 'Portafolio es una landing page para poder mostrar mi trabajo.',
        urlGit: 'https://github.com/MarianoHuitron/portafolio/',
        urlLive: 'https://marianohuitron.com/'
    },
    {
        id: '4507',
        name: 'Images App',
        mainImage: imagesApp1,
        images: [imagesApp1, imagesApp2, imagesApp3],
        tecs: 'React / Redux / NodeJs / MongoDB',
        desc: 'Images app es una aplicación de imagenes que realicé, permite crearse una cuenta y subir nuesteras imagenes para tenerlas guardadas.',
        urlGit: 'https://github.com/MarianoHuitron/images-app-mern-backend/',
        urlLive: 'https://react-unsplash-images.herokuapp.com/'
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
        id: '4025',
        name: 'TODO App',
        mainImage: todoApp,
        images: [todoApp],
        tecs: 'React',
        desc: 'Aplicación de tareas',
        urlGit: 'https://github.com/MarianoHuitron/todo-app-react',
        urlLive: 'https://peaceful-kare-dec74b.netlify.app/'
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
    },
    {
        id: '4521',
        name: 'Web Panadería San José',
        mainImage: sanJose,
        images: [sanJose],
        tecs: 'HTML / CSS / PHP',
        desc: 'Página web para panadería San José',
      //  urlGit:  'https://github.com/MarianoHuitron/sistema-pedidos-pan',
        urlLive: 'https://panaderia-web.herokuapp.com/'
    }
]