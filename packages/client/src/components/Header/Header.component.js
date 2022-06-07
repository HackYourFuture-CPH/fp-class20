import React, { useState } from 'react';
import { ReactComponent as ArrowUp } from '../../../public/assets/vectors/vector_arrow_up.svg';
import { ReactComponent as ArrowDown } from '../../../public/assets/vectors/vector_arrow_down.svg';
import './Header.styles.css';
import { BottomNavigation } from './Bottom-navigation/BottomNavigation.component';

function Header() {
  const [dropDownExpanded, setDropDownExpanded] = useState(false);
  const displayMode = dropDownExpanded ? 'display' : 'no-display';
  const toggleIcon = () => {
    setDropDownExpanded(!dropDownExpanded);
  };
  return (
    <div className="whole-container">
      <div className="up-container">
        <div className="button-for-spices">
          <span className="spices-button">SPICES</span>

          {dropDownExpanded ? (
            <button
              className="toggle-button"
              type="button"
              onClick={toggleIcon}
            >
              <ArrowUp className="arrow" />
            </button>
          ) : (
            <button
              className="toggle-button"
              type="button"
              onClick={toggleIcon}
            >
              <ArrowDown className="arrow" />
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
