import useFirestore from "../hooks/useFirestore";
import pushToCart from "../hooks/pushToCart";

function Template({collection, title}) {
    const {docs} = useFirestore(collection)
    return (
        <div>
            <h2>{title}</h2>
            {docs && docs.map((doc, i) => {
                return <div key={doc.id}>
                    <h3>{i + 1}.{doc.title}</h3>
                    {doc.description}
                    <p className="price">{doc.price} zł</p>
                    <button className="button"
                            onClick={() =>pushToCart(doc)}>Add to cart</button>
                </div>
            })}
        </div> )
}

export default Template;