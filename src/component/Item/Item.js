import React, { useContext, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { productImages, productImages1 } from "../../img";
import ProductImages from "../SwiperCard/ProductImages";
import { observer } from "mobx-react-lite";
import ModalItem from "../ModalItem/ModalItem";
import "./Item.css";
import { Context } from "../..";
const Item = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { lang } = useContext(Context);
  const clickIndex = () => {
    props.setActive(true);
    props.setIndexPhoto(props.index);
    props.clickOrder(props.props);
  };
  const location = useLocation();
  
  return (
    <div
      className="col-sm-6"
      style={{
        fontSize: "calc(var(--index))",
        fontFamily: "Tenor Sans,san-serif",
      }}
    >
      <ProductImages
        images={
          lang.lang === "ru" ? props.props.imagesRu : props.props.imagesEn
        }
      />
      <div
        className="block-product__info flex-1 d-flex flex-column justify-content-between"
        style={{
          // height:"7em",
          flex: "1",
          display: "flex",
          flex: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ minHeight: "3em" }}>
          <div
            className="block-product__name"
            style={{
              lineHeight: "1",
              minHeight: "0.2em",
            }}
          >
            {lang.lang === "ru" ? props.props.name_ru : props.props.name_en}
          </div>
          <div className="block-product__volume" style={{ fontSize: ".7em" }}>
            {props.props.weight} {lang?.lang === "ru" ? "мл" : "ml"}
          </div>
        </div>
        <div>
          <div
            className="block-product__price-block d-flex align-items-center"
            style={{
              marginTop: "0.5em",
              fontSize: "1.2em",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="block-product__price" style={{}}>
              {props.props.price}
              {lang.lang === "ru" ? <span> руб.</span> : <span> ruble</span>}
            </div>
          </div>

          <div
            className="block-product__btns row g-2"
            style={{
              marginTop: "0.9em",
            }}
          >
            {props?.props.count != 0 ? (
              <div className="col-6" onClick={() => clickIndex()}>
                <a
                  className="custom-btn custom-btn-dark"
                  style={{
                    display: "inline-block",
                    border: "1px solid #000",
                    width: "100%",
                    color: "#000",
                    textDecoration: "none",
                    textAlign: "center",
                    fontSize: "0.9em",
                    padding: "0.7em 0.5em",
                    background: "#000",
                    color: "#fff",
                  }}
                >
                  {lang.lang === "ru" ? (
                    <span>В корзину</span>
                  ) : (
                    <span>Add to cart</span>
                  )}
                </a>
              </div>
            ) : (
              <div className="col-6">
                <a
                  className="custom-btn custom-btn-dark"
                  style={{
                    display: "inline-block",
                    border: "1px solid #000",
                    width: "100%",
                    color: "#fff",
                    textDecoration: "none",
                    textAlign: "center",
                    fontSize: "0.9em",
                    padding: "0.7em 0.5em",
                    background: "#172027",
                    color: "#fff",
                  }}
                >
                  {lang.lang === "ru" ? (
                    <span>Продано</span>
                  ) : (
                    <span>Sold out</span>
                  )}
                </a>
              </div>
            )}
            {location.pathname === "/category/Packaging" ? null : (
              <div
                className="col-6"
                onClick={() => navigate("/productitem/" + props.props.id)}
              >
                <a
                  className="custom-btn"
                  style={{
                    display: "inline-block",
                    border: "1px solid #000",
                    width: "100%",
                    color: "#000",
                    textDecoration: "none",
                    textAlign: "center",
                    fontSize: "0.9em",
                    padding: "0.7em 0.5em",
                  }}
                >
                  {lang.lang === "ru" ? (
                    <span> Читать подробнее</span>
                  ) : (
                    <span> Read more</span>
                  )}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <ModalItem active={active} setActive={setActive}>
                <div className="toastjs-container">
                    <div className="toastjs success">
                        <p> {props.props.Name}</p>
                        <div className="d-flex">

                            <button type="button" className="toastjs-btn toastjs-btn--custom" onClick={() => setActive(false)}>
                                <NavLink to='/order' style={{ color: '#fff' }}>Оформить заказ </NavLink>
                            </button>


                            <button type="button" className="toastjs-btn toastjs-btn--close" onClick={() => setActive(false)}>
                                Ок
                            </button>

                        </div>
                    </div>
                </div>

            </ModalItem> */}
    </div>
  );
};

export default observer(Item);
