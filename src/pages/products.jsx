import CardProduct from "../Components/Fragments/CardProduct";

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="images/shoes-converse.jpg" />
                <CardProduct.Body />
                <CardProduct.Footer price="1.000.000" />
            </CardProduct>
        </div>
    );
};

export default ProductsPage;
