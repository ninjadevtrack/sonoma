import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import Form from 'react-bootstrap/Form';

function Field({
  render,
  label,
  form,
  name,
  groupClassName,
  labelClassName,
  required,
}) {
  const touched = getIn(form.touched, name);
  let error = getIn(form.errors, name);
  const hasError = !!(touched && error);
  if (typeof error === 'object') {
    [error] = Object.values(error);
  }

  return (
    <Form.Group className={groupClassName}>
      {label && (
        <Form.Label className={labelClassName}>
          {required && <span className="text-danger mr-1">*</span>} {label}
        </Form.Label>
      )}
      {render({ hasError, touched })}
      {hasError && <div className="text-sm text-danger">{error}</div>}
    </Form.Group>
  );
}

Field.propTypes = {
  required: PropTypes.bool,
  groupClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  render: PropTypes.func,
  name: PropTypes.string,
  form: PropTypes.object,
  label: PropTypes.node,
};

export default Field;
