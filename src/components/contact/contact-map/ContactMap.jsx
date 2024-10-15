import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Routing from "./Routing";
import { JET_SCHOOL_POSITION } from "../../../constants/map";

export default function ContactMap() {
  return (
    <MapContainer
      style={{ height: 450, borderRadius: "20px", zIndex: 2 }}
      center={JET_SCHOOL_POSITION}
      zoom={10}
      scrollWheelZoom
    >
      <TileLayer
        attribution="&copy; JET-SCHOOL MCE-2"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing />
    </MapContainer>
  );
}

// https://codesandbox.io/p/sandbox/lroutingcontrol-on-react-leaflet-v3-with-hooks-nbu6x?file=%2Fsrc%2FRouting.jsx%3A1%2C1-27%2C1
