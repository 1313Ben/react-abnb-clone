import './Flat.scss';
import clsx from 'clsx';

const Flat = ({ id, name, price, priceCurrency = 'EUR', imageUrl, handleSelect, selected }) => {
  const classes = clsx({ flat: true, selected: selected });

  return (
    <div className={classes} onClick={() => handleSelect(id)}>
      <img className="flat-picture" alt="Flat" src={ imageUrl }/>
      <div className="flat-title">
        <strong>{ priceCurrency } {price}</strong>  - {name}
      </div>
    </div>
  );
}

export default Flat;
