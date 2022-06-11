import React, { useState } from 'react';
import { ReactComponent as ArrowUp } from '../../../../public/assets/vectors/vector_arrow_up.svg';
import { ReactComponent as ArrowDown } from '../../../../public/assets/vectors/vector_arrow_down.svg';
import './Header.styles.css';
import { BottomNavigation } from './Bottom-navigation/BottomNavigation.component';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LandingSortBy } from '../LandingPageSortByPart/LandingSortBy.component';

const obj = [
  {
    path: '/all',
    exact: true,
    sideBar: () => (
      <span className="text-samll">Simply Spices / All Spices</span>
    ),
    main: () => <span className="text-big">All Spices</span>,
  },
  {
    path: '/bud-flower',
    sideBar: () => (
      <span className="text-samll">
        Simply Spices / Spices by plant part /Flower and Bud
      </span>
    ),
    main: () => <span className="text-big">Flower and Bud</span>,
  },
  {
    path: '/seed',
    sideBar: () => (
      <span className="text-samll">
        Simply Spices / Spices by plant part /Seed
      </span>
    ),
    main: () => <span className="text-big">Seed</span>,
  },
  {
    path: '/fruit-berry',
    sideBar: () => (
      <span className="text-samll">
        Simply Spices / Spices by plant part / Berry and Fruit
      </span>
    ),
    main: () => <span className="text-big">Berry and Fruit</span>,
  },
  {
    path: '/root-rhizome-bark',
    sideBar: () => (
      <span className="text-samll">
        Simply Spices / Spices by plant part / Root Rhizome and Bark
      </span>
    ),
    main: () => <span className="text-big">Root Rhizome and Bark</span>,
  },
  {
    path: '/leaf',
    sideBar: () => (
      <span className="text-samll">
        Simply Spices / Spices by plant part / Leaf
      </span>
    ),
    main: () => <span className="text-big">Leaf</span>,
  },
];

function Header() {
  const [dropDownExpanded, setDropDownExpanded] = useState(false);
  const displayMode = dropDownExpanded ? 'display' : 'no-display';
  const toggleIcon = () => {
    setDropDownExpanded(!dropDownExpanded);
  };
  return (
    <Router>
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
            <div className="sort-items">
              <span className="main-heading">Browser spices by plant part</span>

              <div className="items-container">
                <div className="left-container">
                  <Link to="/bud-flower">
                    <div className="block-height">
                      <span className="spice-names">BUD/FLOWER</span>
                      <p>(clove, caper, saffron and more)</p>
                    </div>
                  </Link>
                  <Link to="/seed">
                    <div className="block-height">
                      <span className="spice-names">SEED</span>
                      <p>(cummin, coriander,fennel, poppy and more)</p>
                    </div>
                  </Link>
                  <Link to="/fruit-berry">
                    <div className="block-height">
                      <span className="spice-names">FRUIT/BERRY</span>
                      <p>(chili, cardamon, black pepper and more)</p>
                    </div>
                  </Link>
                </div>
                <div className="right-container">
                  <Link to="/root-rhizome-bark">
                    <div className="block-height">
                      <span className="spice-names">ROOT/RHIZOME/BARK</span>
                      <p>(turmeric, ginger, cinnamon and more)</p>
                    </div>
                  </Link>
                  <Link to="/leaf">
                    <div className="block-height">
                      <span className="spice-names">LEAF</span>
                      <p>(mint, oregano, thyme, bayleaf and more herbs)</p>
                    </div>
                  </Link>
                  <Link to="/all">
                    <div className="show-all-spices  block-height">
                      <span>SHOW ALL SPICES</span>
                    </div>
                  </Link>
                </div>

                {obj.map((item) => (
                  <Routes>
                    <Route key={item.path} path={item.path} exact={item.exact}>
                      <LandingSortBy sidebar={item.sideBar} />
                    </Route>
                  </Routes>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default Header;
