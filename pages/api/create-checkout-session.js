// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require('stripe')('sk_test_51HXFIyGciuM7qE15MYpqoKzKPm3fT0MQwJvh6Vbs9jUWy9P2CvrJKir9fdzOH4VMOpnrjBpgtyTnDOPDwm9ZnmUE00hF1aatbB');


export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
        line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.json({ id: session.id });
}
