import React, { useEffect } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import CardComponent from "../../components/Dashboard/CardComponent/index";

import citiesFiltered from "./cities";
import axios from "axios";

export default function Dashboard() {
  const [listCities, setListCities] = React.useState([]);
  const [status, setStatus] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const citiesFilter = [...citiesFiltered];

  const statusList = [
    { name: "Todos" },
    { name: "Perigo" },
    { name: "Seguro" },
  ];

  async function loadData() {
    setLoading(true);
    var hasStatusFilter = false;
    var path = "https://informa-clima.onrender.com/locations/rs/filter";

    if (status == "" || cidade == "") {
      if (status == "") {
        setStatus(statusList[0].name);
      }
      if (cidade == "") {
        setCidade(citiesFilter[0].name);
      }
    }

    if (!(statusList[0].name == status || status == "")) {
      path = path + `?status=${status.toUpperCase()}`;
      hasStatusFilter = true;
    }

    if (!(citiesFilter[0].name == cidade || cidade == "")) {
      if (hasStatusFilter) {
        path = path + "&";
      } else {
        path = path + "?";
      }

      path = path + `city=${cidade}`;
    }

    if (!loading) {
      await axios
        .get(path, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
          },
        })
        .then((resp) => {
          console.log(resp.data[0]);

          if (
            resp.data.length > 0 &&
            resp.data[0].stats.risk_level == undefined
          ) {
            setListCities([]);
          } else {
            setListCities(resp.data);
          }
        })
        .catch(() => {
          setListCities([]);
        });
    }
    setLoading(false);
  }

  return (
    <div>
      <h2 className="title">Cidades</h2>

      <div className="cidades_filter flex_wrap">
        <FormControl id="city_select">
          <InputLabel id="select_label_cidade">Cidades</InputLabel>
          <Select
            labelId="select_label_cidade"
            value={cidade}
            label="Cidades"
            onChange={(e) => setCidade(e.target.value)}
          >
            {citiesFilter.map((s) => (
              <MenuItem key={s.name} value={s.name}>
                {s.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl id="status_select">
          <InputLabel id="select_label_status">Status</InputLabel>
          <Select
            labelId="select_label_status"
            value={status}
            label="Status"
            onChange={(e) => setStatus(e.target.value)}
          >
            {statusList.map((s) => (
              <MenuItem key={s.name} value={s.name}>
                {s.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" onClick={() => loadData()}>
          Filter
        </Button>
      </div>

      {loading ? (
        <h3 className="center m-20"> Loading...</h3>
      ) : listCities.length == 0 ? (
        <h3 className="center m-20"> Empty List</h3>
      ) : (
        <div className="flex_wrap ma-40 center">
          {listCities.map((currCity) =>
            currCity.stats == {} ? (
              ""
            ) : (
              <CardComponent
                key={currCity.city}
                width={300}
                height={300}
                currCity={[currCity]}
                riskLevel={currCity.stats.risk_level}
              ></CardComponent>
            )
          )}
        </div>
      )}
    </div>
  );
}
