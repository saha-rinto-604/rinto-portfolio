"use client";
import { useState } from "react";
import { MapPin, Users, ShieldCheck } from "lucide-react";
const locations = [
  {
    name: "User location",
    x: 42,
    y: 57,
    description:
      "Location sharing gives responders context for an incident. Users can also stop sharing their location.",
    Icon: MapPin,
  },
  {
    name: "Volunteer availability",
    x: 72,
    y: 34,
    description:
      "Volunteer workflows include availability and location updates to support coordination.",
    Icon: Users,
  },
  {
    name: "Responder coordination",
    x: 23,
    y: 27,
    description:
      "Role-specific workflows connect user locations with volunteer and law-enforcement coordination.",
    Icon: ShieldCheck,
  },
];
export function ResqherMapPreview() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="map-preview">
      <div className="map-preview-top">
        <span>ResQher / Location context</span>
        <span>Illustrative interface</span>
      </div>
      <div
        className="map-canvas"
        role="group"
        aria-label="Illustrative ResQher location workflow; select a marker"
      >
        <svg
          viewBox="0 0 600 360"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <rect width="600" height="360" fill="#132330" />
          <g fill="#1d3541">
            <path d="M25 20h95v60H25zM160 15h130v75H160zM335 20h80v70h-80zM460 20h100v70H460zM25 140h95v80H25zM170 145h100v60H170zM335 140h80v80h-80zM470 140h100v75H470zM25 270h95v60H25zM175 270h100v65H175zM340 270h85v60h-85z" />
          </g>
          <path
            d="M0 112h600M0 245h600M140 0v360M305 0v360M445 0v360"
            stroke="#42606c"
            strokeWidth="7"
          />
          <path
            d="M560 0c-80 80 40 130-10 210s-15 100 50 150"
            stroke="#23566b"
            strokeWidth="34"
            fill="none"
          />
          <path
            d="M138 97h114v108h180V122"
            stroke="#7ce3db"
            strokeWidth="3"
            strokeDasharray="8 8"
            fill="none"
          />
        </svg>
        {locations.map(({ name, x, y, Icon }, index) => (
          <button
            key={name}
            className={`map-marker ${index === selected ? "selected" : ""}`}
            style={{ left: `${x}%`, top: `${y}%` }}
            aria-label={name}
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            <Icon size={20} aria-hidden="true" />
          </button>
        ))}
        <span className="map-disclaimer">
          Schematic map · no live locations
        </span>
      </div>
      <div className="map-explanation" aria-live="polite">
        <strong>{locations[selected].name}</strong>
        <p>{locations[selected].description}</p>
      </div>
    </div>
  );
}
