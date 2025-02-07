import { Request,Response } from "express";
import {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    ExtractPDFParams,
    ExtractElementType,
    ExtractPDFJob,
    ExtractPDFResult,
  } from "@adobe/pdfservices-node-sdk";
  import * as fs from "fs";
  import AdmZip from "adm-zip"
  import * as dotenv from "dotenv"
  import crypto,{Hash} from 'crypto';
  import { fileURLToPath } from "url";
  import path from 'path'
  dotenv.config()

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  export const processPDF = async(filepath:string,dirName:any):Promise<string>=>{

    const credentials = new ServicePrincipalCredentials({
      clientId: process.env.PDF_SERVICES_CLIENT_ID as string,
      clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET as string
    });
    const pdfServices = new PDFServices({credentials});

    let readStream:fs.ReadStream = fs.createReadStream(filepath)
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.PDF
    });
    const params = new ExtractPDFParams({
      elementsToExtract: [ExtractElementType.TEXT],
      addCharInfo:true,
      getStylingInfo:true
    });
    
  
    const job = new ExtractPDFJob({inputAsset, params});

    const pollingURL = await pdfServices.submit({job});
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: ExtractPDFResult
    });
    if(!pdfServicesResponse.result)throw new Error("pdfServicesResponse must have a property 'result'")
    
    const resultAsset = pdfServicesResponse.result.resource;
    const streamAsset = await pdfServices.getContent({asset: resultAsset});

    const outputDir: string = path.join(__dirname, "../../public", String(dirName));
    const outputFilePath = path.join(outputDir, "ExtractTextInfoFromPDF.zip");
    console.log(`Saving asset at ${outputFilePath}`);

    const saveFile = new Promise<void>((resolve, reject) => {
      const writeStream = fs.createWriteStream(outputFilePath);
      streamAsset.readStream.pipe(writeStream);
      
      writeStream.on('finish', () => resolve());
      writeStream.on('error', reject);
  });
  
  await saveFile;

    let zip = new AdmZip(outputFilePath)
    let jsondata= zip.readAsText("structuredData.json")
    const hash:string=calculateHash(jsondata)
    return hash
  }

   const calculateHash=(data:any):string=>{
    let jsonData = typeof data === "string" ? JSON.parse(data) : data;
    const cleanData = removeField(jsonData, "ID_instance");
    const hash = crypto.createHash("sha256");
    const dataString = JSON.stringify(cleanData, Object.keys(cleanData).sort());
    hash.update(dataString.trim());
    return hash.digest('hex')
  }
  const removeField = (obj: any, fieldToRemove: string): any => {
    if (Array.isArray(obj)) {
        return obj.map((item) => removeField(item, fieldToRemove));
    } else if (typeof obj === "object" && obj !== null) {
        let newObj: any = {};
        for (let key in obj) {
            if (key !== fieldToRemove) {
                newObj[key] = removeField(obj[key], fieldToRemove);
            }
        }
        return newObj;
    }
    return obj;
};



