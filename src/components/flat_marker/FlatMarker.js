import { Marker } from 'react-mapbox-gl';
import clsx from 'clsx';
import './FlatMarker.scss';

const FlatMarker = ({ lat, lng, price, selected }) => {
  const classes = clsx({marker: true, selected: selected})
  return (
    <Marker coordinates={[lng, lat] }>
      <span className={classes}>
        CHF {price}
      </span>
    </Marker>
  );
}

export default FlatMarker;