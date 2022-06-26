import React from 'react';
import TopNavBar from '../TopNavBar/TopNavBar.component';
import BottomNavBar from '../BottomNavBar/BottomNavBar.component';
import PropTypes from 'prop-types';

function Navigation(props) {
  const { logedIn, setLogedIn } = props;
  return (
    <div>
      <TopNavBar logedIn={logedIn} setLogedIn={setLogedIn} />
      <BottomNavBar />
    </div>
  );
}

export default Navigation;

Navigation.propTypes = {
  logedIn: PropTypes.string,
  setLogedIn: PropTypes.func,
};

Navigation.defaultProps = {
  logedIn: false,
  setLogedIn: () => {},
};
