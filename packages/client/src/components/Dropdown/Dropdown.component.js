import React, { useState } from 'react';
import './Dropdown.styles.css';

function Dropdown() {
  const [dropDownExpanded, setDropDownExpanded] = useState(false);
  const dropDownList = dropDownExpanded ? 'display' : 'noDisplay';
  const triangle = dropDownExpanded ? 'arrow-up' : 'arrow-down';
  const display = () => {
    setDropDownExpanded(!dropDownExpanded);
  };
  return (
    <div>
      <div className="button-for-spices">
        <span className="spices-button">SPICES</span>
        <span
          className={triangle}
          onClick={() => {
            display();
          }}
          aria-hidden="true"
        />
      </div>
      <div className={dropDownList}>
        <span className="main-heading">Browser spices by plant part</span>
        <div className="items-contanier">
          <div className="left-container">
            <div className="block-height">
              <span className="spice-names">BUD/FLOWER</span>
              <p>(clove, caper, saffron and more)</p>
            </div>
            <div>
              <span className="spice-names">ROOT/RHIZOME/BARK</span>
              <p>(turmeric, ginger, cinnamon and more)</p>
            </div>
            <div>
              <span className="spice-names">FRUIT/BERRY</span>
              <p>(chili, cardamon, black pepper and more)</p>
            </div>
          </div>
          <div className="right-container">
            <div className="block-height">
              <span className="spice-names">LEAF</span>
              <p>(mint, oregano, thyme, bayleaf and more herbs)</p>
            </div>
            <div>
              <span className="spice-names">SEED</span>
              <p>(cummin, coriander,fennel, poppy and more)</p>
            </div>
            <div className="show-all-spices">
              <span>SHOW ALL SPICES</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dropdown;
