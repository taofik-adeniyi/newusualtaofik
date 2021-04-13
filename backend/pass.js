const bcrypt = require('bcrypt');

const hashPass = async (password) => {
    const salt = 10
    await bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err
        console.log('Saved succesfully >>', hash)
    })
}

hashPass('password')

const checkPass = async (password, username) => {
    await bcrypt.compare(password, username.pass, (err, res)=>{
        if(err) throw err
        console.log('password matches >>>', res);
    })
}
const tao = {pass: '$2b$10$AcO49sxG4oJGsBZZv2GOC.Z3UQ4rXPiYkRzWVKnmIaTG2bJr9igom'}
checkPass('password', tao)