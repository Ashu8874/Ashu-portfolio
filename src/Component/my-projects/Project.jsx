import React from "react"; 
import './Project.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const projects = [
  {
    id: "01",
    title: "Analog Clock",
    description: "A Analog Clock made with HTML ,CSS,and javaScript.",
    link: "https://ashu8874.github.io/Analog_clock/",
    image: "https://coderspacket.com/uploads/user_files/2023-07/clockprojectss1-1689055287-1969.PNG",
  },
  {
    id: "02",
    title: "Tic-Tac-Toe Game",
    description: "A simple Tic-Tac-Toe game made with HTML, CSS, and JS.",
    link: "https://ashu8874.github.io/tik-toc-toe/",
    image: "https://tse2.mm.bing.net/th?id=OIP.KHYfTwPWNzuGxw25OhItHgHaHa&pid=Api&P=0&h=180",
  },
  {
    id: "03",
    title: "Digital stop watch",
    description: "A digital stop watch ueing html ,css, and javascript.",
    link: "https://ashu8874.github.io/Stop-Watch/",
    image: "https://codingartistweb.com/wp-content/uploads/2023/04/Stopwatch-new-01.png",
  },
  {
    id: "04",
    title: "Portfolio website",
    description: "my personal portfolio website useing Reactjs.",
    link: "https://ashu8874.github.io/Ashu-portfolio/",
    image: "https://alvarotrigo.com/blog/assets/imgs/2021-10-16/dvlpr-front-end-portfolio-example.jpeg",
  },
  {
    id: "05",
    title: "Calculator",
    description: "A simple Calculater made with HTML, CSS, and JS.",
    link: "https://ashu8874.github.io/calculator/",
    image: "https://tse3.mm.bing.net/th?id=OIP.phbGtBnNx9qYVWKhpwzqdgHaEK&pid=Api&P=0&h=180",
  },
  {
    id: "06",
    title: "To-Do App",
    description: "A task management app using HTML, CSS, JS, and MySQL.",
    link: "https://your-todo-app-link.com",
    image: "https://clickup.com/blog/wp-content/uploads/2018/03/to-do-list-apps.png",
  },
];

const Project = () => {
  return (
    <section id="projects" className="projects">
      <div className="my-projects">
                     <h1>My Projects</h1>
                     <img src={theme_pattern} alt=""/>
                  </div>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="project-format">
            <h2>{project.id}</h2>
             <h3 className="project-title">{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-img" />
            <p className="project-disc">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
