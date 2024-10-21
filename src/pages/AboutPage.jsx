import React from 'react';

const AboutPage = () => {
  return (
    <>
      <div className="about-container" >
        <h2 className="about-title"><span className='Ab'>AB</span>OUT ME</h2>
        <div className="about-me-content">
          <img
            src="./mce-2.jpg"
            alt="Profile"
            className="profile-image"
          />
          <p className="about-texts">
            "Salam siz bizim depo saytimizin about hissesindesiniz bu saytda siz
            bizim melumatlarimizi ala bilersiniz. <br /> Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Dolor molestias facere explicabo! <br /> architecto soluta inventore ea temporibus quos non ad modi eaque."
          </p>
          <h3 className="about-name">MCE</h3>
          <p className="about-description">MCE-2 ©2024 Created by JET</p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
