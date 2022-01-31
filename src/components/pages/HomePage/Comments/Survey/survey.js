import React, {useEffect, useRef, useState} from "react";
import {db, storage} from "../../../../../firebase-config/firebase-config";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {getAuth, onAuthStateChanged, signInAnonymously, signOut} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import ReCAPTCHA from "react-google-recaptcha";
import useFirestore from "../../../../Hooks/useFirestore";
import '../../../../styles/survey.css'
import axios from "axios";

const Survey = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const [token, setToken] = useState('');
    const [data, setData] = useState([]);
    const {docs} = useFirestore('coms');
    const [isReadyToSend, setIsReadyToSend] = useState(false);
    const auth = getAuth();
    const reRef = useRef(null)

    const onChange = async (e) => {
        const file = e.target.files[0];
        const fileRef = ref(storage, file.name);

        await signInAnonymously(auth)
            .then(() => {
                console.log("Sign In Anonymously")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Code: " + errorCode);
                console.log("Error Message: " + errorMessage);
            });

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                uploadBytes(fileRef, file).then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                    getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                        await setFileUrl(downloadURL);
                        setIsReadyToSend(true);
                    })
                }).catch(console.log);
            }
        })

        const value = await reRef.current.executeAsync();
        setToken(value)
    }

    const onSubmit = (e) => {


        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                e.preventDefault();
                const username = e.target.username.value;
                const comment = e.target.comment.value;

                await setDoc(doc(db, "tempComs", uid), {
                    id: uid,
                    name: username,
                    comment: comment,
                    file: fileUrl
                });

                signOut(auth).then(console.log);
            }
        })

        let score;
        axios.get
        (`https://us-central1-model-aria-333216.3.net/sendRecaptcha?token=${token}`)
            .then(response => score = response.data)
        console.log(score)
    }

    useEffect(() => {
        setData(docs);
    }, [docs])


    return (
        <div className="table_survey">
            <form onSubmit={onSubmit}>
                <div className={"frame_survey"}>
                    <input className="bar_survey_name" type="text" name="username" placeholder={"Enter username"} required={true}/>
                    <input className="bar_survey_comment" type="text" name="comment" placeholder={"Write your comment"} required={true}/>
                    <input className="button_survey" type="file" onChange={onChange} required={true}/>
                    <button className="posting_file_submit" disabled={!isReadyToSend}>Submit</button>
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
                        if (!data.file)
                            return <li key={data.id}>
                                <div className="above_survey">
                                    <h2>User:{data.name}</h2>
                                    <p>Comment:{data.comment}</p>
                                </div>
                            </li>
                        return <li key={data.id}>
                            <div className="above_survey">
                                <h2>User: {data.name}</h2>
                                <p>Comment: {data.comment}</p>
                            </div>
                            <img className="img_survey" src={data.file} alt={"picture"}/>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}


export default Survey;