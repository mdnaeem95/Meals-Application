import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
  const { meals, loading, selectMeal, addToFavorites } = useGlobalContext();
  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>No meals matched your search. Please try again.</h4>
      </section>
    );
  }

  return (
    <section className="section-center">
      {meals.map((meal) => {
        console.log(meal);
        const { idMeal, strMeal: title, strMealThumb: image } = meal;
        return (
          <article className="single-meal" key={idMeal}>
            <img
              src={image}
              alt="img"
              className="img"
              onClick={() => selectMeal(idMeal)}
            />
            <footer>
              <h5>{title}</h5>
              <button
                className="like-btn"
                onClick={() => addToFavorites(idMeal)}
              >
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
