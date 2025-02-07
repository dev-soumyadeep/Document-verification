import * as dotenv from "dotenv"
dotenv.config()


export const uploadFileToIPFS=async(file:File):Promise<string>=>{
  try {
    const formData = new FormData();
    formData.append("file", file);

    const request = await fetch("https://uploads.pinata.cloud/v3/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.JWT}`,
      },
      body: formData,
    });
    const response = await request.json();
    const cid:string = response.data.cid
    const url :string= `https://example-gateway.mypinata.cloud/files/${cid}`;
    return url;
    
  } catch (error) {
    console.log(error);
    return "error"
  }
}
