import React from "react";
import PropTypes from "prop-types";

function Food(props) {
  return (
    <div>
      <h2>I like {props.name}</h2>
      <h4>Rating : {props.rating} / 5.0</h4>
      <img src={props.pictures} alt={props.name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    name: "Bank",
    image: "./img/salad.JPG",
    rating: 5,
  },
  {
    name: "Salad",
    image: "./img/salad.JPG",
    rating: 5,
  },
];

function App() {
  return (
    <div>
      <h1>hello Black-Label!!!!!!!</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} pictures={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
