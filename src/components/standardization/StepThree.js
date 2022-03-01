/* eslint-disable require-unicode-regexp */
/* eslint-disable prefer-named-capture-group */
/* eslint-disable id-length */
/* eslint-disable max-statements */
import React from 'react';
import { Button } from 'primereact/button';
import { degrees, PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { connect } from 'react-redux';
import { navigate } from 'gatsby-link';
import { pdfString } from '../pdf';
import { setCart } from '../../state/checkout/checkout.actions';

export const downloadPDF = async (user) => {
  try {
    const b64 = pdfString;
    const pdfDoc = await PDFDocument.load(b64);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const pages = pdfDoc.getPages();
    pages.forEach((page) => {
      const { height } = page.getSize();
      page.drawText(`
      All Rights Reserved ${new Date(Date.now()).getFullYear()}\n
      Licensed by: Somali Bureau of Standards to ${user.displayName ? user.displayName : user.email.match(/^([^@]*)@/)[1]}\n
      Reference Number: 13421133 Date: ${new Date(Date.now()).toDateString()} \n
      Single-User License only. \n
      Any forms of redistribution are strictly prohibited and may result in legal action. 
      `, {
        x: 220,
        y: height / 2 + 300,
        size: 20,
        font: helveticaFont,
        color: rgb(0.211, 0.211, 0.211),
        opacity: 0.3,
        rotate: degrees(-90)
      });
    });
    const pdfBytes = await pdfDoc.save();
    const bytes = new Uint8Array(pdfBytes);
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const docUrl = URL.createObjectURL(blob);
    console.log(docUrl);
    const link = document.createElement('a');
    link.href = docUrl;
    link.download = 'one.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  } catch (error) {
    console.log(error.message);
  }
};

const StepThree = ({ cart, setCart, user }) => {
  return (
    <div className="surface-card shadow-4 border-round p-4" id="step-three">
      <div className="flex align-items-center justify-content-between mb-3">
        <div className="text-900 font-medium text-xl">Somali Standards Catalogue</div>
      </div >
      <ul className="list-none p-0 m-0">
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
          <div className="flex align-items-start mr-0 lg:mr-5">
            <div>
              <span className="text-900 font-medium block mb-2 cursor">Edible soya bean oil</span>
              <div className="text-700 mb-2">35 pages</div>
            </div>
          </div>
          <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
            <Button label="Add to Cart" className="p-button-rounded linear-bg-h m-1"
            icon="pi pi-shopping-cart" onClick={(ev) => {
              ev.preventDefault();
              user && user.id ? null : navigate('/login');
              const arr = [...cart];
              user && user.id ? arr.push({ pdf: pdfString, name: 'Edible soya bean oil', price: '300', qty: '1' }) : null;
              setCart(arr);
            }} />
          </span>
        </li>
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
          <div className="flex align-items-start mr-0 lg:mr-5">
            <div>
              <span className="text-900 font-medium block mb-2">Black Tea</span>
              <div className="text-700">10 pages</div>
            </div>
          </div>
          <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
            <Button label="Add to Cart" className="p-button-rounded linear-bg-h m-1"
            icon="pi pi-shopping-cart" onClick={(ev) => {
              ev.preventDefault();
              user && user.id ? null : navigate('/login');
              const arr = [...cart];
              user && user.id ? arr.push({ pdf: pdfString, name: 'Black Tea', price: '300', qty: '1' }) : null;
              setCart(arr);
            }} />
          </span>
        </li>
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
          <div className="flex align-items-start mr-0 lg:mr-5">
            <div>
              <span className="text-900 font-medium block mb-2">Green Tea</span>
              <div className="text-700">16 pages</div>
            </div>
          </div>
          <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
            <Button label="Add to Cart" className="p-button-rounded linear-bg-h m-1"
            icon="pi pi-shopping-cart" onClick={(ev) => {
              ev.preventDefault();
              user && user.id ? null : navigate('/login');
              const arr = [...cart];
              user && user.id ? arr.push({ pdf: pdfString, name: 'Green Tea', price: '300', qty: '1' }) : null;
              setCart(arr);
            }} />
          </span>
        </li>
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
          <div className="flex align-items-start mr-0 lg:mr-5">
            <div>
              <span className="text-900 font-medium block mb-2">Pasta Products</span>
              <div className="text-700">18 pages</div>
            </div>
          </div>
          <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
            <Button label="Add to Cart" className="p-button-rounded linear-bg-h m-1"
            icon="pi pi-shopping-cart" onClick={(ev) => {
              ev.preventDefault();
              user && user.id ? null : navigate('/login');
              const arr = [...cart];
              user && user.id ? arr.push({ pdf: pdfString, name: 'Pasta Products', price: '300', qty: '1' }) : null;
              setCart(arr);
            }} />
          </span>
        </li>
        <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
          <div className="flex align-items-start mr-0 lg:mr-5">
            <div>
              <span className="text-900 font-medium block mb-2">Brown Rice</span>
              <div className="text-700">20 pages</div>
            </div>
          </div>
          <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
            <Button label="Add to Cart" className="p-button-rounded linear-bg-h m-1"
            icon="pi pi-shopping-cart" onClick={(ev) => {
              ev.preventDefault();
              user && user.id ? null : navigate('/login');
              const arr = [...cart];
              user && user.id ? arr.push({ pdf: pdfString, name: 'Brown Rice', price: '300', qty: '1' }) : null;
              setCart(arr);
            }} />
          </span>
        </li>
      </ul>

      <div className="flex w-full relative align-items-center justify-content-center my-3 px-4">
        <div className="border-top-1 border-300 top-50 left-0 absolute w-full"></div>
        <div className="px-2 z-1 surface-0 flex align-items-center">
          <span className="text-900 font-medium"><Button label="Show all" className="p-button-rounded linear-bg-h m-1"
            onClick={() => console.log('hello')} /></span>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StepThree);
