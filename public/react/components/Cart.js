import React from 'react'
import { Container, Table, Row, Button } from "react-bootstrap";
import  '../stylesheets/cart.css'
const Cart = () => {
    return (
        <div>
          <Container>
            <Row>
              <div className="col-9 cartShow">
                <Table bordered hover responsive="sm">
                  <thead>
                    <tr>
                      <th>Product Img</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Sub Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </Table>
              </div>
              <div className="col-3 cartSum boxShadaw bg-light p-4">
                <h5 className="text-left mb-4 pb-2">Cart Price</h5>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="fw-normal">Tax :</h6>
                  <span>$123123</span>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <h6 className="fw-normal">SubTotal Price :</h6>
                  <span>$2002</span>
                </div>
                <div className="d-flex justify-content-between fw-bold">
                  <h6>Total Price :</h6>
                  <span>$21</span>
                </div>
                <Button variant="dark" size="md" className="mt-4 w-100">
                  pay now
                </Button>
              </div>
            </Row>
          </Container>
        </div>
      );
    }

export default Cart