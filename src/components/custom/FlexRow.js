import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FlexRow = ({ className, children, }) => {
  const cn = clsx(
    'd-flex',
    'align-items-center',
    className
  );

  return (
    <div className={cn}>{children}</div>
  );
}

FlexRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FlexRow;
