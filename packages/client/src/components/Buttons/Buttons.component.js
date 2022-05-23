import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.styles.css';
import { ReactComponent as AddToCardSVGIcon } from '../../../public/assets/326700_cart_shopping_icon.svg';

/**
 * Primary UI component for user interaction
 */
export const Buttons = ({
  addToCard,
  submit,
  shop,
  editDetails,
  continueShopping,
  reviewOrderDetails,
  checkout,
  backgroundColor,
  size,
  label,
  icon,
  ...props
}) => {
  const modeOne = addToCard
    ? 'storybook-button--addToCard'
    : 'storybook-button--addToCardSecondary';
  const modeTwo = submit
    ? 'storybook-button--submit'
    : 'storybook-button--submitSecondary';
  const modeThree = shop
    ? 'storybook-button--shop'
    : 'storybook-button--shopSecondary';
  const modeFour = editDetails
    ? 'storybook-button--editDetails'
    : 'storybook-button--editDetailsSecondary';
  const modeFive = continueShopping
    ? 'storybook-button--continueShopping'
    : 'storybook-button--continueShoppingSecondary';
  const modeSix = reviewOrderDetails
    ? 'storybook-button--reviewOrderDetails'
    : 'storybook-button--reviewOrderDetailsSecondary';
  const modeSeven = checkout
    ? 'storybook-button--checkout'
    : 'storybook-button--checkoutSecondary';
  return (
    <button
      type="button"
      className={[
        'storybook-buttons',
        `storybook-button--${size}`,
        modeOne,
        modeTwo,
        modeThree,
        modeFour,
        modeFive,
        modeSix,
        modeSeven,
      ].join(' ')}
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
  addToCard: PropTypes.bool,
  submit: PropTypes.bool,
  shop: PropTypes.bool,
  editDetails: PropTypes.bool,
  continueShopping: PropTypes.bool,
  reviewOrderDetails: PropTypes.bool,
  checkout: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
  addToCard: false,
  shop: false,
  submit: false,
  editDetails: false,
  continueShopping: false,
  reviewOrderDetails: false,
  checkout: false,
  size: 'medium',
  onClick: undefined,
  icon: <AddToCardSVGIcon />,
};
