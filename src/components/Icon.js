import React from 'react';
import PropTypes from 'prop-types';

const tuplify = object => Object.keys(object).map(key => [key, object[key]]);

const Icon = React.forwardRef(
  (
    {
      name,
      size,
      color,
      primary,
      secondary,
      white,
      tiny,
      small,
      title,
      huge,
      className,
      ...otherProps
    },
    ref,
  ) => {
    const computedClassName = `icon-${name} ${className}`;
    const sizes = { small, tiny, title, huge };
    const colors = { primary, secondary, white };
    const foundPresetSize = tuplify(sizes).find(tuple => tuple[1]);
    const fontSize = foundPresetSize ? `var(--font-${foundPresetSize[0]})` : size;
    const foundPresetColor = tuplify(colors).find(tuple => tuple[1]);
    const computedColor = foundPresetColor ? `var(--color-${foundPresetColor[0]})` : color;
    return (
      <i
        ref={ref}
        style={{ fontSize, color: computedColor }}
        className={computedClassName}
        {...otherProps}
      />
    );
  },
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  tiny: PropTypes.bool,
  small: PropTypes.bool,
  title: PropTypes.bool,
  huge: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  white: PropTypes.bool,
};

Icon.defaultProps = {
  size: 'inherit',
  color: 'inherit',
  primary: false,
  secondary: false,
  white: false,
  tiny: false,
  small: false,
  title: false,
  huge: false,
  className: '',
};

export { Icon };
