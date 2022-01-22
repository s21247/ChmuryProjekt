import { useForm } from 'react-hook-form';

const api = (img) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "multipart/form-data");
    myHeaders.append("Authorization", "Bearer d5aefce36abff1703a9defd8eef170830d348a62");

    const formData = new useForm();

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: {image: img},
        redirect: 'follow'
    };

    fetch("https://api.logmeal.es/v2/image/recognition/type/v0.9", requestOptions)
        .then(response => response.text())
        .then(result => result)
        .catch(error => console.log('error', error));

}

export default api;