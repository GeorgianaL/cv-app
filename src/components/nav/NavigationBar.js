import React from 'react';
import { Link } from 'react-router';

const NavigationBar = () =>
  <div className="navbar">
    <div className="sections-list">
      <Link className="sections-list-item hvr-back-pulse" to="/personal-details">Personal Details</Link>
      <Link className="sections-list-item hvr-back-pulse" to="/skills">Skills</Link>
      <Link className="sections-list-item hvr-back-pulse" to="/experience">Experience</Link>
      <Link className="sections-list-item hvr-back-pulse" to="/projects">Projects</Link>
      <Link className="sections-list-item hvr-back-pulse" to="/certifications">Certifications</Link>
      <Link className="sections-list-item hvr-back-pulse" to="/education">Education</Link>
      <Link className="sections-list-item hvr-back-pulse" to="/languages">Languages</Link>
    </div>
  </div>;

export default NavigationBar;
