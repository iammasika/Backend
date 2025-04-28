import {createCollection, updateCollection,getAllCollections,getCollectionById,removeCollection} from "../src/Services/collectionService"


const collection= async () =>{
    const create=await createCollection({
        name: "",
        id: "",
        description: null,
        createdAt: new Date,
        updatedAt: new Date,
    })
    console.log(create);
}

const update= async ()=>{
    const id= "";
    const data={}
    const upt= await updateCollection(id, data)
}


const CollectionById= async ()=>{
    const id= "";
return await getCollectionById(id)
}

const AllCollections= async ()=>{

return await getAllCollections();
}

const collectionRemoved=async ()=>{
    const id= "";
return await removeCollection(id);
}
