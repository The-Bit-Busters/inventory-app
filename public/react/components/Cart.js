import React from "react";
import { Container, Table, Row, Button } from "react-bootstrap";
import "../stylesheets/cart.css";

const Cart = ({ cart }) => {
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price;
    });
    setTotal(sum);
  }, [cart]);


  return (
    <div>
      <Container className="cartContainer">
        <Row>
          <div className="col-9 cartShow"> 
            <Table bordered hover responsive="sm" style={{ tableLayout: "fixed" }}>
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody className="cartColumns">
                {cart.map(item => (
                  <tr className="cartDetails" key={item.id}>
                    <td>
                      <img className="cartImage" src={item.image} alt={item.title} style={{ maxWidth: "100%" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>1</td>
                  </tr>
                ))}
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
              <span>${total}</span>
            </div>
            <Button variant="dark" size="md" className="mt-4 w-100">
              Pay Now
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
