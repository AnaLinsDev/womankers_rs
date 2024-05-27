import CardComponent from "../../components/Dashboard/CardComponent/index";

import cities from "./cities";

import axios from "axios";

export default function Dashboard() {
  /*
  const [loading, setLoading] = useState([]);
  const [citiesPlaceholder, setCitiesPlaceholder] = useState([]);

  async function getCities(e) {
    setLoading(true);

    e.preventDefault();

    try {

      const response = await axios({
        url: `xxx`,
        method: "get",
      });

      setCitiesPlaceholder(response);

    } catch (error) {

      console.log(error);
      
      setCitiesPlaceholder([]);

    }

    setLoading(false);
  }
  */

  return (
    <div>
      <h2 className="title">Cidades</h2>

      <div className="flex_wrap ma-40 center">
        {cities.map((currCity) => (
          <CardComponent
            key={currCity.city}
            width={300}
            height={300}
            currCity={[currCity]}
            riskLevel={currCity.stats.risk_level}
          ></CardComponent>
        ))}
      </div>
    </div>
  );
}
