import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useRef } from "react";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

import "../styles/shop.css";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const sortRef = useRef(null)

  const handleFilter = (e) => {
    sortRef.current.value = "ascending"
    const filterValue = e.target.value;
    if (filterValue) {
      const filteredProducts = products.filter(
        (item) => item.category === filterValue
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "noFilter") {
      setProductsData(products);
    }
   
  };

  const handleSort = () => {
      setProductsData([...productsData].reverse())
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="noFilter">Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select onChange={handleSort} ref={sortRef}>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
