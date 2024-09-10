import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Personal_Info = () => {
  const handleResumeDownload = () => {
    window.open('/Peyman_Abbaspour_Resume.pdf', '_blank');
  };

  return (
    <div id='personal'>
      <div id='name'>
        <h1>Peyman Abbaspour</h1>
        <p id='web_developer'>Web Developer</p>
        <div id='icons_github'>
          <a href='https://github.com/peymanabbaspour1992'>
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </div>
        <div id='icons_linkedIn'>
          <a href='https://www.linkedin.com/in/peyman-abbaspour'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p className='description'>Driven by a passion for crafting innovative web applications tailored for commercial business success.</p>
        <button type="button" className="btn btn-primary btn-lg" onClick={handleResumeDownload}>
          RESUME
        </button>
      </div>
      <div id='photo'>
        <img src='Hero-img.png' alt='personal photo of peyman'></img>
      </div>
    </div>
  );
}

export default Personal_Info;
