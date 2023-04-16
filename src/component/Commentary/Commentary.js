import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../..";
import { RiStarSFill } from "react-icons/ri";
import { reviewAdd } from "../../api/review";
const Commentary = () => {
  const { lang } = useContext(Context);
  const { user } = useContext(Context);
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const navigate=useNavigate()
  const [reviews, setReviews] = useState("");
  const [reviews2, setReviews2] = useState("");
  const [reviews3, setReviews3] = useState("");
  const [reviews4, setReviews4] = useState("");
  const [reviews5, setReviews5] = useState("");
  const [numberStar, setNumberStars] = useState(0);
  const [numberStar2, setNumberStars2] = useState(0);
  const [numberStar3, setNumberStars3] = useState(0);
  const [numberStar4, setNumberStars4] = useState(0);
  const [numberStar5, setNumberStars5] = useState(0);
  const [review_text, setText] = useState("");
  const logout = () => {
    user.setIsAuth(false);
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  };
  const sendReviewStar = async () => {
    const data = await reviewAdd(
      location?.state?.ID,
      numberStar2,
      numberStar5,
      numberStar4,
      numberStar,
      review_text,
      numberStar3,
      "asdasd"
    );
    // navigate(`/productitem/${location?.state?.ID}`)
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="content-wrapper">
      <nav
        className="main-header navbar navbar-expand-md navbar-light navbar-white"
        style={{ minHeight: "100%", background: "white" }}
      >
        <div className="container-fluid">
          <button
            onClick={handleOpen}
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse order-3 collapse">
            <ul className="navbar-nav" style={{ width: "100%" }}>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  {lang?.lang === "ru" ? <>Магазин</> : <>Shop</>}
                </NavLink>
              </li>
            </ul>
            {user.isAuth ? (
              <button
                onClick={() => logout()}
                style={{ float: "right", backgroundColor: "transparent" }}
                className="nav-link"
              >
                {lang?.lang === "ru" ? <>Выход</> : <>Exit</>}
              </button>
            ) : null}
          </div>
        </div>
        {open ? (
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  {lang?.lang === "ru" ? <>Магазин</> : <>Shop</>}
                </NavLink>
              </li>
              {user.isAuth ? (
                <button
                  onClick={() => logout()}
                  style={{ float: "right", backgroundColor: "transparent" }}
                  className="nav-link"
                >
                  {lang?.lang === "ru" ? <>Выход</> : <>Exit</>}
                </button>
              ) : null}
            </ul>
          </div>
        ) : null}
      </nav>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <div className="m-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="">
            <div className="bd-example">
              <div className="modal-header">
                <div
                  className="modal-title h4"
                  id="contained-modal-title-vcenter"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      {lang.lang === "ru" ? (
                        <div>Оставить отзыв</div>
                      ) : (
                        <div>Leave a review </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="form-field">
                <label>
                  {lang.lang === "ru" ? (
                    <div>Товар: </div>
                  ) : (
                    <div>Product: </div>
                  )}
                </label>
                <div style={{ background: "#CDCDCD" }}>
                  {lang.lang === "ru"
                    ? location?.state?.nameRu
                    : location?.state?.nameEn}
                </div>
              </div>
              <div className="form-field">
                <label>
                  {" "}
                  {lang.lang === "ru" ? (
                    <div>Качество продукта: </div>
                  ) : (
                    <div>Product quality:</div>
                  )}
                </label>
                <div>
                  <div className="rating-stars">
                    <div className="d-flex">
                      <RiStarSFill
                        style={
                          numberStar === 1 ||
                          numberStar === 2 ||
                          numberStar === 3 ||
                          numberStar === 4 ||
                          numberStar === 5
                            ? { color: "yellow" }
                            : null
                        }
                        className="icon_star_comment"
                        onClick={() => setNumberStars(1)}
                      />
                      <RiStarSFill
                        style={
                          numberStar === 2 ||
                          numberStar === 3 ||
                          numberStar === 4 ||
                          numberStar === 5
                            ? { color: "yellow" }
                            : null
                        }
                        className="icon_star_comment"
                        onClick={() => setNumberStars(2)}
                      />
                      <RiStarSFill
                        style={
                          numberStar === 3 || numberStar === 4 || numberStar === 5
                            ? { color: "yellow" }
                            : null
                        }
                        className="icon_star_comment"
                        onClick={() => setNumberStars(3)}
                      />
                      <RiStarSFill
                        style={
                          numberStar === 4 || numberStar === 5
                            ? { color: "yellow" }
                            : null
                        }
                        className="icon_star_comment"
                        onClick={() => setNumberStars(4)}
                      />
                      <RiStarSFill
                        style={numberStar === 5 ? { color: "yellow" } : null}
                        className="icon_star_comment"
                        onClick={() => setNumberStars(5)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label>
                  {" "}
                  {lang.lang === "ru" ? (
                    <div>Аромат: </div>
                  ) : (
                    <div>Aroma: </div>
                  )}
                </label>
                <div className="rating-stars">
                  <div className="d-flex">
                    <RiStarSFill
                      style={
                        numberStar2 === 1 ||
                        numberStar2 === 2 ||
                        numberStar2 === 3 ||
                        numberStar2 === 4 ||
                        numberStar2 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars2(1)}
                    />
                    <RiStarSFill
                      style={
                        numberStar2 === 2 ||
                        numberStar2 === 3 ||
                        numberStar2 === 4 ||
                        numberStar2 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars2(2)}
                    />
                    <RiStarSFill
                      style={
                        numberStar2 === 3 || numberStar2 === 4 || numberStar2 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars2(3)}
                    />
                    <RiStarSFill
                      style={
                        numberStar2 === 4 || numberStar2 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars2(4)}
                    />
                    <RiStarSFill
                      style={numberStar2 === 5 ? { color: "yellow" } : null}
                      className="icon_star_comment"
                      onClick={() => setNumberStars2(5)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label>
                  {" "}
                  {lang.lang === "ru" ? (
                    <div>Текстура: </div>
                  ) : (
                    <div>Texture: </div>
                  )}
                </label>
                <div className="rating-stars">
                  <div className="d-flex">
                    <RiStarSFill
                      style={
                        numberStar3 === 1 ||
                        numberStar3 === 2 ||
                        numberStar3 === 3 ||
                        numberStar3 === 4 ||
                        numberStar3 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars3(1)}
                    />
                    <RiStarSFill
                      style={
                        numberStar3 === 2 ||
                        numberStar3 === 3 ||
                        numberStar3 === 4 ||
                        numberStar3 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars3(2)}
                    />
                    <RiStarSFill
                      style={
                        numberStar3 === 3 || numberStar3 === 4 || numberStar3 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars3(3)}
                    />
                    <RiStarSFill
                      style={
                        numberStar3 === 4 || numberStar3 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars3(4)}
                    />
                    <RiStarSFill
                      style={numberStar3 === 5 ? { color: "yellow" } : null}
                      className="icon_star_comment"
                      onClick={() => setNumberStars3(5)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label>
                  {" "}
                  {lang.lang === "ru" ? (
                    <div>Эффект от продукта: </div>
                  ) : (
                    <div>Product effect: </div>
                  )}
                </label>
                <div className="rating-stars">
                  <div className="d-flex">
                    <RiStarSFill
                      style={
                        numberStar4 === 1 ||
                        numberStar4 === 2 ||
                        numberStar4 === 3 ||
                        numberStar4 === 4 ||
                        numberStar4 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars4(1)}
                    />
                    <RiStarSFill
                      style={
                        numberStar4 === 2 ||
                        numberStar4 === 3 ||
                        numberStar4 === 4 ||
                        numberStar4 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars4(2)}
                    />
                    <RiStarSFill
                      style={
                        numberStar4 === 3 || numberStar4 === 4 || numberStar4 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars4(3)}
                    />
                    <RiStarSFill
                      style={
                        numberStar4 === 4 || numberStar4 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars4(4)}
                    />
                    <RiStarSFill
                      style={numberStar4 === 5 ? { color: "yellow" } : null}
                      className="icon_star_comment"
                      onClick={() => setNumberStars4(5)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label>
                  {" "}
                  {lang.lang === "ru" ? (
                    <div>Качество доставки: </div>
                  ) : (
                    <div>Delivery quality: </div>
                  )}
                </label>
                <div className="rating-stars">
                  <div className="d-flex">
                    <RiStarSFill
                      style={
                        numberStar5 === 1 ||
                        numberStar5 === 2 ||
                        numberStar5 === 3 ||
                        numberStar5 === 4 ||
                        numberStar5 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars5(1)}
                    />
                    <RiStarSFill
                      style={
                        numberStar5 === 2 ||
                        numberStar5 === 3 ||
                        numberStar5 === 4 ||
                        numberStar5 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars5(2)}
                    />
                    <RiStarSFill
                      style={
                        numberStar5 === 3 || numberStar5 === 4 || numberStar5 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars5(3)}
                    />
                    <RiStarSFill
                      style={
                        numberStar5 === 4 || numberStar5 === 5
                          ? { color: "yellow" }
                          : null
                      }
                      className="icon_star_comment"
                      onClick={() => setNumberStars5(4)}
                    />
                    <RiStarSFill
                      style={numberStar5 === 5 ? { color: "yellow" } : null}
                      className="icon_star_comment"
                      onClick={() => setNumberStars5(5)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label>
                  {" "}
                  {lang.lang === "ru" ? (
                    <div>Текст отзыва</div>
                  ) : (
                    <div>Text feedback </div>
                  )}
                </label>
                <div className='"mt-4'>
                  <textarea
                    rows={5}
                    style={{
                      width: "100%",
                      height: "50px",
                      padding: "10px",
                    }}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-block btn-secondary"
                onClick={sendReviewStar}
              >
                {" "}
                {lang.lang === "ru" ? <div>Отправить </div> : <div>Send </div>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commentary;
