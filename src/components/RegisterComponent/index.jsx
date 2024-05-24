import * as React from "react";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from '@mui/material/Button';

import "../../App.css";
import states from "./states";

// __________

export default function RegisterComponent() {
  const [email, setEmail] = React.useState("");
  const [showErrorEmail, setShowErrorEmail] = React.useState(false);
  const [state, setState] = React.useState("");

  const isValidEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleChangeState = (event) => {
    setState(event.target.value);
  };

  const handleChangeEmail = (event) => {
      if(event.target?.value && event.target.value.match(isValidEmail)){
        setShowErrorEmail(false);
        setEmail(event.target.value);
      }else{
        setShowErrorEmail(true);
      }
  };

  const register = () => {
    if (state != "" && email != "" &&  !showErrorEmail) {
      // TODO Show alert
    } 
    else {
      // TODO AXIOS REQUEST
    }
  };

  return (
    <div className="home_component">
      <div className="mw-400 justify-text">
        <p>
          Esse projeto visa auxiliar avisando moradores de áreas de risco quanto
          a chance de um alto volume de chuvas através do seu email!
        </p>

        <div className="register_card">
          <h3>Inscreva-se e fique alerta!</h3>

          <TextField
            fullWidth
            error={showErrorEmail}
            id="email_input"
            label="Email"
            variant="outlined"
            onChange={handleChangeEmail}
          />

          <div className="m-20" />

          <FormControl fullWidth>
            <InputLabel id="state_input">Estado</InputLabel>
            <Select
              id="state_select"
              value={state}
              label="Estado"
              onChange={handleChangeState}
            >
              {states.map((currState) => (
                <MenuItem key={currState.sigla} value={currState.sigla}>
                  {currState.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="m-20">
            <Button variant="contained" disableElevation onClick={register}>
                Inscrever-se
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
