import useFirestore from "../components2/hooks/useFirestore";

function Template({collection,title}){
    const {docs} = useFirestore(collection)

    return (
        <div>
            <h1>{title}</h1>
            {
                docs && docs.map((doc,i) => {
                    return <div key={doc.id}>
                        <h2>{i+1}.{doc.title}</h2>
                        {doc.description}
                        {doc.price}
                        <button onClick={() => doc.inCart = true}>Add to cart</button>
                    </div>
                })
            }
        </div>
    )
}

export default Template;