const express = require('express');
const app = express();

app.use(express.json());

const port = 3001;
const host = '0.0.0.0'
const router = express.Router();

router.get('/hi', 
    async(req, res) => {
        try{
            console.log('hello world');
            res.status(200).json({ 'greeting': 'hello word' })
        }catch{ 
            console.log('there was some error');
        }
    }
);

app.use('/api/v1', router);

app.listen(port, host,  () => {
    console.log('listening on port '+port);
})

