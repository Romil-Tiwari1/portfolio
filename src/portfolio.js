import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Romil Tiwari",
  title: "Hi all, I'm Romil",
  subTitle: emoji(
    "Driven by innovation and powered by quantitative prowess: I'm Romil Tiwari, a software engineer by choice and let's say profession. Leveraging extensive experience and a strong technical foundation, I engineer solutions that drive profitability and market efficiency. Dive in to explore my journey and the value I bring to the table."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fKJJur0YAt9rmqNI58IqjCvfhsBtapBi/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Romil-Tiwari1",
  linkedin: "https://www.linkedin.com/in/romil-tiwari/",
  gmail: "romil.tiwari891@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software Developer with a outside interest in fintech",
  skills: [
    emoji("⚡ Deep expertise in quantitative modeling, financial analysis, and market strategy testing"),
    emoji("⚡ Crafted functionalities for multiple Android applications and spearheaded software development projects"),
    emoji("⚡ Front-end development with a keen focus on user experience, ensuring seamless interactions"),
    emoji("⚡ Craft sleek, responsive, and intuitive user interfaces that resonate with target audiences"),
    emoji("⚡ Data and statistical analysis powerhouse to drive actionable insights and decision-making"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Algorithmic Trading",
      fontAwesomeClassname: "fab fa-uncharted"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeastern.png"),
      subHeader: "Master of Science in Information Systems",
      duration: "September 2022 - May 2024",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Courses Taken : Application Engineering Development, Web Development, UI/UX Engineering, Network Structures and Cloud Computing, Agile Software Development",

      ], desc: "GPA : 3.8/4",
    },
    {
      schoolName: "Rajiv Gandhi Technical University",
      logo: require("./assets/images/rgpv.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2014 - May 2018",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      desc: "CGPA : 7.37/10",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Trading and Investment Scripting",
      progressPercentage: "70%"
    },
    {
      Stack: "Agile Methodology and Project Management",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

    {
      role: "Application Consultant",
      company: "Paytm Money",
      companylogo: require("./assets/images/paytm.jpeg"),
      date: "July 2021 – August 2022",
      descBullets: [
        "Developed custom software tools using Python in a Linux environment, enhancing project efficiency by 30%",
        "Analyzed financial data to identify vulnerabilities, effectively reducing potential losses by 20%",
        "Optimized applications using Java and Python by refining architecture, resulting in a 20% improvement in user experience and 15% more efficient data structure usage"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tata.jpeg"),
      date: "July 2018 – July 2021",
      descBullets: [
        "Designed Java-based Android applications focusing on efficient data structures, enhancing responsiveness by 15%",
        "Directed platform development using object-oriented design for high-throughput systems, achieving a 93% integration rate with targeted APIs",
        "Managed an Agile team over a $5M+ project, implementing streamlined processes which increase productivity and accelerated project delivery by 75%"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Self-Learned Projects",
  projects: [
    {
      image: require("./assets/images/aws_7.png"),
      projectName: "Cloud Native Application",
      projectDesc: "• Node.JS • AWS • CI/CD • EC2 • VPC • Route53 • SES • S3-Bucket • RDS • Azure • GCP • CloudWatch ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/CloudProdOrg/webapp"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/iac_7.png"),
      projectName: "Infrastructure as Code",
      projectDesc: "Setting up our AWS infrastructure and resources such as VPC, Internet Gateway, Routes utilizing Pulumi",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Romil-Tiwari1/iac-pulumi"
        }
      ]
    },
    {
      image: require("./assets/images/tableau.png"),
      projectName: "AWS Snowflake Tableau",
      projectDesc: "Setting up AWS Tools to extract data and using snowflake and tableau to display data in graphs and diagrams",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Romil-Tiwari1/AWS-Snowflake-Tableau"
        }
      ]
    },
    {
      image: require("./assets/images/nft.png"),
      projectName: "NFT Market Place",
      projectDesc: "Developed a NFT Market Place web application where user can upload an image and mint NFTs for use",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Romil-Tiwari1/NFT_Marketplace"
        }
      ]
    },
    {
      image: require("./assets/images/trading_1.png"),
      projectName: "Trading Scripts",
      projectDesc: "Implementing ARIMA (AutoRegressive Integrated Moving Average) along with Linear Regression to predict stocks prices for 7 days",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Romil-Tiwari1/Trading-Scripts"
        }
      ]
    },
    {
      image: require("./assets/images/numpy.png"),
      projectName: "Monte Carlo Simulation",
      projectDesc: "Utilizes Monte Carlo simulation to estimate the probability of meeting retirement income goals",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Romil-Tiwari1/Monte_Carlo_SImulation"
        }
      ]
    },
    {
      image: require("./assets/images/backtest_1.png"),
      projectName: "Backtest Trading Strategy",
      projectDesc: "Development and backtesting of trading strategies using Python, to optimize investment decisions in financial markets",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Romil-Tiwari1/Backtest-Trading-Strategy"
        }
      ]
    },
    {
      image: require("./assets/images/react.png"),
      projectName: "Web Based Application",
      projectDesc: "• ReactJS • HTML • CSS • SCSS • NodeJs",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Romil-Tiwari1/Student-Buddy-Assistant"
        }
      ]
    },
    {
      image: require("./assets/images/java_1.png"),
      projectName: "Full Stack Java Application",
      projectDesc: "• JAVA • SpringBoot • Apache/Tomcat • MySQL • MongoDB • Jenkins",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Romil-Tiwari1/Organ-Donation-System"
        }
      ]
    },
    {
      image: require("./assets/images/oops.png"),
      projectName: "OOPS Application",
      projectDesc: "Implemented OOPS principles using Java and built a JAVA FX application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Romil-Tiwari1/Monthly-Expenditure-Book"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certification to validate and highlight my skills!",

  achievementsCards: [
    {
      title: "AWS Cloud Practitioner",
      subtitle:
        "Gained an understanding of the mechanisms by which different financial markets function",
      image: require("./assets/images/aws_7.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/545e3ceb-0d67-401b-8b25-58e14cadf2ed"
        }
      ]
    },
    {
      title: "Financial Markets",
      subtitle:
        "Hands-on foundational concepts of financial markets and assess the value of various financial assets",
      image: require("./assets/images/yale_1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/WT7CCK6EFGEK"
        }
      ]
    },
    {
      title: "Jira Fundamentals",
      subtitle:
        "Learned how to effectively create, manage, and track tasks and projects using Jira's Agile tools",
      image: require("./assets/images/jira_7.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://university.atlassian.com/student/award/7ZnDPqvYfZM9w6J4uE9m8EqS"
        }
      ]
    },
    {
      title: "Portfolio Construction",
      subtitle:
        "Learned how to construct and analyze investment portfolios with Python and Computational finance",
      image: require("./assets/images/edhec_1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/HB5N3P2AHAJ5"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const position = {
  title: emoji("Position of Responsibility"),
  subtitle:
    "Extra-Curricular Activities",

  achievementsCards: [
    {
      title: "Graduate Teaching Assistant",
      subtitle:
        "Teaching Assistant for Object Oriented Design Subject handling class of 100+ students",
      image: require("./assets/images/northeastern.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/company/northeastern-university-mgen/"
        }
      ]
    },

    {
      title: "Head of Outreach and Partnerships",
      subtitle:
        "Core Member and Head of Outreach and Partnerships at Northeastern Option Trading Club",
      image: require("./assets/images/optionsclub.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/company/northeastern-options-club/"
        }
      ]
    },
    {
      title: "Senior Mentor",
      subtitle:
        "Senior Mentor at Northeatern MSIS Bridge Buddy Mentor Program",
      image: require("./assets/images/northeastern.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/company/northeastern-university-msis-bridge/mycompany/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-8573761693",
  email_address: "romil.tiwari891@gmail.com",
  display: true 
};


const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  position,
  contactInfo,
  isHireable
};
