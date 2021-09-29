import './Flat.scss';

const Flat = ({ name, price, image }) => {
  return (
    <div className="flat">
      <img className="flat-picture" alt="Flat" src={ image }/>
      <div className="flat-title">
        {price} - {name}
      </div>
    </div>
  );
}

export default Flat;
