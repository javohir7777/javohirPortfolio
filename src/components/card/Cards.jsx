import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
const Cards = ({ image, name, id, link, skills }) => {
  const navigate = useNavigate();
  return (
    <div
      className="col-lg-4 col-md-6 h-100  mb-4  "
      key={id}
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div className="card " key={id} id="card">
        <img
          src={image}
          className="card-img-top"
          height={220}
          width={"100%"}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center fw-bolder fs-4 ">{name}</h5>
          <div className="card-footer bg-transparent border-success">
            <p className="fw-400">Technologies:</p>
            {skills.map((item) => {
              return (
                <span
                  className="btn btn-dark"
                  style={{
                    fontSize: "10px",
                    marginLeft: "2px",
                    marginBottom: "2px",
                  }}
                  key={item}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
