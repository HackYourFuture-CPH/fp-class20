import React, { useState } from 'react';
import './BottomNavBar.styles.css';
import BottomNavigation from './Right-bottom-navigation/BottomNavigation.component';

function Header() {
  const [dropDownExpanded, setDropDownExpanded] = useState(false);
  const displayMode = dropDownExpanded ? 'display' : 'no-display';
  const displayContainer = !dropDownExpanded
    ? 'whole-container-margin'
    : 'whole-container-no-margin';
  const toggleIcon = () => {
    setDropDownExpanded(!dropDownExpanded);
  };
  return (
    <div className={displayContainer}>
      <div className="up-container">
        <div className="button-for-spices">
          <span className="spices-button">SPICES</span>

          {dropDownExpanded ? (
            <button
              className="toggle-button-bottom"
              type="button"
              onClick={toggleIcon}
            >
              <img
                src="assets/vectors/vector_arrow_up.svg"
                alt="arrowup icon"
                className="arrow-bottom-bar"
              />
            </button>
          ) : (
            <button
              className="toggle-button-bottom"
              type="button"
              onClick={toggleIcon}
            >
              <img
                src="assets/vectors/vector_arrow_down.svg"
                alt="arrow down icon"
                className="arrow-bottom-bar"
              />
            </button>
          )}
        </div>
        <BottomNavigation />
      </div>

      {/* this is the toggle part */}
      <div className={displayMode}>
        <div className="down-container">
          <div>
            <span className="main-heading">Browser spices by plant part</span>

            <div className="items-container">
              <div className="left-container">
                <div className="block-height">
                  <span className="spice-names">BUD/FLOWER</span>
                  <p>(clove, caper, saffron and more)</p>
                </div>
                <div className="block-height">
                  <span className="spice-names">SEED</span>
                  <p>(cummin, coriander,fennel, poppy and more)</p>
                </div>
                <div className="block-height">
                  <span className="spice-names">FRUIT/BERRY</span>
                  <p>(chili, cardamon, black pepper and more)</p>
                </div>
              </div>
              <div className="right-container">
                <div className="block-height">
                  <span className="spice-names">ROOT/RHIZOME/BARK</span>
                  <p>(turmeric, ginger, cinnamon and more)</p>
                </div>
                <div className="block-height">
                  <span className="spice-names">LEAF</span>
                  <p>(mint, oregano, thyme, bayleaf and more herbs)</p>
                </div>
                <div className="show-all-spices  block-height">
                  <span>SHOW ALL SPICES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
