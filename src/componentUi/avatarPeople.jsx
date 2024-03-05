import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ImageAvatars() {
  return (
    <div className="flexAvatar">
      <div className="txtProfile">
        <Avatar
          className="profileSize"
          alt="Remy Sharp"
          src="https://www.biografiasyvidas.com/reportaje/bin_laden/fotos/bin_laden_420.jpg"
        />
        <span>Ing. Ramón Hernández</span>
      </div>

      <div className="txtProfile">
        <Avatar
          className="profileSize"
          alt="Travis Howard"
          src="https://c.files.bbci.co.uk/122ED/production/_106777447_amlopopularidad.jpg"
        />
        <span>Ing. Cuarta Te</span>
      </div>

      <div className="txtProfile">
        <Avatar
          className="profileSize"
          alt="Cindy Baker"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Mencho_-_2018_Wanted_Poster_%28cropped%29_%28cropped%29.PNG"
        />
        <span>Ing. Jesús Maximiliano</span>
      </div>

      <div className="txtProfile">
        <Avatar
          className="profileSize"
          alt="Cindy Baker"
          src="https://i.ytimg.com/vi/BN6RH-MItuo/maxresdefault.jpg"
        />
        <span>Ing. Raymundo González</span>
      </div>

      <div className="txtProfile">
        <Avatar
          className="profileSize"
          alt="Cindy Baker"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhxSt6DxTChFoOe3J3ywHpvcDy9e_WPk0xwtllUfR1diUpXp02oxDjqBE7bwA-kvE0Wg&usqp=CAU"
        />
        <span>Ing. CMMP</span>
      </div>
    </div>
  );
}
