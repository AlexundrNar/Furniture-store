import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductsList"

import "../styles/favourite.css";

const Favourite = () => {
  const favouriteItems = useSelector((state) => state.favourite.favouriteItems);

  return (
    <Helmet title="Favourite">
      <CommonSection title="Favourite Products" />

      <section>
        <Container>
          <Row>
              {favouriteItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to favourite</h2>
              ) : (
                <ProductsList data={favouriteItems} />
              )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};



export default Favourite;
