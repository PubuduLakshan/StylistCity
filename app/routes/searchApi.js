
module.exports= function(app,db){

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/search', (req, res) => {
    const sendObj = req.body.searchedObj;
    console.log(sendObj);
    db.Stylist.findAll().then( (result) => res.json(result) )
    

});

app.post('/search', (req, res) => {
    const sendObj = req.body.searchedObj;
    db.Stylist.findAll({
        where :{city:sendObj.location}
    }
    ).then( (result) => res.json(result) ); 
});


}   
    
