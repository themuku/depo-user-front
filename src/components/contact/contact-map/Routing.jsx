import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { GANJLIK_POSITION, JET_SCHOOL_POSITION } from "../../../constants/map";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function Routing() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(GANJLIK_POSITION), L.latLng(JET_SCHOOL_POSITION)],
      routeWhileDragging: true,
      lineOptions: {
        addWaypoints: false,
        styles: [
          {
            color: "rgb(13, 126, 255)",
            weight: 5,
          },
        ],
      },
      createMarker(i, waypoint, n) {
        const marker = L.marker(waypoint.latLng, {
          draggable: false,
          icon: L.icon({
            iconUrl: "/map-marker.png",
            iconSize: [35, 35],
          }),
        });
        return marker;
      },
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
