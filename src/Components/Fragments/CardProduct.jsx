import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import PropTypes from "prop-types";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <>
            <div className="w-full max-w-sm bg-gray-800 rounded-lg border border-gray-700 shadow mx-2 flex flex-col justify-between">{children}</div>
        </>
    );
};

const Header = (props) => {
    const { image } = props;
    return (
        <div>
            <Link to="">
                <img src={image} alt="product" className="p-8 rounded-t-lg" />
            </Link>
        </div>
    );
};

const Body = ({ name, description }) => {
    return (
        <div className="px-5 pb-5 h-full">
            <Link to="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
                <p className="text-m text-white">{description}</p>
            </Link>
        </div>
    );
};

const Footer = ({ price }) => {
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span 
                className="text-xl font-bold text-white"
            >
                {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </span>
            <Button classname="bg-blue-600">Add To Cart</Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

CardProduct.propTypes = {
    children: PropTypes.node,
};
Header.propTypes = {
    image: PropTypes.string,
};
Body.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
};
Footer.propTypes = {
    price: PropTypes.string,
};

export default CardProduct;
