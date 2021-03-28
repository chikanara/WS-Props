import React from 'react'
import { Button } from 'react-bootstrap'
import  './ProductItem.css'
import PropTypes from 'prop-types'

const ProductItem = ({produit,handleClick}) => {
    // const handleClick = () => alert(`The product name is ${produit.name}`)
    return (
        <tr style={{width:"80%"}}>
            <td><Button variant="secondary" onClick={() => handleClick(produit.name)}>Click me</Button></td>
            <td><img src={produit.imgSrc} alt="produit" style={{width:"200px"}}/></td>
            <td>{produit.name}</td>
            <td>{produit.price}</td>
        </tr>
    )
}
ProductItem.propTypes={
    produit:PropTypes.object,
    handleClick:PropTypes.func
}

export default ProductItem
