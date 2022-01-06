import express from "express";

import Users from "../model/database.js";


const userRouter = express.Router();

const users =[
    {
        Name: "mary",
        Surname: "Anthony",
        Telephone: 23451,
        Email: "maryanthony@gmail.com"
       
    }
]

userRouter.get("/", async(req, res) =>{

    try{

        const allUser = await Users.find();
        res.json(allUser)

    }catch(err){
        res.json({  message: err })
    }
    });

    userRouter.post("/", async (req, res) =>{
    const user= new Users({
        Name: req.body.Name,
        Surname: req.body.Surname,
        Telephone: req.body.Telephone,
        Email: req.body.Email

    });
    try{
    
           const result =  await user.save()
           res.json({  message: `${result.Name}  record successfully added to data base`  })
      }
      catch(err){ 
        res.json({  message: err })
      }
    
   
    });



    userRouter.get("/:userId", async(req, res) =>{

        try{
    
            const oneUser = await Users.findById(req.params.userId);
            res.json(oneUser)
    
        }catch(err){
            res.json({  message: err })
        }
        });


        userRouter.delete("/:userId", async(req, res) =>{

            try{
        
                const deleteUser = await Users.remove({_id:  req.params.userId});
                res.json(deleteUser)
        
            }catch(err){
                res.json({  message: err })
            }
            });


            userRouter.patch("/:userId", async(req, res) =>{

                try{
            
                    const updateUser = await Users.updateOne({_id:  req.params.userId}, { $set: { Telephone: req.body } });
                    res.json(updateUser)
            
                }catch(err){
                    res.json({  message: err })
                }
                });
    export default userRouter;

