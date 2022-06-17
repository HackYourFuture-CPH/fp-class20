import React, { useState } from 'react';
import './BottomNavBar.styles.css';
import PropTypes from 'prop-types';
import BottomNavigation from './Right-bottom-navigation/BottomNavigation.component';

// eslint-disable-next-line import/no-cycle
// import CategoryPage from '../../containers/CategoryPage/CategoryPage.Container';

// export const ApiName = createContext();
// export const ApiName = React.createContext();

function Header(props) {
  const { setSortProduct, setBreadcrumbs } = props;
  // const [sortName, setSortName] = useState('friut');

  const [dropDownExpanded, setDropDownExpanded] = useState(false);

  const displayMode = dropDownExpanded ? 'display' : 'no-display';
  const displayContainer = !dropDownExpanded
    ? 'whole-container-margin'
    : 'whole-container-no-margin';
  const toggleIcon = () => {
    setDropDownExpanded(!dropDownExpanded);
  };

  const budFlower = () => {
    setSortProduct(1);
    setBreadcrumbs({
      sidebar: 'Simply Spices / Spices by plant part / Flowers and Bud',
      main: 'Flowers and Bud',
    });
    setSortProduct('/bud');
    setDropDownExpanded(false);
  };
  const seed = () => {
    setSortProduct(1);
    setBreadcrumbs({
      sidebar: 'Simply Spices / Spices by plant part / seed',
      main: 'Seed',
    });
    setSortProduct('/seed');
    setDropDownExpanded(false);
  };
  const fruitBerry = () => {
    setSortProduct(1);
    setBreadcrumbs({
      sidebar: 'Simply Spices / Spices by plant part / Berry and Fruit',
      main: 'Berry and Fruit',
    });
    setSortProduct('/fruit');
    setDropDownExpanded(false);
  };
  const rootBark = () => {
    setSortProduct(1);
    setBreadcrumbs({
      sidebar: 'Simply Spices / Spices by plant part / Root Rhizome and Bark',
      main: 'Root Rhizome and Bark',
    });
    setSortProduct('/root');
    setDropDownExpanded(false);
  };
  const leaf = () => {
    setSortProduct(1);
    setBreadcrumbs({
      sidebar: 'Simply Spices / Spices by plant part / leaf',
      main: 'Leaf',
    });
    setSortProduct('/leaf');
    setDropDownExpanded(false);
  };

  const showAll = () => {
    setSortProduct(1);
    setBreadcrumbs({
      sidebar: 'Simply Spices /All Spices',
      main: 'All Spices',
    });
    setSortProduct('');
    setDropDownExpanded(false);
  };

  return (
    <div className={displayContainer}>
      {/* <ApiName.Provider value={sortName}>
        <CategoryPage />
      </ApiName.Provider> */}
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
                {/* onClick={budFlower} aria-hidden="true" */}
                <div className="block-height">
                  <span className="spice-names">
                    <button type="button" onClick={budFlower}>
                      {' '}
                      BUD/FLOWER
                    </button>
                  </span>
                  <p>(clove, caper, saffron and more)</p>
                </div>
                <div className="block-height">
                  <span className="spice-names">
                    {' '}
                    <button type="button" onClick={seed}>
                      Seed{' '}
                    </button>
                  </span>
                  <p>(cummin, coriander,fennel, poppy and more)</p>
                </div>
                <div className="block-height">
                  <span className="spice-names">
                    {' '}
                    <button type="button" onClick={fruitBerry}>
                      FRUIT/BERRY{' '}
                    </button>
                  </span>
                  <p>(chili, cardamon, black pepper and more)</p>
                </div>
              </div>
              <div className="right-container">
                <div className="block-height">
                  <span className="spice-names">
                    {' '}
                    <button type="button" onClick={rootBark}>
                      ROOT/RHIZOME/BARK{' '}
                    </button>
                  </span>
                  <p>(turmeric, ginger, cinnamon and more)</p>
                </div>
                <div className="block-height">
                  <span className="spice-names">
                    {' '}
                    <button type="button" onClick={leaf}>
                      LEAF{' '}
                    </button>
                  </span>
                  <p>(mint, oregano, thyme, bayleaf and more herbs)</p>
                </div>
                <div className="show-all-spices  block-height">
                  <span className="spice-names">
                    <button type="button" onClick={showAll}>
                      SHOW ALL SPICES{' '}
                    </button>
                  </span>
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

Header.propTypes = {
  setSortProduct: PropTypes.func,
  setBreadcrumbs: PropTypes.func,
};

Header.defaultProps = {
  setSortProduct: () => {},
  setBreadcrumbs: () => {},
};
