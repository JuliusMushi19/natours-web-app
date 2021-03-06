/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51GzBUeAnbMTYHKlqAVcWrbn2pljjoIfSNZUsLgMjXyVzD1LsliliGvvRyuG6oiEct9tisvbgVCUO8t2cI8LUgRM100sARvS7HK');

export const bookTour = async tourId => {
    try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
        sessionId: session.data.session.id
    });

    } catch(err) {
        console.log(err);
        showAlert('error', err);
    }

};