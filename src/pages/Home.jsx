import { useDispatch, useSelector } from "react-redux";
import {
  addCard,
  deleteCard,
  editCard,
  moveToNextCard,
  moveToPrevCard,
} from "../store/cardReducer";
import { useState } from "react";
import { successToast, warningToast } from "../helpers/toasterMessages/Toaster";

const Home = () => {
  const dispatch = useDispatch();
  const [cardEditId, setCardEditId] = useState();
  const cardData = useSelector((card) => card.cardData);
  const [cardText, setCardText] = useState("");

  const handleAddCard = () => {
    console.log("add clicked");
    if (!cardText) {
      return warningToast("Input field is required");
    }
    dispatch(addCard(cardText));
    setCardText("");
  };

  const handleEdit = (id, text) => {
    setCardEditId(id);
    setCardText(text);
  };

  const handleCardEdit = () => {
    console.log("edit clicked");
    dispatch(editCard({ id: cardEditId, text: cardText }));
    setCardEditId();
    setCardText("");
    successToast("card updated successfully");
  };

  const handleDelete = (id) => {
    dispatch(deleteCard(id));
    setCardText("");
  };

  const handleNext = (cardStatus, id) => {
    dispatch(moveToNextCard({ cardStatus, id }));
  };

  const handlePrev = (cardStatus, id) => {
    dispatch(moveToPrevCard({ cardStatus, id }));
  };

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h1 className="mt-3">Home</h1>
        <div className="d-flex gap-3 mt-3">
          <input
            value={cardText}
            type="text"
            onChange={(event) => setCardText(event.target.value)}
            placeholder="type-text"
            className="bg-transparent border focus-shadow-none focus-outline-none text-white"
          />
          <button
            className="btn btn-secondary"
            onClick={cardEditId ? handleCardEdit : handleAddCard}
          >
            {cardEditId ? "Edit Card" : "Add Card"}
          </button>
        </div>
      </div>
      {/* cards */}
      <div className="d-flex justify-content-between gap-2 mt-5 p-3">
        <div className="border overflow-scroll text-card p-3">
          {cardData
            ?.filter((item) => item.status === "card-1")
            ?.map((item, index) => (
              <div key={index} className="card-content px-2 mb-3 border">
                <p className="text-center">{item.cardText}</p>
                <div className="d-flex gap-2 flex-wrap justify-content-between">
                  <button className="btn btn-secondary" disabled>
                    back
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleNext("card-2", item.id)}
                  >
                    next
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleEdit(item.id, item.cardText)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDelete(item.id)}
                  >
                    del
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="border overflow-scroll text-card p-3">
          {cardData
            ?.filter((item) => item.status === "card-2")
            ?.map((item, index) => (
              <div key={index} className="card-content px-2 mb-3 border">
                <p className="text-center">{item.cardText}</p>
                <div className="d-flex gap-2 flex-wrap justify-content-between">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handlePrev("card-1", item.id)}
                  >
                    back
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleNext("card-3", item.id)}
                  >
                    next
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleEdit(item.id, item.cardText)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDelete(item.id)}
                  >
                    del
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="border overflow-scroll text-card p-3">
          {cardData
            ?.filter((item) => item.status === "card-3")
            ?.map((item, index) => (
              <div key={index} className="card-content px-2 mb-3 border">
                <p className="text-center">{item.cardText}</p>
                <div className="d-flex gap-2 flex-wrap justify-content-between">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handlePrev("card-2", item.id)}
                  >
                    back
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleNext("card-4", item.id)}
                  >
                    next
                  </button>{" "}
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleEdit(item.id, item.cardText)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDelete(item.id)}
                  >
                    del
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="border overflow-scroll text-card p-3">
          {cardData
            ?.filter((item) => item.status === "card-4")
            ?.map((item, index) => (
              <div key={index} className="card-content px-2 mb-3 border">
                <p className="text-center">{item.cardText}</p>
                <div className="d-flex gap-2 flex-wrap justify-content-between">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handlePrev("card-3", item.id)}
                  >
                    back
                  </button>
                  <button
                    disabled
                    className="btn btn-secondary not-allowed"
                    onClick={() => handleNext("card-4", item.id)}
                  >
                    next
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleEdit(item.id, item.cardText)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDelete(item.id)}
                  >
                    del
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
