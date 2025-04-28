//Testing the nft service
import {createNFT, updateNFT, deleteNFT,getNFT} from "../src/Services/nftService"

const newNft= async ()=>{

 const nft=await createNFT({
     name: "",
     id: "",
     tokenId: "",
     contractAddress: "",
     description: "",
     imageUrl: "",
     traits: null,
     creatorId: "",
     ownerId: "",
     collectionId: null,
     listedForSale: false,
     price: null,
     createdAt: new Date(),
 })

 console.log("new nft", nft);
}

newNft();


const update= async () =>{
    const id="";
    const data={
        name: "",
     id: "",
     tokenId: "",
     contractAddress: "",
     description: "",
     imageUrl: "",
     traits: null,
     creatorId: "",
     ownerId: "",
     collectionId: null,
     listedForSale: false,
     price: null,
     createdAt: new Date(),  
    };
    const updated= await updateNFT(id,data);
}

const getNft= async()=>{
    const id="";

   const get=await getNFT(id);
}

const deleteNft= async () =>{
    const id= "";
 const deleted= await deleteNFT(id);
 console.log("deleted is ", deleted);

}