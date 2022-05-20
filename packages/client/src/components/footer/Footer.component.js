import React from 'react';
import './Footer.styles.css';
import phone from '../../../public/assets/phone-call.png';
import envelop from '../../../public/assets/envelope.png';
import map from '../../../public/assets/mapLogo.png';
import simplySpices from '../../../public/assets/SimplySpices.png';

export const Footer = () => {
  return (
    <footer className="footerContainerTotall">
      <div className="footerContainer">
        {/* first div */}
        <div className="coporateInfo">
          <span className="text_big">Coporate info</span>
          <span className="text_small">About us</span>
          <span className="text_small">Our partnes</span>
          <span className="text_small">Sustainability</span>
          <span className="text_small">Terms of Service</span>
        </div>

        {/* second div */}
        <div className="Contact">
          <span className="text_big ">Contact us</span>
          <span className="text_small phone_text">
            <img src={phone} alt="Canvas phone Logo" className="phone" />
            +45 666 555
          </span>
          <span className="text_small">
            <img src={envelop} alt="Canvas envelop Logo" className="envelop" />{' '}
            spice@kbh.dk
          </span>
        </div>

        {/* third div */}
        <div className="googleMap">
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.721573725772!2d12.547427515880969!3d55.69382828053764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253aceaa7bf15%3A0xf6f379d357870e6b!2zTsO4cnJlYnJvZ2FkZSwgS8O4YmVuaGF2bg!5e0!3m2!1sen!2sdk!4v1652784806862!5m2!1sen!2sdk"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* forth div */}
        <div className="mapInfo">
          {/* forth div top part */}
          <div>
            <img
              src={simplySpices}
              alt="Canvas Logo"
              className="logoOfSimplySpices"
            />
          </div>

          {/* forth div botom part */}
          <div className="mapIn">
            {/* map logo and adress left map logo */}
            <div>
              <img className="smallMapIcon" src={map} alt="Canvas map Logo" />
            </div>
            {/* map logo and adress right part adress */}
            <div>
              <p className="adress">
                Norrebrogade 666
                <br />
                2200 Norrebro
                <br />
                Copenhagen
              </p>
            </div>
          </div>
        </div>
        {/* forth div end */}
      </div>

      <div className="bottomText">
        <span> Copyright info ...</span>
      </div>
    </footer>
  );
};
