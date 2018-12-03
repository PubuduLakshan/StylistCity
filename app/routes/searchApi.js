
module.exports= function(app,db){

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/search', (req, res) => {
    
    db.Stylist.findAll().then( (result) => res.json(result) )
    

})
}   
    
