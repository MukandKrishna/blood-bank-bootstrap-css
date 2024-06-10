// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./HomePage.css";
// import Donate1 from "./Donate_1.png";
// import logo from "./logo.png";
// import { FaBars, FaMoon, FaSun } from "react-icons/fa";
// import { MdClose } from "react-icons/md";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// const HomePage = () => {
//   const [isNavVisible, setIsNavVisible] = useState(false);
//   const [isNightMode, setIsNightMode] = useState(false);

//   const toggleNav = () => {
//     setIsNavVisible(!isNavVisible);
//   };

//   const toggleNightMode = () => {
//     setIsNightMode(!isNightMode);
//     document.body.classList.toggle("night-mode");
//   };

//   return (
//     <>
//       <div className="navbar-container">
//         <div className="logo">
//           <img src={logo} alt="Logo" />
//           <span className="logo-text">DHAT Blood Bank</span>
//         </div>
//         <div className="circular-navbar">
//           <button className="nav-toggle" onClick={toggleNav}>
//             {isNavVisible ? <MdClose /> : <FaBars />}
//           </button>
//           <button className="night-mode-toggle" onClick={toggleNightMode}>
//             {isNightMode ? <FaSun /> : <FaMoon />}
//           </button>
//           <ul className={`nav-links ${isNavVisible ? "active" : ""}`}>
//             <div className="nav-close-container">
//               <button className="nav-close" onClick={toggleNav}>
//                 <MdClose />
//               </button>
//             </div>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/donate">Donate Blood</Link></li>
//             <li><Link to="/register">Register Now</Link></li>
//             <li><Link to="/login">Login</Link></li>
//           </ul>
//         </div>
//       </div>

//       <div>
//         <div className="donate-section" style={{ textAlign: "center", margin: "auto" }}>
//           <div className="donate-text">
//             <h1>Be a hero in someone's story - donate blood today. </h1>
//             <p style={{ textAlign: "justify" }}>
//               Did you know that every two seconds, someone needs blood? Surprisingly, only 3% of eligible people donate. Your donation helps in emergencies, surgeries, and treatments for illnesses like cancer. Imagine, a single car crash victim might need 100 units of blood! Join the movement – over 117 million people donate each year, making a huge impact. Your simple act can be a lifeline for someone in need. Give the gift of life – be a blood donor and make a difference!
//             </p>
//             <button className="donate_1">Donate Blood →</button>
//           </div>
//           <div className="donate-image">
//             <img src={Donate1} alt="Donate Blood, Save Lives" />
//           </div>
//         </div>

//         <div className="mission" style={{ textAlign: "center", margin: "auto" }}>
//           <div className="mission-text">
//             <h1 style={{ textAlign: "center" }}>Our Mission </h1>
//             <p style={{ textAlign: "justify" }}>
//               Saving Lives, Building Hope: Maheshwari Blood Bank is a heartbeat of compassion, where every drop of donated blood is a lifeline. Join us in this journey of giving, uniting our community in the warmth of shared humanity. Together, we are the heartbeat of hope.
//             </p>
//           </div>
//         </div>

//         <h1 style={{ textAlign: "center", }}>Compatible Blood Type Donors</h1>

//         <div className="blood-type-table">
//           <table className="blood-type-table">
//             <thead>
//               <tr>
//                 <th>Blood Type</th>
//                 <th>Donate Blood To</th>
//                 <th>Receive Blood From</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>A+</td>
//                 <td>A+, AB+</td>
//                 <td>A+, A-, O+, O-</td>
//               </tr>
//               <tr>
//                 <td>B+</td>
//                 <td>B+, AB+</td>
//                 <td>B+, B-, O+, O-</td>
//               </tr>
//               <tr>
//                 <td>O+</td>
//                 <td>O+, A+, B+, AB+</td>
//                 <td>O+, O-</td>
//               </tr>
//               <tr>
//                 <td>AB+</td>
//                 <td>AB+</td>
//                 <td>Everyone</td>
//               </tr>
//               <tr>
//                 <td>A-</td>
//                 <td>A+, A-, AB+, AB-</td>
//                 <td>A-, O-</td>
//               </tr>
//               <tr>
//                 <td>B-</td>
//                 <td>B+, B-, AB+, AB-</td>
//                 <td>B-, O-</td>
//               </tr>
//               <tr>
//                 <td>O-</td>
//                 <td>Everyone</td>
//                 <td>O-</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="container">
//       <div className="logo">
//         <img src={logo} alt="Logo" />
//         <span className="logo-text">DMYF</span>
//       </div>
//       <div className="nav">
//         <h3>Ready to get started?</h3>
//         <button className="donate-button">Donate</button>
//         <a href="https://example.com" className="nav-link">ABOUT US</a>
//         <a href="https://example.com" className="nav-link">CONTACT US</a>
//         <a href="https://example.com" className="nav-link">FAQS</a>
//       </div>
//       <div className="social-icons">
//         <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
//         <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
//         <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
//         <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//       </div>
//     </div>

//     </>
//   );
// };

// export default HomePage;
