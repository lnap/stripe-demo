This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Accept one time Payments with Stripe Checkout 

This demo allows one time payments for by LNA, an ecommerce business that sells vintage T-shirts. The demo includes: 
1. A checkout page consisting of a button that sends customers to a Stripe hosted checkout page where they can enter their payment details and complete their order
2. An order success page in case the payment is succesfful to inform customers that their order is complete (prebuilt by Stripe)
3. A two factor authentication modal in case the payment requires additional authentication (prebuilt by Stripe)

It sucessfully runs through the test cases (https://stripe.com/docs/payments/accept-a-payment#web-test-integration) on Stripe.com.


## How to setup so you can run the demo 

This project includes a server implementation in JavaScript (Node) and a React client implemention. It is built using the Next.js framework. 
Follow the steps to run locally. 

1. Clone the repo. 
2. Setup the server

	Open a Terminal window
	Install the Stripe Node library by typing into your Terminal: npm install --save stripe

3. Run the server:

```bash
npm run dev

```

## How to run the demo 

You should now be able to access the client app and run the demo. 

1. Open [http://localhost:3000](http://localhost:3000) with your browser. You should see an image of the proudct (T-shirt) and the Checkout button. 
2. Click the Checkout button to initiate the flow. 
3. Fill out the payment details with the test card information below to run through the 3 test cases. 

Test Cases:

1.  Happy Path: Succeeds and immediately processes the payment.
    
    Enter 4242 4242 4242 4242 as the card number.
    Enter any future date for card expiry, any 3-digit number for CVC and any billing ZIP code.
    Click Pay. 
	You’re redirected to the success page.

2.  Secure Auth: 3D Secure 2 authentication must be completed for a successful payment.
    Enter 4000000000003220 as the card number.
    Enter any future date for card expiry, any 3-digit number for CVC and any billing ZIP code.
    Click Complete. 
    You’re redirected to the success page.

3.  Failure: Always fails with a decline code of insufficient_funds.
	Enter 4000000000009995 as the card number. 
	Enter any future date for card expiry, any 3-digit number for CVC and any billing ZIP code.
	You should see an error "Your card has insufficient funds."





# stripe-demo
