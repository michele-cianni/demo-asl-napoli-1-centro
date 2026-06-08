import { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { BRAND_PRIMARY } from '../theme.js';

const BASE = import.meta.env.BASE_URL;

const aslStyle = {
  color: BRAND_PRIMARY,
  weight: 2,
  fillColor: BRAND_PRIMARY,
  fillOpacity: 0.2,
};

const load = (url) =>
  fetch(url)
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null);

const BoundaryLayer = () => {
  const [asl, setAsl] = useState(null);

  useEffect(() => {
    load(`${BASE}data/asl-napoli-1-centro.geojson`).then((a) => {
      if (a) setAsl(a);
    });
  }, []);

  return asl ? <GeoJSON key="asl-napoli-1-centro" data={asl} style={aslStyle} /> : null;
};

export { BoundaryLayer };
