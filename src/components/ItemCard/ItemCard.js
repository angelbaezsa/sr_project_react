import "./ItemCard.css";

function ItemCard({ item, onClickedCard }) {
  return (
    <div className="card">
      <div className="card_title-wrapper">
        <p className="card_title">{item.name}</p>
      </div>
      <img
        className="card_image"
        src={item.imageUrl}
        alt={`illustration of ${item.name}`}
        onClick={() => {
          onClickedCard(item);
        }}
      />
    </div>
  );
}

export default ItemCard;
