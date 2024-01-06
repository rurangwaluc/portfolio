//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiCode,
  FiSearch,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiPhone,
  FiLayout,
  FiTrendingUp,
  FiCloud,
  FiHome,
  FiBook,
} from 'react-icons/fi';

import CV from './assets/Rurangwa-CV.pdf';


// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
// import Project0 from './assets/img/projects/explore-promo.png';
import Project1 from './assets/img/projects/Flight-Transaction-Confirmation.png';
import Project2 from './assets/img/projects/Jewellery-Promotion.png';
import Project3 from './assets/img/projects/Weekend-Discount-Promotion.png';
import Project4 from './assets/img/projects/Order-Transaction-Notification.png';
import Project5 from './assets/img/projects/webnar-promo.png';
import Project6 from './assets/img/projects/Still-Shopping-Transactional.png';
import Project7 from './assets/img/projects/Subscription-Newsletter.png';
import Project8 from './assets/img/projects/Women-Equality-Day-Newsletter.png';
import Project9 from './assets/img/projects/Trip-Blog-Newsletter.png';
import Project10 from './assets/img/projects/Business-Training-Class-Landingpage.png';
import Project11 from './assets/img/projects/Giveaway-landingpage.png';
import Project12 from './assets/img/projects/Makeup-landingpage.png';
import Project13 from './assets/img/projects/ecom.PNG';
import Project14 from './assets/img/projects/MV.PNG';
import Project15 from './assets/img/projects/land.PNG'
import Project16 from './assets/img/projects/Port.PNG';
// navigation
export const navigation = [
 
  {
    name: 'about me',
    href: 'about',
  },
  {
    name: 'Experience',
    href: 'experience',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  // {
  //   name: 'what i do',
  //   href: 'services',
  // },
 
  {
    name: 'contact me',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];


// projectsNav
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Email',
  },
  {
    name: 'Newsletter',
  },
  {
    name: 'Landing Page',
  },
  {
    name: 'React',
  },

];


// projects
export const projectsData = [

  {
    id: '13',
    image: Project13,
    name: <a href="https://cynthia-impano774.netlify.app" target="_blank">Car Shop Website </a>,
    category: 'React',
    url: "https://cynthia-impano774.netlify.app",
  },
  
  {
    id: '15',
    image: Project15,
    name: <a href="https://delicate-dasik-48814d.netlify.app/" target="_blank">React Landing-Page Website</a>,
    category: 'React',
    url: "https://delicate-dasik-48814d.netlify.app/",
  },
  {
    id: '16',
    image: Project16,
    name: <a href="https://cute-tulumba-306d30.netlify.app/" target="_blank">React Portfolio Website</a>,
    category: 'React',
    url: "https://cute-tulumba-306d30.netlify.app/",
  },
  {
    id: '1',
    image: Project1,
    name: <a href="dainty-nasturtium-03ada1.netlify.app" target="_blank">Flight-Transaction-Confirmation</a>,
    category: 'Email',
    url: "dainty-nasturtium-03ada1.netlify.app", 
  },
  {
    id: '2',
    image: Project2,
    name: <a href="https://jewellery-promo.netlify.app" target="_blank">Jewellery-Promotion</a>,
    category: 'Email',
    url:"https://jewellery-promo.netlify.app",
  },
  {
    id: '3',
    image: Project3,
    name: <a href="https://iridescent-twilight-3d56e4.netlify.app/" target="_blank">Weekend-Discount-Promotion</a> ,
    category: 'Email',
    url:"https://iridescent-twilight-3d56e4.netlify.app/",
  },
  {
    id: '4',
    image: Project4,
    name: <a href="https://dynamic-jalebi-c5e1e5.netlify.app/" target="_blank">Order-Transaction-Notification</a>,
    category: 'Email',
    url: "https://dynamic-jalebi-c5e1e5.netlify.app/",
  },
  {
    id: '5',
    image: Project5,
    name: <a href="https://stately-platypus-a11343.netlify.app/" target="_blank">Webinar-promo</a> ,
    category: 'Email',
    url:"https://stately-platypus-a11343.netlify.app/",
  },
  {
    id: '6',
    image: Project6,
    name: <a href="https://grand-druid-9f1ec8.netlify.app/" target="_blank">Still-Shopping-Transactional</a> ,
    category: 'Email',
    url: "https://grand-druid-9f1ec8.netlify.app/",
  },
 
  {
    id: '7',
    image: Project7,
    name: <a href="https://effortless-cat-070561.netlify.app/" target="_blank">Subscription-Newsletter</a> ,
    category: 'Newsletter',
    url:"https://effortless-cat-070561.netlify.app/",
  },
  {
    id: '8',
    image: Project8,
    name: <a href="https://jazzy-gnome-394f15.netlify.app/" target="_blank">Women-Equality-Day-Newsletter</a>,
    category: 'Newsletter',
    url: "https://jazzy-gnome-394f15.netlify.app/",
  },
  {
    id: '9',
    image: Project9,
    name: <a href="https://darling-toffee-451ee1.netlify.app/" target="_blank">Trip-Blog-Newsletter</a> ,
    category: 'Newsletter',
    url: "https://darling-toffee-451ee1.netlify.app/",
  },
 
  {
    id: '10',
    image: Project12,
    name: <a href="https://guileless-sunburst-f34003.netlify.app/" target="_blank">Makeup-landingpage</a>,
    category: 'Landing Page',
    url: "https://guileless-sunburst-f34003.netlify.app/",
  },
  
  {
    id: '11',
    image: Project11,
    name: <a href="https://sprightly-treacle-f31845.netlify.app/" target="_blank">Giveaway-landingpage</a>,
    category: 'Landing Page',
    url: "https://sprightly-treacle-f31845.netlify.app/",
  },
  {
    id: '12',
    image: Project10,
    name: <a href="https://dancing-boba-210970.netlify.app/" target="_blank">Business-Training-Landingpage</a>,
    category: 'Landing Page',
    url: "https://dancing-boba-210970.netlify.app/",
  },
 
];



// experiences
export const experiences = [

 
  {
    icon:  <i class="fas fa-code"></i>,
    time: 'March 2022 – Present',
    title: 'Email Developer',
    company: 'FREELANCE',
    description:
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript and WordPress.',
      list0:'Developing HTML emails, newsletters and landing pages using HTML, CSS, and media queries.', 
      list1:'Performing cross-client email testing using tools like Litmus, Email on Acid, and real devices.', 
     list2:'Constantly researching best practices and implements them in campaigns to level up email performance', 
     list3:'Developing landing pages.', 
 
    },
 
  {
    icon:  <i class="fas fa-code"></i>,
    time: 'Dec 2020 – Feb 2022 ',
    title: 'Front-end Developer',
    company: 'Gotreluc',
    description:
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript and WordPress.',
      list0:'Training and support to the user', 
      list1:'Developing websites with HTML, CSS, JavaScript', 
     list2:'Deploying and maintaining websites with Wordpress and Elementor', 
     list3:'Following the best practices in implementing SEO including optimisation of images and improving the speed of sites ', 
 
    },
  {
    icon:  <i class="fas fa-code"></i>,
    time: 'Sept 2019 - June 2020',
    title: 'Front-end Developer Intern',
    company:'Kigali Appline LTD',
    description:
      'Wrote modern, performant, maintainable code for a diverse array of client and internal projects, Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      list0:'Training and support to the user', 
      list1:'Developing websites with HTML, CSS, JavaScript', 
      list2:'Management and maintenance of domains and hosting', 
     list3:'Following the best practices in implementing SEO including optimisation of images and improving the speed of sites ', 
 
    },
];

// services
export const services = [

  {
    icon: <FiCode />,
    name: 'HTML Email Development',
    description:
      'Professional HTML emails. Clean code structure and layout responsiveness.',
  },
 
  {
    icon: <FiSearch />,
    name: 'Email Testing ',
    description:
      'Tested a lot of emails using  Email On Acid.',
  },
  {
    icon: <FiLayout />,
    name: 'Landing Pages',
    description:
      'Capture leads for your business. Send your subscribers to a dedicated page.',
  },
];



// contact
export const contact = [
  
  {
    icon: <FiHome />,
    title: 'Resume',
    description: <a href={CV} target="_blank"> My Resume</a>,
  },
  {
    icon: <FiMail />,
    title: 'E-mail',
    description: <a href="mailto:rurangwa.luke@gmail.com" target="_blank"> rurangwa.luke@gmail.com</a>,

  },
  {
    icon: <FiPhone />,
    title: 'Phone',
    description: <a href="tel:+250788959475" target="_blank">+250 7889 59475</a>,
  },
];
