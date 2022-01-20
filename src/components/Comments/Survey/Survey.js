import React, {useEffect, useState} from "react";
import {projectFirestore, projectStorage} from "../../../firebase-config/firebase-config";

const Survey = () => {
    const [fileUrl,setFileUrl] = useState(null)
    const [data,setData] = useState([])

    const onChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = projectStorage.ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
        }

    const onSubmit = async (e) => {
        e.preventDefault()
        const username = e.target.username.value;
        const comment = e.target.comment.value;
        await projectFirestore.collection("coms").doc(username).set({
            name:username,
            comment:comment,
            file:fileUrl
            }
        )
    }
    useEffect(() => {
        const fetchData = async () => {
            const commentsCollection = await projectFirestore
                .collection("coms").get()
            setData(commentsCollection.docs.map(doc => {
                return doc.data()
            }))
        }
        fetchData()
    },[])
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" name="username" placeholder={"give name"}/>
                <input type="text" name="comment" placeholder={"Write comment"}/>
                <input type="file" onChange={onChange}/>
                <button>Submit</button>
            </form>
       <ul>
           {
               data.map(data => {
                   return <li key={data.name}>
                       <h2>{data.name}</h2>
                       <p>{data.comment}</p>
                       <img src={data.file} alt={"picture"}/>
                   </li>
               })
           }
       </ul>
        </>
    )
    }


export default Survey;