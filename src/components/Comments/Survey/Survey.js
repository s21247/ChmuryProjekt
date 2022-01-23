import React, {useEffect, useState} from "react";
import {projectFirestore, projectStorage} from "../../../firebase-config/firebase-config";

const Survey = () => {
    const [fileUrl,setFileUrl] = useState(null);
    const [data,setData] = useState([]);
    const [isFileCheck, setIsFileCheck] = useState(false);

    const onChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = projectStorage.ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        let isFood = false;
        alert("We are processing your picture, please wait.")

        await fetch("https://us-central1-model-aria-333216.cloudfunctions.net/checkImageLabels", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": `{\"fileName\":\"${file.name}\"}`
        })
            .then(response => response.json())
            .then(result => {
                result.forEach(item => {
                    if (item.description === "Food" && item.score > 0.75)
                        isFood = true;
                })
            })
            .catch(err => {
                console.error(err);
            });
        if (isFood){
            setFileUrl(await fileRef.getDownloadURL())
        } else {
            await storageRef.child(file.name).delete();
        }
        setIsFileCheck(true)
        if (isFood){
            alert("You can submit you comment")
        } else
            alert("Your picture is not related with food")

    }


    const onSubmit = async (e) => {
        if (isFileCheck){
            e.preventDefault()

            const username = e.target.username.value;
            const comment = e.target.comment.value;

            await projectFirestore.collection("coms").doc(username).set({
                    name:username,
                    comment:comment,
                    file:fileUrl
                }
            )
            window.location.reload();
        }
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
                <input type="text" name="username" placeholder={"give name"} required={true}/>
                <input type="text" name="comment" placeholder={"Write comment"} required={true}/>
                <input type="file" onChange={onChange}/>
                <button disabled={!isFileCheck}>Submit</button>
            </form>
       <ul>
           {
               data.map(data => {
                   if (data.file === null)
                       return <li key={data.name}>
                           <h2>{data.name}</h2>
                           <p>{data.comment}</p>
                       </li>
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