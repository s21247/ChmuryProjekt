import useFirestore from "../hooks/useFirestore";

function Template({collection,title}){
    const {docs} = useFirestore(collection)
    return (
        <div>
            <h2>{title}</h2>
            {
                docs && docs.map((doc,i) => {
                    return <div key={doc.id}>
                        <h3>{i+1}.{doc.title}</h3>
                        {doc.description}
                        <p className="price">{doc.price} zł</p>
                        <button className="button">Dodaj do koszyka</button>

                    </div>
                })
            }
        </div>
    )
}

export default Template;