import React from 'react';
import PropTypes from 'prop-types';
import './spinner.scss';

const Spinner = ({
  background,
  color,
  inline,
  label,
  size,
  children,
}) => {
  let calcSize;
  let calcBorder;

  if (size) {
    switch (size.toLowerCase()) {
      case 'sm':
      case 'small':
        calcSize = '16px';
        calcBorder = '2px';
        break;
      case 'med':
      case 'medium':
        calcSize = '48px';
        calcBorder = '5px';
        break;
      case 'lg':
      case 'large':
        calcSize = '80px';
        calcBorder = '8px';
        break;
      default:
        calcSize = '50px';
        calcBorder = '1px';
        break;
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: inline ? 'row' : 'column', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: calcSize, height: calcSize }}>
        <div className="ab-spinner">
          <div
            className="ab-spinner-icon"
            style={{
              borderColor: background,
              borderTopColor: color,
              borderWidth: calcBorder,
            }}
          />
          <div className="ab-spinner-animation" />
          {children}
        </div>
      </div>
      {label && <span className="ab-spinner-label">{label}</span>}
    </div>
  );
};

Spinner.propTypes = {
  /** The color displayed within the Spinners channel. */
  background: PropTypes.string,
  /** The color used for the Spinners indicator. */
  color: PropTypes.string,
  /** Text that will be rendered with the Spinner. */
  inline: PropTypes.bool,
  /** Text that will be rendered with the Spinner. */
  label: PropTypes.string,
  /**
   * Specifies the size of the Spinner.
   * Acceptable values are 'sm', 'small', 'med', 'medium', 'lg' and 'large'.
   * */
  size: PropTypes.string,
  children: PropTypes.node,
};

Spinner.defaultProps = {
  background: '#CCCCCC',
  color: '#3371AA',
  inline: false,
  label: '',
  size: 'small',
  children: null,
};

export default Spinner;
