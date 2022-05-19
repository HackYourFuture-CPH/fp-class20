import React, { useState } from 'react';
import './Dropdown.styles.css';

// function Dropdown() {
//   return (
//     <div className="drop-box">
//       <div className="dropdown-id">
//         <div className="dropdown-name">
//           <span>Spice</span>
//           <span className="dropdown-arrow">{}</span>
//         </div>

//         <div className="dropdown-menu">
//           <ul>
//             <li>
//               <h4>BUD/FLOWER</h4>
//               (clove, caper, saffron and more)
//             </li>
//             <li>
//               <h4>ROOT/RHIZOME/BARK</h4>
//               (turmeric, ginger, cinnamon and more)
//             </li>
//             <li>
//               <h4>FRUIT/BERRY</h4>
//               (chili, cardamon, black pepper and more)
//             </li>
//             <li>
//               <h4>LEAF</h4>
//               (mint, oregano, thyme, bayleaf and more herbs)
//             </li>
//             <li>
//               <h4>SEED</h4>
//               <p>(cummin, coriander,fennel, poppy and more)</p>
//             </li>
//             <li>
//               <h4>SHOW ALL SPICES</h4>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
// function Dropdown() {
//   return (
//     <div className="dropdown-name">
//       <h3>SPICES</h3>
//       <span className="drop-arrow" />

//       <div className="main-container">
//         <div className="left-container">
//           <h4>BUD/FLOWER</h4>
//           <p>(clove, caper, saffron and more)</p>
//           <h4>ROOT/RHIZOME/BARK</h4>
//           <p>(turmeric, ginger, cinnamon and more)</p>
//           <h4>FRUIT/BERRY</h4>
//           <p>(chili, cardamon, black pepper and more)</p>
//         </div>
//         <div className="right-container">
//           <h4>LEAF</h4>
//           <p>(mint, oregano, thyme, bayleaf and more herbs)</p>
//           <h4>SEED</h4>
//           <p>(cummin, coriander,fennel, poppy and more)</p>
//           <h4>SHOW ALL SPICES</h4>
//         </div>
//       </div>
//     </div>
//   );
// }
function Dropdown() {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownList, setDropDownList] = useState('noDisplay');
  const [triangleName, setTriangleName] = useState('arrow-down');
  const display = () => {
    setDropDown(!dropDown);
    if (dropDown) {
      setDropDownList('display');
      setTriangleName('arrow-up');
    } else {
      setDropDownList('noDisplay');
      setTriangleName('arrow-down');
    }
  };
  return (
    <div>
      <div className="spicesButton">
        <span className="spices-button">SPICES</span>
        <span
          className={triangleName}
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
