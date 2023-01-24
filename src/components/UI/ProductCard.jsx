import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { favouriteActions } from "../../redux/slices/favouriteSlice";
import { toast } from "react-toastify";

import "../../styles/product-card.css";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const favouriteItems = useSelector((state) => state.favourite.favouriteItems);
  const isItemInFavourite = favouriteItems.some((favItem) => favItem.id === item.id);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
      })
    );

    toast.success("Product added to the cart");
  };

  const addAndRemoveToFavourite = (e) => {
    e.stopPropagation()
    if (isItemInFavourite) {
      dispatch(favouriteActions.deleteItem(item.id));
      toast.success("Product remove from favourite");
    } else {
      dispatch(
        favouriteActions.addItem({
          id: item.id,
          productName: item.productName,
          imgUrl: item.imgUrl,
          price: item.price,
        })
      );
     toast.success("Product added to favourite");
    }
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="product__info p-2">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span
            whileTap={{ scale: 1.2 }}
            onClick={addAndRemoveToFavourite}
          >
            {isItemInFavourite ? (
              <i className="ri-service-line"></i>
            ) : (
              <i className="ri-heart-add-fill"></i>
            )}
          </motion.span>

          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
