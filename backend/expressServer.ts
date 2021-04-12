const express = require('express')
const app = express()
const port: number = 4500

app.get('/', (req: any, res: any) => {
res.send('Welcome on board')
})
  
app.get('/signup', (req: any, res: any) => {
  res.send('Sign in Succesful!')
})

app.get('/signin', (req: any, res: any) => {
res.send('Sign in Succesful!')
})

app.get('/update-profile', (req: any, res: any) => {
res.send('Profile Updated!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})