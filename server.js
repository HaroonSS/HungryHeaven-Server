const express = require('express');
const cors = require('cors');
const fetch = require('cross-fetch');

const app = express();
const port = process.env.PORT || 2300;

app.use(cors());

// Restaurant Menu API
app.get('/api/menu', async (req, res) => {
    const { 'page-type': page_type, 'complete-menu': complete_menu, lat, lng, submitAction, restaurantId } = req.query;
    console.log(req.query);

    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=${page_type}&complete-menu=${complete_menu}&lat=${lat}&lng=${lng}&submitAction=${submitAction}&restaurantId=${restaurantId}`;


    await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'

        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('An error occurred');
        });
});

// Restaurant List API
app.get('/api/restaurants', async (req, res) => {
    const { lat, lng, page_type } = req.query;
    console.log(req.query);

    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=${page_type}`;

    await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'

        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('An error occurred');
        });
});

// Autocomplete search API
app.get('/api/autocomplete', async (req, res) => {
    const { input } = req.query;
    console.log(req.query);

    const url = `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${input}`;

    await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'

        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('An error occurred');
        });
});

// Area Restaurant recommend API by Name 
app.get('/api/addressRecommendByName', async (req, res) => {
    const { place_id } = req.query;
    console.log(req.query);

    const url = `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${place_id}`;

    await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'

        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('An error occurred');
        });
});

// Restaurant recommend API by GeoLocation
app.get('/api/addressRecommendByGeoLocation', async (req, res) => {
    const { latlng } = req.query;
    console.log(req.query);

    const url = `https://www.swiggy.com/dapi/misc/address-recommend?latlng=${latlng}`;

    await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'

        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('An error occurred');
        });
});


app.get('/', (req, res) => {
    res.json({ "test": "Server for HungryHeaven- A food ordering Web App" });
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
