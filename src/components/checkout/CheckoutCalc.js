import React from 'react';
import { Button } from 'primereact/button';
import { connect } from 'react-redux';

const CheckoutCalc = ({ cart }) => {
  const getTheTotal = () => {
    try {
      let total = 0;
      cart.forEach((key) => {
        total += key.price * key.qty;
      });
      return total;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };
  return (
    <div className="surface-0 p-3 m-2 shadow-4 border-round">
      <div className="flex align-items-start flex-column lg:justify-content-between lg:flex-row surface-50">
        <div>
          <div className="font-medium text-3xl text-900">Checkout</div>
          <div className="flex align-items-center text-700 flex-wrap">
            <div className="mr-5 flex align-items-center mt-3">
              <i className="pi pi-tags mr-2"></i>
              <span>Number of items : <span className="ms-1">{cart.length}</span></span>
            </div>
            <div className="mr-5 flex align-items-center mt-3">
              <i className="pi pi-wallet mr-2"></i>
              <span>Total : <span className="ms-1">{getTheTotal()}</span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex w-100 right">
        <Button label={cart.length > 0 ? 'Download' : 'No items in cart'}
        className="p-button-outlined p-button-info m-1 cursor"
         disabled={cart.length < 1} />
        {/* <Button className="p-button p-button-info m-1" label="Print invoice" icon="pi pi-print" /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.checkout.cart
});

export default connect(mapStateToProps)(CheckoutCalc);
