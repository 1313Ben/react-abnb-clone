import './Flat.scss';

const Flat = ({ name, price, priceCurrency = 'EUR', imageUrl }) => {
  return (
    <div className="flat">
      <img className="flat-picture" alt="Flat" src={ imageUrl }/>
      <div className="flat-title">
        <strong>{ priceCurrency } {price}</strong>  - {name}
      </div>
    </div>
  );
}

export default Flat;
