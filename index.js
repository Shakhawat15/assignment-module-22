const app=require("./app");
const PORT = process.env.RUNNING_PORT || 8080;
app.listen(PORT,function () {
    console.log(`App Run ${PORT}`)
})