module.exports= function(app,db){


    app.get('/profile/:id', (req, res) => { 
        //console.log(req.params.id);
           
            db.Stylist.findOne({
               where:{id:req.params.id}
              // include:[db.Skill,db.Gallery,db.Qualification]

                    
            }).then( (result) => {
               //console.log(result);
                
                res.json(result)
                } 
                ); 
    });
    
    }
