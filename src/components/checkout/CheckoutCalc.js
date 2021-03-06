/* eslint-disable radix */
import React from 'react';
import { Button } from 'primereact/button';
import { connect } from 'react-redux';
import { downloadPDF } from '../standardization/StepThree';
import { setCart } from '../../state/checkout/checkout.actions';

const CheckoutCalc = ({ cart, setCart, user }) => {
  const getTheTotal = () => {
    try {
      let total = 0;
      cart.forEach((key) => {
        total += parseInt(key.price) * parseInt(key.qty);
      });
      console.log(total);
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
        <Button label={cart.length > 0 ? 'Checkout' : 'No items in cart'}
        className="p-button-outlined p-button-info m-1 cursor" onClick={async (ev) => {
          ev.preventDefault();
          await downloadPDF(user);
          setCart([]);
        }}
         disabled={cart.length < 1} />
        {/* <Button className="p-button p-button-info m-1" label="Print invoice" icon="pi pi-print" /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.checkout.cart,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  setCart: (state) => dispatch(setCart(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCalc);
