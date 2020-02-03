import hsn from '../../images/hsn.png';
import hsn2 from '../../images/hsn2.png';
import hsn3 from '../../images/hsn3.png';
import hsn4 from '../../images/hsn4.png';
import monsterhunters from '../../images/monsterhunters.png';
import monsterhunters2 from '../../images/monsterhunters2.png';
import monsterhunters3 from '../../images/monsterhunters3.png';
import fotografiegertenbach from '../../images/fotografiegertenbach.png';
import fotografiegertenbach1 from '../../images/fotografiegertenbach1.png';
import fotografiegertenbach2 from '../../images/fotografiegertenbach2.png';
import klasbak from '../../images/klasbak.png';
import klasbak2 from '../../images/klasbak2.png';
import klasbak3 from '../../images/klasbak3.png';
import klasbak4 from '../../images/klasbak4.png';

export const tileDataKlasbak = [
    {
        img: klasbak3,
        title: 'klasbak',
        author: 'thomas',
        cols: 2,
    },
    {
        img: klasbak2,
        title: 'klasbak',
        author: 'thomas',
        cols: 1,
    },
    {
        img: klasbak4,
        title: 'klasbak',
        author: 'thomas',
        cols: 2,
    },
];

export const tileDataHsn = [
    {
        img: hsn4,
        title: 'coding',
        author: 'thomas',
        cols: 2,
    },
    {
        img: hsn2,
        title: 'coding',
        author: 'thomas',
        cols: 1,
    },
    {
        img: hsn3,
        title: 'coding',
        author: 'thomas',
        cols: 2,
    },
];

export const tileDataFotografieGertenbach = [
    {
        img: fotografiegertenbach1,
        title: 'coding',
        author: 'thomas',
        cols: 2,
    },
    {
        img: fotografiegertenbach2,
        title: 'coding',
        author: 'thomas',
        cols: 1,
    },
];

export const tileDataMonsterHunters = [
    {
        img: monsterhunters2,
        title: 'coding',
        author: 'thomas',
        cols: 3,
    },
    {
        img: monsterhunters3,
        title: 'coding',
        author: 'thomas',
        cols: 3,
    },
];



export const projectsCards = [
    {
        id: 1,
        title: "HSN",
        description: "A web application for managing courses build with React and Redux.",
        link: '/projects/hsn',
        image: hsn,
        text: 'Hsn (Horeca Stichting Nederland) is a company for educating people in the catering industry. They provide all kind of courses and needed a web portal for managing their courses in combination with their customers. I build this web portal while working  at GDK software with a team of students. Some features are: Registering, managing employees, shoppingcart etc.',
        type: 'Work project',
        stack: ["React", "Redux", "GraphQL"],
        code: undefined,
        live: undefined,
        tileData: tileDataHsn
    },
    {
        id: 2,
        title: "Klasbak",
        description: "An IoT school project for improving the seperation of garbage in elementary schools ",
        link: '/projects/klasbak',
        image: klasbak,
        text: 'Klasbak originated from a school project about a sustainable future. We came up with a Internet of Things product to help children seperate their garbage at elementary schools. We have a weight sensored bin for each of the following materials: Plastic, Paper and residual waste. The more you seperate the better the feedback is on the website.',
        type: 'School project',
        stack: ["React", "Three.JS", "Arduino"],
        code: "https://github.com/thomijn/KlasbakApp",
        live: undefined,
        tileData: tileDataKlasbak
    },
    {
        id: 3,
        title: "Fotografie Gertenbach",
        description: "Reservation website for a wedding photographer. My first ever web application",
        link: '/projects/fotografie-gertenbach',
        image: fotografiegertenbach,
        text: '',
        type: 'School project',
        stack: ["HTML5", "CSS", "PHP"],
        code: "",
        live: "https://stud.hosted.hr.nl/0972416/Gertenbach/adminlogin.php",
        tileData: tileDataFotografieGertenbach
    },
    {
        id: 4,
        title: "Monster Hunters",
        description: "I build a little game for a school project using Phaser3 and Typescript.",
        link: '/projects/monster-hunters',
        image: monsterhunters,
        text: '',
        type: 'School project',
        stack: ["React", "Redux", "GraphQL"],
        code: "https://github.com/sunnydegraaf/circlesandsquares",
        live: "https://sunnydegraaf.github.io/circlesandsquares/",
        tileData: tileDataMonsterHunters
    }
]