import CardProduct from "../Components/Fragments/CardProduct";


const products = [
    {
        id: 1,
        image: "images/shoes-converse.jpg",
        name: "Sepatu Converse",
        price: "1.000.000",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fuga nostrum vitae facilis repellat ducimus atque, eligendi corrupti aliquid pariatur similique eius, asperiores id exercitationem.`,
    },
    {
        id: 2,
        image: "images/shoes-converse.jpg",
        name: "Sepatu Converse",
        price: "1.000.000",
        description: ` pariatur similique eius, asperiores id exercitationem.`,
    },
];

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name} description ={product.description}/>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
        </div>
    );
};

export default ProductsPage;
