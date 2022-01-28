import React, {useEffect, useRef, useState} from "react";
import {auth, projectFirestore, projectStorage} from "../../../firebase-config/firebase-config";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import {onAuthStateChanged, signInAnonymously} from "@firebase/auth";
import '../../styles/Survey.css'

const Survey = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const [data, setData] = useState([]);
    const [isFileCheck, setIsFileCheck] = useState(false);
    const [token, setToken] = useState(null);
    const reRef = useRef(null)

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
        if (isFood) {
            setFileUrl(await fileRef.getDownloadURL())
        } else {
            await storageRef.child(file.name).delete();
        }
        const value = await reRef.current.executeAsync();
        setToken(value)
        setIsFileCheck(true)
        if (isFood) {
            alert("You can submit you comment")
        } else
            alert("Your picture is not related with food")

    }

    const onSubmit = async (e) => {
        //console.log(token);

        signInAnonymously(auth)
            .then(result => result.providerId)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const id = user.uid;
                console.log(`USER UID: ${user.uid}`)
                console.log(`USER ID: ${id}`)
                console.log(user)

                axios.get(`https://us-central1-model-aria-333216.3.net/sendRecaptcha?token=${token}`)
                    .then(console.log)

                if (isFileCheck) {
                    e.preventDefault()
                    const username = e.target.username.value;
                    const comment = e.target.comment.value;

                    await projectFirestore.collection("coms").doc(id).set({
                            id: id,
                            name: username,
                            comment: comment,
                            file: fileUrl
                        }
                    )
                }
            }
        });


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
    }, [])
    return (
        <div className={"table_survey"}>
            <form onSubmit={onSubmit}>
                <div className={"frame_survey"}>
                <input type="text" name="username" placeholder={"give name"} required={true}/>
                <input type="text" name="comment" placeholder={"Write comment"} required={true}/>
                <input className={"posting_file"} type="file" onChange={onChange}/>
                <button disabled={!isFileCheck}>Submit</button>
                </div>

                <ReCAPTCHA
                    sitekey={process.env.REACT_APP_SECRET_KEY}
                    ref={reRef}
                    size={"invisible"}
                />
            </form>
            <ul>
                {
                    data.map(data => {
                        if (data.file === null)
                            return <li key={data.id}>
                                <div className={"above_survey"}>
                                <h2>{data.name}</h2>
                                <p>{data.comment}</p>
                                </div>
                            </li>
                        return <li key={data.id}>
                            <div className="above_survey">
                            <h2>{data.name}</h2>
                            <p>{data.comment}</p>
                            </div>
                            <img className={"img_survey"} src={data.file} alt={"picture"}/>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}


export default Survey;