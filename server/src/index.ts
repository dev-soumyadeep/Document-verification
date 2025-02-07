import express from "express"
import { Express,Request,Response } from "express"
import { issueDocumentRoute } from "./routes/issueDocument.js"
const app:Express = express()
const PORT=3000
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "hello" });
});
app.use("/document",issueDocumentRoute)


app.listen(PORT,()=>{
    console.log(`listening to PORT:${PORT}`)
})