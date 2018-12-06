module.exports= function(app,db){


    app.get('/profile/:id', (req, res) => { 
        //console.log(req.params.id);
           
            db.Stylist.findOne({
               where:{id:req.params.id},
                include:[db.Skill,db.Qualification,db.Image,db.charges,db.ratingstar]

                    
            }).then( (result) => {
               console.log(result);
                
                res.json(result)
                } 
                ); 
    });
    
    }
