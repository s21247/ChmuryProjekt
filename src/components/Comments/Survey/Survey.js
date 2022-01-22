import React, {useEffect, useState} from "react";
import {projectFirestore, projectStorage} from "../../../firebase-config/firebase-config";
import api from "../../hooks/api";
import Api from "../../hooks/api";
import {useForm} from "react-hook-form";

const Survey = () => {
    const [fileUrl,setFileUrl] = useState(null)
    const [image,setImage] = useState(null)
    const [data,setData] = useState([]);
    const [result,setResult] = useState({});

    const onChange = async (e) => {
        setImage(e.target.files[0]);
        const file = e.target.files[0];
        const storageRef = projectStorage.ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)

        setFileUrl(await fileRef.getDownloadURL())
        }

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", image);
        const myHeaders = new Headers();
        // myHeaders.append("Content-Type", "multipart/form-data");
        myHeaders.append("Authorization", "Bearer d5aefce36abff1703a9defd8eef170830d348a62");


        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'
        };
        let obj;
        await fetch("https://api.logmeal.es/v2/image/recognition/type/v0.9", requestOptions)
            .then(response => response.json())
            .then(result => obj = result)
            .catch(error => console.log('error', error));
        console.log(obj);


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