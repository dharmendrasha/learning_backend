// const UserModel = require('../Model/User.model')

const con = require('../database')

const MysqlQuery = (query) => {
    return new Promise((resolve, reject) => {
        con.query(query, (err, result) => {
            if(err){
                reject(err)
            }

            resolve(result)
        })
    })
}


module.exports = {
    UserCreate: async (req, res) => {
        // console.log(req)
        // res.send(req.body)
        console.log('1')
        const body = req.body

        // const user = new UserModel(body)
        // await user.save()

        const query = `INSERT INTO 'user'('id', 'name', 'role) VALUES ('NULL','${body.name}','[${body.role}]')`

       const result = await MysqlQuery(query)

       console.log('3')
        res.send('ghg')

    }
}
