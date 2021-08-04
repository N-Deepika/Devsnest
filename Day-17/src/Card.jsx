const Card = ({ title, Calorie }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <hr />
      <p>you have consumed {Calorie} cals today</p>
    </div>
  );
};
export default Card;
