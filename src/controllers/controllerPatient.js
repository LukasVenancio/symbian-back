const prisma = require('../prismaClient')

exports.post = (req, res, next) =>{

    const data = req.body

    prisma.tbl_patient.create({
        data,
        select:{
            id:true
        }
    }).then(

        (data)=> {

            res.status(201).json(data)
        }
    ).catch(

        (error) => {

            console.log(error)
            
            if(error.code == "P2000"){
    
                res.status(500).json({message: `A quantidade máxima de caracteres foi ultrapassada no campo ${error.meta.column_name}.`})

            }else{

                const argument = error.message.split('Argument')[1]

                if(argument){

                    const err = argument.split('\n')[0]

                    res.status(400).json({"message" : err});

                }else{

                    res.status(500).json({"message" : error});

                }   
            }
        }
    )
}

exports.get = (req, res, next) =>{

    prisma.tbl_patient.findMany()
    .then(

        (data) => {

            res.status(200).json(data)
        }
    ).catch(

        (error) => {

            console.log(error)

            const argument = error.message.split('Argument')[1]
    
            if(argument){

                const err = argument.split('\n')[0]

                res.status(400).json({"message" : err});

            }else{

                res.status(500).json({"message" : error});

            } 
        }
    )
}

exports.getById = (req, res, next) =>{

    const id = parseInt(req.params.id)

    prisma.tbl_patient.findMany({
        where:{ id }
    })
    .then(

        (data) => {

            res.status(200).json(data)
        }
    ).catch(

        (error) => {

            console.log(error)

            const argument = error.message.split('Argument')[1]
    
            if(argument){

                const err = argument.split('\n')[0]

                res.status(400).json({"message" : err});

            }else{

                res.status(500).json({"message" : error});

            } 
        }
    )
}