import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { Button } from "components/bs";
import { InputField } from "components/formik";
import validationSchema from "./schema";

const ProductForm = ({
	id,
	name,
	cost,
	isAdd,
	handleAddProduct,
	handleEditProduct,
	handleClose,
}) => {
	const handleSubmit = async (values) => {
		const { productName, productCost } = values;
		if (isAdd) {
			handleAddProduct(productName, productCost);
		} else {
			handleEditProduct(id, productName, productCost);
		}

		handleClose();
	};

	return (
		<Formik
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
			initialValues={{
				productName: name,
				productCost: cost,
			}}
		>
			{() => (
				<Form>
					<Field
						component={InputField}
						name="productName"
						type="text"
						placeholder="Product Name"
					/>
					<Field
						component={InputField}
						name="productCost"
						type="number"
						placeholder="Cost"
					/>
					<Button type="submit" className="w-100">
						Save
					</Button>
				</Form>
			)}
		</Formik>
	);
};

ProductForm.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	cost: PropTypes.number,
	isAdd: PropTypes.bool,
	handleAddProduct: PropTypes.func,
	handleEditProduct: PropTypes.func,
	handleClose: PropTypes.func,
};

ProductForm.defaultProps = {
	id: 0,
	name: "",
	cost: 0,
	isAdd: true,
	handleAddProduct: () => {},
	handleEditProduct: () => {},
	handleClose: () => {},
};

export default ProductForm;
