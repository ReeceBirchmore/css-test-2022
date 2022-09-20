import "./card.scss";

const Card = (props) => {
  const { img, title, date, description } = props.data;

  return (
    <article className="card">
      <a href="">
        <picture>
          <img src={img} />
        </picture>
        <h4>{title}</h4>
      </a>
      <p>{date}</p>
      <p>{description}</p>
    </article>
  );
};

export default Card;
