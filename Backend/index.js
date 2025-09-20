import express from "express"
import users from "./user.js"
const app=express()

app.get("/",(req,res)=>
{
    res.send("server is ready")
})

app.get("/api/user",(req,res)=>
{
    res.send(users)
}
)
const port=process.env.PORT || 3001
app.listen(port,()=>
{
    console.log('Serve at http://localhost:${port}')
})