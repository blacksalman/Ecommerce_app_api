const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment', async (req, res) =>{
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'gbp',
            payment_method: 'pm_card_visa',
          });
          res.status(201).send(paymentIntent);
    } catch (error) {
        res.status(500).send(error)
    }

    // stripe.charges.create({
    //     source: req.body.tokenId,
    //     amount: req.body.amount,
    //     currency: 'INR',
    // },(stripeErr, stripeRes) =>{
    //     if(stripeErr){
    //         res.status(500).send(stripeErr)
    //     }else{
    //         res.status(200).send(stripeRes);
    //     }
    // });
});


module.exports = router;