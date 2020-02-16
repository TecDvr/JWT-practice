const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
    {
        username: 'zach',
        title: 'postOne'
    },
    {
        username: 'lindz',
        title: 'postTwo'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.post('/login', (req, res) => {
    //Auth User

    const username = req.body.username
    const user = { name:username }

    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

app.listen(3000)
