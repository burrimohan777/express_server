const students = (req,res)=>{
    res.json([
        {
            name:"Raj",
            branch:"DS"
        },
        {
            name:"Aniket",
            branch:"DS"
        },
        {
            name:"Charan",
            branch:"DS"
        }
    ])
}

const poststudents = (req,res)=>{
    res.json({
        message:"New Student Added"
    })
}

module.exports = {
    students,
    poststudents
}