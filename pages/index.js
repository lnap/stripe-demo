import { loadStripe } from '@stripe/stripe-js';
import Layout from '../components/layout';

const stripePromise = loadStripe('pk_test_51HXFIyGciuM7qE15HVQeilTN1weq8gDuRIgll4gFYXzUcD8zW5wOt6rK7Nwrqsf05AdBKUU1ozlFRzhihCypFvdw00dJNtzglv');

export default function Home() {

  const handleClick = async(event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('/api/create-checkout-session', { method: 'POST' });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  }

  return (
    <Layout>
      <img
          src="https://i.imgur.com/xvr6feR.png"
     />
      <h5>Oversized Tiger T-shirt</h5>
      <h5>$20.00</h5>
      <button role="link" onClick={handleClick}>
        Checkout
      </button>   
    </Layout>
  )
}
