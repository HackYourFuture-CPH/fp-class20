/* eslint-disable no-mixed-operators */
import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.styles.css';
import { ReactComponent as AddToCardSVGIcon } from '../../../public/assets/326700_cart_shopping_icon.svg';

/**
 * Primary UI component for user interaction
 */
export const Buttons = ({ type, backgroundColor, label, icon, ...props }) => {
  // eslint-disable-next-line no-param-reassign
  // eslint-disable-next-line no-param-reassign
  // eslint-disable-next-line no-unused-expressions
  type === ('addToCart' && 'storybook-button--addToCart') ||
    ('submit' && 'storybook-button--submit') ||
    ('submitSecondary' && 'storybook-button--submitSecondary') ||
    ('shop' && 'storybook-button--shop') ||
    ('editDetails' && 'storybook-button--editDetails') ||
    ('continueShopping' && 'storybook-button--continueShopping') ||
    ('continueShopping' && 'storybook-button--continueShoppingSecondary') ||
    ('reviewOrderDetails' && 'storybook-button--reviewOrderDetails') ||
    ('checkout' && 'storybook-button--checkout') ||
    'storybook-button--reviewOrder';

  return (
    <button
      type="button"
      className={['storybook-buttons', `storybook-button--${type}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
      {icon}
    </button>
  );
};

Buttons.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-typos
  icon: PropTypes.ReactComponent,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Buttons.defaultProps = {
  backgroundColor: null,
  type: '',
  onClick: undefined,
  icon: <AddToCardSVGIcon />,
};
