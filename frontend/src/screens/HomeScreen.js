import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../components/home.css";

import whyImg from "../assets/images/why.png";
import networkImg from "../assets/images/network.png";
import Testimonal from "../components/Testimonal";
import Product from "../components/Header";
import Slider from "../components/Slider";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Experience Swiggy's superfast delivery for food delivered fresh & on time.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Customer support is one thing that we value a lot. Call us for any issues any time.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "The user can easily pick up at our baked goods at your location if preferred.",
  },
];
// import Slider from "./Slider";
const Home = () => {
  // const [category, setCategory] = useState("ALL");
  // const [allProducts, setAllProducts] = useState(products);

  // const [hotPizza, setHotPizza] = useState([]);

  // useEffect(() => {
  //   const filteredPizza = products.filter((item) => item.category === "Pizza");
  //   const slicePizza = filteredPizza.slice(0, 4);
  //   setHotPizza(slicePizza);
  // }, []);

  // useEffect(() => {
  //   if (category === "ALL") {
  //     setAllProducts(products);
  //   }

  //   if (category === "BUN") {
  //     const filteredProducts = products.filter(
  //       (item) => item.category === "BUN"
  //     );

  //     setAllProducts(filteredProducts);
  //   }

  //   if (category === "BREAD") {
  //     const filteredProducts = products.filter(
  //       (item) => item.category === "Bread"
  //     );

  //     setAllProducts(filteredProducts);
  //   }
  // }, [category]);

  return (
    <>
      <section>
        <div className="container-lg">
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Welcome to the city’s favourite online delivery menu featuring
                  some of the finest dishes from The Vethupii, Jaffna
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img justify-content-center">
                {/* <img src={heroImg} alt="hero-img" className="w-100" /> */}
                <Slider />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* <section className="pt-0">
        <Category />
      </section> */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                We give our customers the best dining experiences possible
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Product />
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                {/* <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button> */}
                {/* <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BUN" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BUN")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  BUN
                </button> */}

                {/* <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button> */}

                {/* <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button> */}
              </div>
            </Col>

            {/* {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))} */}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Vethuppi?</span>
                </h2>
                <p className="tasty__treat-desc">
                  
                </p>

                <ListGroup className="mt-4" id="back">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      We are only deliver fresh and tasty food with instance delivery 
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                    We give best quality in affodable price with added free items
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                     Order from any location we will deliver for what time you need
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
          

                <Testimonal />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
