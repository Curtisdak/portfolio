import cvc01 from '../assets/img/cvc01.png';
import cvc02 from '../assets/img/cvc02.png';
import proto01 from '../assets/img/proto01.png';
import proto02 from '../assets/img/proto02.png';
import simple01 from '../assets/img/simple01.png';
import simple02 from '../assets/img/simple02.png';
import aceflix01 from '../assets/img/aceflix01.png';
import aceflix02 from '../assets/img/aceflix02.png';
import gems01 from '../assets/img/gems01.png';
import gems02 from '../assets/img/gems02.png';


export const projects = [
  {
    id: 1,
    name: "The CVC",
    detail: "This project was my first one at Wild Code School Bootcamp. This project allowed me to pratice what I learned in three weeks",
    techno: ["html", "css", "javascript", "gitHub"],
    pictures: [cvc01, cvc02],
    discover: "https://curtisdak.github.io/PROJECT-01",
    done: true,
    responsive: false,
  },
  {
    id: 2,
    name: "The proto",
    detail: "This project was a chalenge one at Wild Code School Bootcamp, with the team we had to create something in a short time (24hours)",
    techno: ["html", "css", "javascript", "react.js", "gitHub"],
    pictures: [proto01, proto02],
    discover: "https://proto-nature-todo-meditation.vercel.app",
    done: true,
    responsive: false,
  },
  {
    id: 3,
    name: "The Simple todo",
    detail: "This project was a personal one. I decided to try things  from what I learnt at Bootcamp, and I really ENJOYED it",
    techno: ["html", "css", "javascript", "react.js", "gitHub"],
    pictures: [simple01, simple02],
    discover: "https://simple-note-personal.vercel.app",
    done: true,
    responsive: true,
  },
  {
    id: 4,
    name: "Aceflix",
    detail: "This is my favorite one! I had just discovered the power of React.JS two month during Bootcamp and I fell in love with react .I really ENJOYED it",
    techno: ["html", "css", "javascript", "react.js"],
    pictures: [aceflix01, aceflix02],
    discover: "https://aceflix-client-dun.vercel.app",
    done: true,
    responsive: true,
  },
 {
    id: 5,
    name: "Gems",
    detail: "This projects, is a platform where rich people can securely sell and buy jewelries . This projects improves my Backend/Frontend skills ",
    techno: ["html", "css", "javascript", "react.js", "sql", "mysql", "node.js", "express.js", "Harmonia (framework)", "postman", "workbench"],
    pictures: [gems01,gems02],
    discover: "https://gems-gems.fr/",
    done: true,  
    responsive: true,
  },
];
