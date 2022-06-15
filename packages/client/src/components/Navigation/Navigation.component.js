import React from 'react';
import TopNavBar from '../TopNavBar/TopNavBar.component';
import BottomNavBar from '../BottomNavBar/BottomNavBar.component';

function Navigation(prop) {
  return (
    <div>
      <TopNavBar />
      <BottomNavBar
        setSortProduct={prop.setSortProduct}
        setBreadcrumbs={prop.setBreadcrumbs}
      />
    </div>
  );
}

export default Navigation;
