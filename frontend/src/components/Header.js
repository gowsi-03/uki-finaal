import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProduct } from "../actions/productActions";
import Pagination from "../components/Pagination";
import ProductCardScreen from "../screens/ProductCardScreen";
import ShoppingCategoryScreen from "../screens/ShoppingCategoryScreen";

const HomeScreen = ({ match }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, error, loading } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filterOrder =
    products &&
    products.filter((prod) =>
      prod.name.toLowerCase().includes(search.toLowerCase())
    );

  const currentItems =
    filterOrder && filterOrder.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = products && Math.ceil(products.length / itemsPerPage);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <div className="container">
            <div className="col">
              <div className="col-s-12 col-md-12 col-sm-12 col-12">
                <br/>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm bg-secondary"
                    placeholder="Search by product name"
                    name="search"
                    min="0"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-describedby="basic-addon2"
                  />
                </div>
                <ProductCardScreen currentItems={currentItems} />
                <div className="d-flex justify-content-center mt-5">
                  <Pagination
                    setCurrentPage={setCurrentPage}
                    totalItems={totalItems}
                    arrayLength={products && products.length}
                    itemsPerPage={itemsPerPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
