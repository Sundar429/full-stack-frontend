import React from 'react'
import CartItem from './CartItem'
import { Divider, Grid, Modal, TextField } from '@mui/material'
import AddressCard from './AddressCard'
import { Button, Card } from '@mui/material';
import Box from '@mui/material/Box';
import { ErrorMessage, Field, Form, Formik } from 'formik';
// import * as Yup from "yup";


import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, createOrder } from '../State/Order/Action';
import { useNavigate } from "react-router-dom";
import { CREATE_ORDER_SUCCESS } from '../State/Order/ActionType';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: ""
}

// const validationSchema=Yup.object.shape({
//   steetAddress:Yup.string().required("Street address is required"),
//   state:Yup.string().required("State is required"),
//   pincode:Yup.required("Pincode is required"),
//   city:Yup.string().required("City is required")

// })

const Cart = () => {

  const navigate = useNavigate();

  const createOrderUsingSelectedAddress = () => {


  }
  const handleOpenAddressModal = () => setOpen(true);
  // const handleDeliver=()=>{


  // }
  const [open, setOpen] = React.useState(false);
  const { cart, auth } = useSelector(store => store)
  const dispatch = useDispatch()
  const handleClose = () => setOpen(false);
  const handleSubmit = async (values) => {
    // if (!cart.cartItems || cart.cartItems.length === 0) {
    //   console.error('Cart is empty');
    //   return;
    // }

    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId: cart.cartItems[0].food?.restaurant.id,
        deliveryAddress: {
          fullName: auth.user?.fullName,
          streetAddress: values.streetAddress,
          city: values.city,
          state: values.state,
          postalCode: values.pincode,
          country: "india"

        }
      }
    }


    console.log("form value", values);

    try {
      // Await the response from createOrder
      const response = await dispatch(createOrder(data));

      // Check if the response contains success_url
      if (response && response.success_url) {
        // Extract the order ID from the success URL
        const successUrl = new URL(response.success_url);
        const orderId = successUrl.pathname.split("/").pop();

        // Redirect the user to the success URL with relative path
        navigate(`/payment/success/${orderId}`);
        console.log("Clearing cart state...");
        dispatch(clearCart());

                   // Remove cart data from local storage
                   console.log("Removing cart from local storage...");
        localStorage.removeItem('cart');
      } else {
        console.error("Failed to create order", response);
      }
    } catch (error) {
      console.error("Error during handleSubmit:", error);
    }


  }
  let totalPrice = 0;
  cart.cartItems.forEach(item => {
    totalPrice += item.totalPrice;
  });
  console.log('Cart Items:', cart.cartItems);
  return (
    <>

      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
          {cart.cartItems.map((item, index) => <CartItem key={item} item={item} />)}
          <Divider />
          <div className='billDetails px-5 text-sm'>
            <p className='font-extralight py-5'>Bill Details</p>
            <div className='space-y-3'>
              <div className='flex justify-between text-gray-400'>
                <p>Item Total</p>
                <p>₹{totalPrice}</p>


              </div>
              <div className='flex justify-between text-gray-400'>
                <p>Deliver Fee</p>
                <p>₹21</p>


              </div>
              <div className='flex justify-between text-gray-400'>
                <p>GST and Restaurant Charges</p>
                <p>₹33</p>


              </div>
              <Divider />
              <div className="flex justify-between text-gray-400">
                <p>Total pay</p>
                <p>₹{totalPrice + 33 + 21}</p>

              </div>

            </div>

          </div>
        </section>
        <Divider orientation="vertical" flexItem />

        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>

            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 2, 3].map((item) => <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} key={item} item={item} showButton={true} />)}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className='space-y-3 text-gray-500'>
                  <h1 className="font-semibold text-lg text-white">Add New Address</h1>

                  <Button variant="outlined" fullWidth onClick={handleOpenAddressModal}>Add</Button>

                </div>

              </Card>
            </div>
          </div>

        </section>

      </main>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field as={TextField}
                    name="streetAddress"
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                  // error={!ErrorMessage("streetAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg)=><span className="text-red-600">{msg}</span>}
                  //   </ErrorMessage>
                  // }

                  />

                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField}
                    name="state"
                    label="state"
                    fullWidth
                    variant="outlined"
                  // error={!ErrorMessage("streetAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg)=><span className="text-red-600">{msg}</span>}
                  //   </ErrorMessage>
                  // }

                  />

                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField}
                    name="city"
                    label="city"
                    fullWidth
                    variant="outlined"
                  // error={!ErrorMessage("streetAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg)=><span className="text-red-600">{msg}</span>}
                  //   </ErrorMessage>
                  // }

                  />

                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField}
                    name="pincode"
                    label="pincode"
                    fullWidth
                    variant="outlined"
                  // error={!ErrorMessage("streetAddress")}
                  // helperText={
                  //   <ErrorMessage>
                  //     {(msg)=><span className="text-red-600">{msg}</span>}
                  //   </ErrorMessage>
                  // }

                  />

                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" type="submit" color="primary">Deliver Here</Button>

                </Grid>
              </Grid>

            </Form>


          </Formik>

        </Box>
      </Modal>
    </>
  )
}

export default Cart