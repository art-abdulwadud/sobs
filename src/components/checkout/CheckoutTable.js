import React from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { connect } from 'react-redux';
import { setCart } from '../../state/checkout/checkout.actions';

export const RemoveButton = ({ thisItem, checkoutProducts, setCheckoutProducts }) => {
  const handleClick = (ev) => {
    try {
      ev.preventDefault();
      const arr = [...checkoutProducts];
      arr.splice(arr.indexOf(thisItem), 1);
      setCheckoutProducts(arr);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Button label="Remove" icon="pi pi-trash"
      radias="round" className="dark-box-shadow" onClick={handleClick} />
  );
};

const CheckoutTable = ({ cart, setCart }) => {
  return (
    <>
      <div className="shadow-4">
        <div className="card">
          <DataTable value={cart} header="Products" responsiveLayout="scroll">
            <Column field="name" header="Name"></Column>
            <Column field="price" header="Price"></Column>
            <Column header="Remove" body={(ev) => <RemoveButton thisItem={ev} checkoutProducts={cart} setCheckoutProducts={(state) => setCart(state)} />} />
          </DataTable>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.checkout.cart
});

const mapDispatchToProps = (dispatch) => ({
  setCart: (user) => dispatch(setCart(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutTable);
