import "../../App.css";

import InfoImageComponent from "../InfoImageComponent/index"

export default function InfoComponent() {
  return (
    <div className="home_component yellow ">
      <div className="mw-800 justify-text">
        <h3>Informe-se</h3>

        <p>
          Guias de como agir em cheias, previsão do tempo, estátisticas sobre o
          tempo e outro
        </p>

        <div className="carrousel">

          <InfoImageComponent title="Dashboard" image="'../../assets/dashboard_image.png'" />
          <InfoImageComponent title="Guide" image="'../../assets/guide_image.png'" />

        </div>
      </div>
    </div>
  );
}
