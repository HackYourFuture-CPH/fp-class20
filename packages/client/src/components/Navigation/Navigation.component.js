import React from 'react';
import TopNavBar from '../TopNavBar/TopNavBar.component';
import PropTypes from 'prop-types';
import BottomNavBar from '../BottomNavBar/BottomNavBar.component';

function Navigation(props) {
  return (
    <div>
      <TopNavBar />
      <BottomNavBar
        setSortProduct={props.setSortProduct}
        setBreadcrumbs={props.setBreadcrumbs}
      />
    </div>
  );
}

export default Navigation;

Navigation.propTypes = {
  setSortProduct: PropTypes.func,
  setBreadcrumbs: PropTypes.func,
};

Navigation.defaultProps = {
  setSortProduct: () => {},
  setBreadcrumbs: () => {},
};
