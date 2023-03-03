import { useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import './ProductItem.css';
import { BsFillPencilFill, BsTrash } from "react-icons/bs";

function ProductItem(props) {
    const [products, setProducts] = useState([...props.products])
    console.log(products);
    const deleteHandler = (indx) => {
        let products = [...props];
        products.splice(indx, 1);
        setProducts(products);
    }

    return (
        products.map((product, index)=>{
            return (
            <Row className='product-items'>
            <Col xs={6} md={10} className='first-column'>
                <div>{product.id}. <span>{product.name}</span> ${product.price}</div>
            </Col>
            <Col><div className='edit-div icon-div'><BsFillPencilFill/></div> <div className='delete-div icon-div' onClick={()=>deleteHandler(index)}><BsTrash/></div></Col>
            </Row>
            )
        })
    )
}

export default ProductItem;