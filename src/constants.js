// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import postgreLogo from './assets/tech_logo/postgre.png';
// Experience Section Logo's
import webverseLogo from './assets/company_logo/frontend.png';
import agcLogo from './assets/company_logo/data_sc.png';
// Education Section Logo's
import bsaLogo from './assets/education_logo/mmdu.png';
import vpsLogo from './assets/education_logo/bseb.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/chat_analysis.png';
import movierecLogo from './assets/work_logo/movie_rec.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },

    
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      {name:'django', logo:pythonLogo},
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      {name:'react js', logo:reactjsLogo}

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Jupyter Notebook', logo: mcLogo },
      { name: 'Figma', logo: figmaLogo },
      {name:'pycharm', logo:vscodeLogo},
      {name:'docker', logo:nodejsLogo}
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Frontend Developer",
      
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the React.js, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MySQL",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Data Science Engineer",
      
      date: "July 2024 -Present",
      desc: "Contributed as a Data Science Engineer and Full-Stack Developer by building ML models, optimizing data pipelines, analyzing data, and developing responsive web applications using Python, SQL, HTML, CSS, JavaScript, PHP, Bootstrap, and ReactJS..",
      skills: [
        "TABLEAU",
        "Python",
        "POWER BI",
        "JUPYTER NOTEBOOK",
        "DEEP LEARNING",
        "NLP",
        "POSTGRESQL",
        "ML",
      
      ],
    },
    
  ];
  
  export const education = [
    
    {
      id: 1,
      img: bsaLogo,
      school: "MMDU COLLEGE, HARYANA",
      date: "AUG 2023 - 2027",
      grade: "73.2%",
      desc: "Pursuing B.Tech in Computer Science from MMDU, Haryana, gaining practical knowledge in Data Structures, Algorithms, Web Development, and Database Management, with hands-on project experience applying theoretical concepts..",
      degree: "B.Tech (CSE)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "BSEB, PATNA",
      date: "March 2019 - March 2020",
      grade: "68.8%",
      desc: "I completed my class 10 education from BSEB, PATNA,  where I studied Physics, Chemistry, and Mathematics,History",
      degree: "BSEB(X)",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "BSEB, PATNA",
      date: "March 2020 - March 2022",
      grade: "74.4%",
      desc: "I completed my class 12 education from BSEB, PATNA, where I studied Science (PCM).",
      degree: "BSEB(Xii), Science ",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Ultimate Global Sales & Profit Dashboard",
      description:
        "Developed an interactive dashboard to visualize global sales and profits, track KPIs, analyze trends, and provide actionable insights for strategic business decisions using Python, SQL, and modern visualization tools.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "ML", "React JS", "Deep Learning"],
      github: "https://github.com/mrnavinkr/deployment_data",
      webapp: "https://companydash1navinkr.streamlit.app/",
    },
    {
      id: 1,
      title: "Whatsapp chat analyzer",
      description:
        "WhatsApp Chat Analyzer is an interactive, user-friendly tool built with Python and Streamlit for analyzing WhatsApp chat data. Gain insights from your chats with rich metrics, visualizations, and interactive dashboards—all in one seamless interface.",
      image: csprepLogo,
      tags: ["React JS", "Python 3.x", "streamlit", "pandas", "HTML", "CSS", "emoji"],
      github: "https://github.com/mrnavinkr/whatsapp-chat-analysis",
      webapp: "https://whatsapp-chat-visualization.streamlit.app/",
    },
    {
      id: 2,
      title: "Movie Recommender App",
      description:
        "A movie recommender app that provides personalized recommendations based on user preferences, genres, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["scikit-learn","scipy", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/mrnavinkr/movie-recommender",
      webapp: "https://movie-recommender-01system.streamlit.app/",
    },
  ];  