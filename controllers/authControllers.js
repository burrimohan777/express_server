const login = (req,res)=>{
    res.json({
        message : "Login"
    })
}
const signup = (req,res)=>{
    res.json({
        message : "SignUp"
    })
}

module.exports = {
    login,
    signup
}
