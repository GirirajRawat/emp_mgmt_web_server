const express = require('express')
const app = express();
const port=8000;

app.get('/api/login', function(req,res){
    res.json({
        status: 'ok'
    })
})
app.listen(port, () =>
    console.log('server is running at port ${port}')
)
