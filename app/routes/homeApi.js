module.exports= function(app,db){


app.get('/', (req, res) => {    
        db.Stylist.findAll({
            order: [['updatedAt','DESC']],
            limit:4
                
        }).then( (result) => {
            res.json(result)
            } 
            ); 
});

}