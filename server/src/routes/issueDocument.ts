import {Router,Response,Request} from "express";
import {processPDF} from "../controllers/processPDF.js"
import { removeDirectory } from "../controllers/removeDirectory.js";
import formidable from "formidable";
import path from 'path'
import { fileURLToPath } from "url";
import * as fs from 'fs'
export const issueDocumentRoute:Router=Router()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
issueDocumentRoute.post("/issue",async(req:Request,res:Response)=>{
    try{
    const uploadTime:any=Date.now();
    const uploadDir:string = path.join(__dirname,`../../public/${uploadTime}`)
    await fs.promises.mkdir(uploadDir,{recursive:true})
    let uniqueFilename:string=''
    const form=formidable({
        uploadDir:uploadDir,
        filename(name,ext,part){
            uniqueFilename=uploadTime+"_"+part.originalFilename || name+".pdf"
            return uniqueFilename
        }
    })
    const parseForm = (req: Request): Promise<void> => {
        return new Promise((resolve, reject) => {
            form.parse(req, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    };
        
        await parseForm(req);
        let filepath:string=uploadDir+'\\'+uniqueFilename
        console.log(filepath)
        const hash: string = await processPDF(filepath,uploadTime);
        res.json({ hash });
        removeDirectory(uploadDir)
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
})
