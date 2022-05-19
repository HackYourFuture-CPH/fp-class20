import React, { useState } from 'react';
import './Dropdown.styles.css';

function Dropdown() {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownList, setDropDownList] = useState('noDisplay');
  const [triangle, setTriangle] = useState('arrow-down');
  const display = () => {
    setDropDown(!dropDown);
    if (dropDown) {
      // States for Arrow down
      setDropDownList('display');
      setTriangle('arrow-up');
    } else {
      // States for Arrow down
      setDropDownList('noDisplay');
      setTriangle('arrow-down');
    }
  };
  return (
    <div>
      <div className="spicesButton">
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
        <h3>Browser spices by plant part</h3>
        <div className="itemsContanier">
          <div className="left-container">
            <div>
              <h4>BUD/FLOWER</h4>
              <p>(clove, caper, saffron and more)</p>
            </div>
            <div>
              <h4>ROOT/RHIZOME/BARK</h4>
              <p>(turmeric, ginger, cinnamon and more)</p>
            </div>
            <div>
              <h4>FRUIT/BERRY</h4>
              <p>(chili, cardamon, black pepper and more)</p>
            </div>
          </div>
          <div className="right-container">
            <div>
              <h4>LEAF</h4>
              <p>(mint, oregano, thyme, bayleaf and more herbs)</p>
            </div>
            <div>
              <h4>SEED</h4>
              <p>(cummin, coriander,fennel, poppy and more)</p>
            </div>
            <div>
              <h4>SHOW ALL SPICES</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dropdown;
