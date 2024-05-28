import Card from "@mui/material/Card";

// eslint-disable-next-line react/prop-types
export default function CardComponent({ width, height, currCity, riskLevel }) {
  const attention = "SEGURO";

  return (
    <Card
      sx={{
        width: width,
        height: height,
        margin: 2,
        padding: 3,
      }}
    >
      <div className="flex  perc_100 ">
        {currCity.map((home) => (
          <span key={home.city} className="perc_100">
            <div className="flex">
              <h2>{home.city}</h2>

              <p className="spacer"></p>

              <p
                className={
                  riskLevel == attention
                    ? "risk_attention risk_card"
                    : "risk_danger risk_card"
                }
              >
                {home.stats.risk_level}
              </p>
            </div>

            <p>Temperatura mín : {home.stats.temperature_min}</p>

            <p>Temperatura máx : {home.stats.temperature_max}</p>

            <p>Velocidade máx do vento : {home.stats.wind_speed_max}</p>

            {home.stats.reasons && home.stats.reasons.length > 0 ? (
              <p>Razões : {home.stats?.reasons[0]}</p>
            ) : (
              <p></p>
            )}
            
          </span>
        ))}
      </div>
    </Card>
  );
}
