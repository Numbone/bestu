import React, { useContext, useEffect, useState } from "react";
import "../allProductCatalog/AllProductcatalog.css";

import Item from "../Item/Item";
import { productAll } from "../../api/product";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import ModalItem from "../ModalItem/ModalItem";
import { NavLink } from "react-router-dom";

const AllProductCatalog = ({ setToast }) => {
  const [active, setActive] = React.useState(false);
  const [indexPhoto, setIndexPhoto] = useState(0);
  const [product, setProduct] = useState({});
  const prev = "<";
  const next = ">";
  const { basket, lang } = useContext(Context);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState([]);
  const clickOrder = (id) => {
    basket.setBasket(id);
  };
  const getAllProducts = async () => {
    try {
      const { data } = await productAll(lang.lang);
      setProduct(data.product);
      // setLimit(Math.ceil(data.product.length/22))

      for (let i = 1; i <= Math.ceil(data.product.length / 22); i++) {
        setLimit((prevLimit) => [...prevLimit, i]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, [lang.lang]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  return (
    <>
      <div className="block-catalog">
        <div className="container">
          <div className="block__title text-center">
            {lang.lang === "ru" ? <span>Каталог</span> : <span>Catalog</span>}
          </div>

          <div className="block-catalog__items">
            <div className="row gy-4 gx-2 g-md-4">
              {product.length === undefined ? (
                <div></div>
              ) : (
                product
                  .slice((page - 1) * 22, page * 22) // extract items for current page
                  .map((item, index) => (
                    <Item
                      props={item}
                      key={index}
                      id={item.id}
                      clickOrder={clickOrder}
                      setIndexPhoto={setIndexPhoto}
                      active={active}
                      setActive={setActive}
                      index={index}
                    />
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalItem active={active} setActive={setActive}>
        <div className="toastjs-container">
          <div className="toastjs success">
            <p>
              {lang.lang === "ru"
                ? product === null
                  ? null
                  : product[indexPhoto] === undefined
                  ? null
                  : product[indexPhoto]?.name_ru
                : product === null
                ? null
                : product[indexPhoto] === undefined
                ? null
                : product[indexPhoto]?.name_en}
            </p>
            <div className="d-flex">
              <button
                type="button"
                className="toastjs-btn toastjs-btn--custom"
                onClick={() => setActive(false)}
              >
                <NavLink to="/order" style={{ color: "#fff" }}>
                  Оформить заказ{" "}
                </NavLink>
              </button>

              <button
                type="button"
                className="toastjs-btn toastjs-btn--close"
                onClick={() => setActive(false)}
              >
                Ок
              </button>
            </div>
          </div>
        </div>
      </ModalItem>
      <div className="container">
        <nav>
          <ul className="pagination">
            <li
              className="page-item"
              onClick={() => limit?.[0] !== page && setPage((page) => page - 1)}
            >
              <a className="page-link">{prev}</a>
            </li>
            {limit?.map((item) => (
              <li className="page-item" onClick={() => setPage(item)}>
                <a className="page-link">{item}</a>
              </li>
            ))}

            <li
              className="page-item"
              onClick={() =>
                limit?.[limit?.length - 1] !== page &&
                setPage((page) => page + 1)
              }
            >
              <a className="page-link">{next}</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default observer(AllProductCatalog);
