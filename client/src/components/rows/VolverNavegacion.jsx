import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";

function VolverNavegacion({ link, name }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`container-volver ${isHovered ? "hovered" : ""}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <HiChevronLeft className="icon" />
      <button
        className="volver"
        onClick={() => {
          navigate(link);
        }}
      >
        {name}
      </button>
    </div>
  );
}

export default VolverNavegacion;
