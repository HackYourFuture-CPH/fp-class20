/* eslint-disable no-mixed-operators */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';
// import { ReactComponent as AddToCardSVGIcon } from '../../../public/assets/vectors/vector_cart.svg';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type,
  backgroundColor,
  label,
  icon,
  size,
  primary,
  ...props
}) => {
  // eslint-disable-next-line no-param-reassign
  // eslint-disable-next-line no-param-reassign
  // eslint-disable-next-line no-unused-expressions
  type === ('addToCart' && 'storybook-button-add-to-cart') ||
    ('submit' && 'storybook-button-submit') ||
    ('submitSecondary' && 'storybook-button-submit-secondary') ||
    ('shop' && 'storybook-button-shop') ||
    ('editDetails' && 'storybook-button-edit-details') ||
    ('continueShopping' && 'storybook-button-continue-shopping') ||
    ('continueShopping' && 'storybook-button-continue-shopping-secondary') ||
    ('reviewOrderDetails' && 'storybook-button-review-order-details') ||
    ('checkout' && 'storybook-button-checkout') ||
    'storybook-button-review-order';

  let mode = primary
    ? 'storybook-button-primary'
    : 'storybook-button-secondary';

  // eslint-disable-next-line no-return-assign
  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button-${type}`,
        `storybook-button-${size}`,
        type === '' ? mode : (mode = ''),
      ].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
      {icon !== '' && <img className="button-icon" src={icon} alt="" />}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'story']),
  /**
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

  // icon: PropTypes.string,

  // icon: PropTypes.ReactComponent, it does not work at all
  // it works as below if react component
  icon: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  type: '',
  onClick: undefined,
  primary: false,
  size: 'story',
  icon: '/assets/vectors/vector_cart.svg',
};
