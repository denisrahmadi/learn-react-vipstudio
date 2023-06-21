import Button from "../Components/Elements/Button";
import CardProduct from "../Components/Fragments/CardProduct";
import Counter from "../Components/Fragments/Counter";


const products = [
    {
        id: 1,
        image: "images/shoes-converse.jpg",
        name: "Sepatu Converse",
        price: 1000000,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt fuga nostrum vitae facilis repellat ducimus atque, eligendi corrupti aliquid pariatur similique eius, asperiores id exercitationem.`,
    },
    {
        id: 2,
        image: "images/hoka.png",
        name: "Sepatu Hoka",
        price: 2000000,
        description: ` pariatur similique eius, asperiores id exercitationem.`,
    },
];

const email = localStorage.getItem('email')

const ProductsPage = () => {
    function handleLogout(){
      localStorage.removeItem('email')
      window.location.href = '/login'
    }
    return (
        <>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-red-700" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name} description={product.description} />
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
            <div className="flex w-100 justify-center">
                <Counter />
            </div>
        </>
    );
};

export default ProductsPage;
