import Layout from '../components/layout'
import Link from 'next/link'

export default function Success() {
	return (	
	<Layout>
	<div>
	<head><title>Checkout canceled.</title></head>
    <h1>Your order has been canceled.</h1>
    <p>Forgot to add something to your cart? Shop around then come back to pay!</p>
    <h4>
        <Link href="/">
          <a>Back to home</a>
        </Link>
     </h4>
     <img
          src="https://i.imgur.com/Gt5X0RC.png"
          href="/"
          alt="Vintage T-shirts byLNA"
     />
	</div>
	</Layout>
	)
}