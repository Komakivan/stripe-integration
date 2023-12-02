
// coffee: price_1Nsq32SBw4VsGvbom8EIuBVL
// sunglasses: price_1Nsq2ISBw4VsGvboPXNfQP3O
// camera: price_1Nsq16SBw4VsGvbojIu6hUj4

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_KEY);


const app = express();
app.use(cors({ origin: '*'}));
app.use(express.static('public'))
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    try {
        const { items } = req.body;
        // console.log(items)
        const lineItems = [];
        items.forEach(item => {
            lineItems.push({
                price: item.id,
                quantity: item.quantity,
            })
        });

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
        });

        res.send(JSON.stringify({
            url: session.url
        }));

    } catch (error) {
        res.status(5000).json({error: error})
    }
})

app.listen(8000, () => {
    console.log('SERVER: listening...')
})

