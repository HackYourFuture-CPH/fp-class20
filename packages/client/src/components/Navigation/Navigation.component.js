import React from 'react';
import TopNavBar from '../TopNavBar/TopNavBar.component';
import BottomNavBar from '../BottomNavBar/BottomNavBar.component';
import PropTypes from 'prop-types';

function Navigation(props) {
  const { signedIn, setSignedIn } = props;
  return (
    <div>
      <TopNavBar signedIn={signedIn} setSignedIn={setSignedIn} />
      <BottomNavBar />
    </div>
  );
}

export default Navigation;

Navigation.propTypes = {
  signedIn: PropTypes.bool,
  setSignedIn: PropTypes.func,
};

Navigation.defaultProps = {
  signedIn: false,
  setSignedIn: () => {},
};
