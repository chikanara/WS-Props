import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "../productItem/ProductItem";
import PropTypes from "prop-types";

const ProductList = ({ produits }) => {
  const handleClick = (name) => alert(`The product is ${name}`);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {produits.map((produit, index) => (
          <ProductItem
            key={index}
            produit={produit}
            handleClick={handleClick}
          />
        ))}
      </tbody>
    </Table>
  );
};
ProductList.propTypes = {
  produits: PropTypes.array
};
export default ProductList;
