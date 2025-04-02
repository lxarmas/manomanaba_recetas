const express = require( 'express' );
const stripe = require( 'stripe' )( 'your_stripe_secret_key' );
const cors = require( 'cors' );

const app = express();
app.use( cors() );
app.use( express.json() );

app.post( '/create-payment-intent', async ( req, res ) => {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create( {
        amount: amount * 100, // Convert to cents
        currency: 'usd',
    } );

    res.json( { clientSecret: paymentIntent.client_secret } );
} );

app.listen( 3000, () => console.log( 'Server running on port 3000' ) );
