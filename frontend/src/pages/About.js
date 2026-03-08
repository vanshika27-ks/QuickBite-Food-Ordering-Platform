import "./../styles/about.css";
import profile from "../assets/Vanshika2.jpeg";

function About() {

  return (

    <div className="about-page">

      <h1 className="about-title">About QuickBite</h1>

      {/* Developer Card */}

      <div className="developer-card">

        <img src={profile} alt="developer" />

        <h2>Vanshika Salaria</h2>

        <p>
          Full Stack Developer passionate about building scalable
          web applications and solving real-world problems through
          technology.
        </p>

        <div className="social-buttons">

          <a href="https://github.com/vanshika27-ks/QuickBite-Food-Ordering-Platform" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i> GitHub
          </a>

          <a href="https://linkedin.com/in/vanshikasalaria" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>

        </div>

      </div>

      {/* Project Section */}

      <div className="about-project">

<h2>About the Project</h2>

<div className="project-cards">

<div className="project-card">

<h3>🚧 The Problem</h3>

<p>
Ordering food online should be simple, but many platforms
have complex interfaces and slow browsing experiences.
I wanted to build a platform that makes discovering food
and placing orders quick and intuitive.
</p>

</div>

<div className="project-card">

<h3>💡 The Solution</h3>

<p>
QuickBite provides a modern interface where users can
explore restaurants, browse menus, and add meals to
their cart seamlessly through a clean and responsive
web application.
</p>

</div>

<div className="project-card">

<h3>🚀 The Result</h3>

<p>
The platform demonstrates a complete full-stack
architecture combining React for the frontend,
Node.js APIs for backend services, and MongoDB
for managing application data.
</p>

</div>

</div>

</div>
      

   

      {/* Features */}

      <div className="features-section">

<h2>Key Features</h2>

<div className="features-grid">

<div className="feature-card">
<i className="fa-solid fa-store"></i>
<h3>Restaurant Discovery</h3>
<p>Explore restaurants and browse menus easily.</p>
</div>

<div className="feature-card">
<i className="fa-solid fa-user-shield"></i>
<h3>Secure Authentication</h3>
<p>User signup and login system for secure access.</p>
</div>

<div className="feature-card">
<i className="fa-solid fa-cart-shopping"></i>
<h3>Cart Management</h3>
<p>Add and manage food items in your cart smoothly.</p>
</div>

<div className="feature-card">
<i className="fa-solid fa-mobile-screen"></i>
<h3>Responsive UI</h3>
<p>Clean interface that works across all devices.</p>
</div>

</div>

</div>

{/* Role Section */}

<div className="role-section">

<h2>My Role in the Project</h2>

<div className="role-grid">

<div className="role-card">

<h3>Frontend Development</h3>

<ul>
<li>Built responsive UI using React.js</li>
<li>Designed reusable components</li>
<li>Implemented routing and navigation</li>

</ul>

</div>

<div className="role-card">

<h3>Backend Development</h3>

<ul>
<li>Developed REST APIs using Node.js & Express</li>
<li>Implemented authentication system</li>
<li>Handled server-side logic</li>

</ul>

</div>

<div className="role-card">

<h3>Database & Architecture</h3>

<ul>
<li>Designed MongoDB data models</li>
<li>Managed API data flow</li>
<li>Integrated frontend with backend services</li>

</ul>

</div>

</div>

</div>

      {/* Tech Stack */}

      <div className="tech-section">

<h2>Technology Stack Used in QuickBite</h2>

<div className="tech-grid">

<div className="tech-card">

<h3>Frontend</h3>

<p><i className="fa-brands fa-react"></i> React.js</p>
<p><i className="fa-brands fa-js"></i> JavaScript</p>
<p><i className="fa-brands fa-html5"></i> HTML5</p>
<p><i className="fa-brands fa-css3-alt"></i> CSS3</p>

</div>

<div className="tech-card">

<h3>Backend</h3>

<p><i className="fa-brands fa-node-js"></i> Node.js</p>
<p><i className="fa-solid fa-server"></i> Express.js</p>

</div>

<div className="tech-card">

<h3>Database</h3>

<p><i className="fa-solid fa-database"></i> MongoDB</p>

</div>

</div>

</div>

 {/*  Architecture section*/}


      <div className="architecture-section">

<h2>Project Architecture</h2>

<div className="architecture-flow">

<div className="arch-box">
<i className="fa-brands fa-react"></i>
<p>Frontend</p>
<span>React.js</span>
</div>

<div className="arrow">↓</div>

<div className="arch-box">
<i className="fa-brands fa-node-js"></i>
<p>Backend</p>
<span>Node.js + Express</span>
</div>

<div className="arrow">↓</div>

<div className="arch-box">
<i className="fa-solid fa-database"></i>
<p>Database</p>
<span>MongoDB</span>
</div>

</div>

</div>

    </div>

  );

}

export default About;