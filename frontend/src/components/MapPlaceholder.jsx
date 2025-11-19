import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.heat';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const HeatmapLayer = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    if (!points.length) return;

    const heatPoints = points.map(p => [p.lat, p.lon, 0.6]);

    const heat = L.heatLayer(heatPoints, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
    });

    heat.addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [points, map]);

  return null;
};

const MapPlaceholder = ({ trips }) => {
  const allPoints = trips.flatMap(t => t.points);

  return (
    <MapContainer
      center={[28.6667, 77.2167]}
      zoom={12}
      className="w-full h-full rounded-xl"
    >
      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HeatmapLayer points={allPoints} />
    </MapContainer>
  );
};

export default MapPlaceholder;
