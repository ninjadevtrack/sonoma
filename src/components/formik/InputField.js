import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Field from './Field';

function InputField({
  field,
  form,
  label,
  groupClassName,
  labelClassName,
  required,
  ...rest
}) {
  return (
    <Field
      form={form}
      name={field.name}
      label={label}
      groupClassName={groupClassName}
      labelClassName={labelClassName}
      required={required}
      render={({ touched, hasError }) => (
        <Form.Control
          isInvalid={hasError}
          isValid={touched && !hasError}
          {...field}
          {...rest}
        />
      )}
    />
  );
}

InputField.propTypes = {
  required: PropTypes.bool,
  groupClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.node,
};

export default InputField;
