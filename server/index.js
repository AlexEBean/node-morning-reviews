const express = require("express")
const users = require("../users.json")

const app = express()

const port = 4338

app.use(express.json())



app.get("/api/users", (req, res) => {
    res.status(200).send(users)
})

app.get("/api/users/:id", (req, res) => {
    const {id} = req.params
    if (!id) {
        return res.status(404).send("Unable to find resource")
    } 

    const foundUser = users.find(user => user.id === +id)

    if (!foundUser) {
        return res.status(500).send("Unable to find user")
    }
    
    res.status(200).send(foundUser)
})

// query

// axios.post("/api/users?name=Alex")
// Sending data that is not required

// app.post("/api/users", (req, res) => {
//     const {name} = req.query
//     res.status(200).send(name)
// })

// // params

// // axios.post('/api/users/Alex)
// // Sending data that is required

// app.post("/api/users", (req, res) => {
//     const {name} = req.params
//     res.status(200).send(name)
// })

// // body

// // axios.post('/api/users', {name: Alex})

// app.post("/api/users", (req, res) => {
//     const {name} = req.body
//     res.status(200).send(name)
// })


app.listen(port, () => {
    console.log(`Server running on ${port}`)
})