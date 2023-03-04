import {useState } from 'react';
import { Row, Col, Button, Form, Card} from 'react-bootstrap';
import './FormsItem.css';
// import ProductItem from '../ProductItem/ProductItem';
import { BsFillPencilFill, BsTrash } from "react-icons/bs";
import '../ProductItem/ProductItem.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from 'react-toastify';



function FormsItem() {
    const products = [
        {
            id: "1",
            name: "iPhone",
            price: "100.00"
        },
        {
            id: "2",
            name: "Refrigerator",
            price: "85.00"
        },
        {
            id: "3",
            name: "Table Chair Set",
            price: "105.00"
        }
    ];
    const [data, setData] = useState(products);
    const [currentId, setCurrentId] = useState('');
    const [currentName, setCurrentName] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');


    // currentId onChange
    const changeHandleCurrentId = (e) => {
        setCurrentId(e.target.value);
    }

    // currentName onChange
    const changeHandleCurrentName = (e) => {
        setCurrentName(e.target.value);
    }

    // currentPrice onChange
    const changeHandleCurrentPrice = (e) => {
        setCurrentPrice(e.target.value);
    }

    // create New Product
    const createProducts = (e) => {
        e.preventDefault();
        let dataArray = [...data]

        console.log(dataArray);
        let newItem = {
            id: currentId,
            name: currentName,
            price: currentPrice
        }
        dataArray.push(newItem);
        setData(dataArray);
        showSuccessToast(currentName);
        setCurrentId('');
        setCurrentName('');
        setCurrentPrice('');

    }

    // Delete a product
    const deleteHandler = (indx) => {
        let dataArray = [...data];
        dataArray.splice(indx, 1);
        setData(dataArray);
        showWarnToast(indx);
    }

    const showSuccessToast = (currentName) => {
        toast.success(`${currentName} Added Successsfully`, {
            icon: "🚀",
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    };

    const showWarnToast = (indx) => {
        console.log(data);
        toast.warn(`${data[indx].name} Deleted Successsfully`, {
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    };

    return (
        <div>
            <ToastContainer />
            <Card className='card-style'>
                <Card.Body>
                    <Row>
                        <Col xs={1} md={2}>
                        </Col>
                        <Col xs={10} md={8}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicPid">
                                    <Form.Label>Id</Form.Label>
                                    <Form.Control type="text" value={currentId} placeholder="Enter Product ID" onChange={changeHandleCurrentId} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPname">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={currentName} placeholder="Enter Product Name" onChange={changeHandleCurrentName} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPprice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" value={currentPrice} placeholder="Enter Product Price" onChange={changeHandleCurrentPrice} />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={createProducts}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col xs={1} md={2}>
                        </Col>
                    </Row>
                </Card.Body>

            </Card>


            {/*<ProductItem products={data}/>*/
                
                data.map((product, index) => {
                    return (
                        <Row className='product-items'>
                            <Col xs={6} md={10} className='first-column'>
                                <div>{product.id}. <span>{product.name}</span> ${product.price}</div>
                            </Col>
                            <Col><div className='edit-div icon-div'><BsFillPencilFill /></div> <div className='delete-div icon-div' onClick={() => deleteHandler(index)}><BsTrash /></div></Col>
                        </Row>
                    )
                })
            }


        </div>

    );
}

export default FormsItem;