const express = require('express');
const axios = require('axios');

const app = express();

const clientId = '523f6307ec061d563a89';
const clientSecret = '6a74c1568bd259c26fd5e1da833a1cca13ec1905';



// app.get('/oauthToken', (req, res) => {
//     const body = {
//         client_id: clientId,
//         client_secret: clientSecret,
//         code: req.query.code
//     };

//     const opts = { headers: { accept: 'application/json' } };
//     axios.post('https://unsplash.com/oauth/token', body, opts).
//         then(res => res.data['access_token']).
//         then(_token => {
//             console.log('My token:', _token);

//             res.json({ token: _token });
//         }).
//         catch(err => res.status(500).json({ message: err.message }));
// });

app.post('/login', (req, res) => {
    console.log(req);
})

app.listen(9000);
console.log('App listening on port 9000');