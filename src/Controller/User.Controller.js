const UserModel = require('../Model/User.model')


module.exports = {
    UserCreate: async (req, res) => {
        const body = req.body
        const user = new UserModel(body)
        await user.save()
        return res.send(user)
    },
    
    UserFetch: async(req, res) => {
        const user = await UserModel.find()
        return res.send(user)
    },
    UserUpdate: async(req, res) => {
        
        let status = 200
        let message = "record successfully update"
        try{

            const body = req.body
            const id = body.id
            const object = body.object

            const user = await UserModel.findOne({_id: id})
            if(user){
                // update
                await UserModel.updateOne({_id:id}, {...object})

            }else{
                throw new Error('User not found')
            }



        }catch(error){
            status = 404
            message = error.message
        }

        return res.status(status).send(message)


    }
}
