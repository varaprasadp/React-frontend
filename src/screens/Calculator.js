import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fabs from "./components/Fabs";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
const operations = [
  { id: 0, k: "add", sym: "+" },
  { id: 1, k: "sub", sym: "-" },
  { id: 2, k: "mul", sym: "*" },
  { id: 3, k: "div", sym: "/" },
];
const keys = [
  { id: 0, k: "0" },
  { id: 1, k: "1" },
  { id: 2, k: "2" },
  { id: 3, k: "3" },
  { id: 4, k: "4" },
  { id: 5, k: "5" },
  { id: 6, k: "6" },
  { id: 7, k: "7" },
  { id: 8, k: "8" },
  { id: 9, k: "9" },
  { id: 10, k: "00" },
  { id: 11, k: "." },
];

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");
  const result = (operation) => {
    if (number2 !== "") {
      switch (operation) {
        case "+":
          return ` ${parseFloat(number1) + parseFloat(number2)}`;
        case "-":
          return ` ${parseFloat(number1) - parseFloat(number2)}`;
        case "*":
          return ` ${parseFloat(number1) * parseFloat(number2)}`;
        case "/":
          return ` ${parseFloat(number1) / parseFloat(number2)}`;
      }
    } else {
      return null;
    }
  };
  const FabKeys = keys.map((item) => (
    <Fabs
      key={item.id}
      value={item.k}
      color="primary"
      onClick={() => {
        operation === ""
          ? setNumber1(number1.concat(item.k))
          : setNumber2(number2.concat(item.k));
      }}
    />
  ));
  const FabOps = operations.map((item) => (
    <Fabs
      key={item.id}
      value={item.k}
      color="secondary"
      onClick={() => setOperation(item.sym)}
    />
  ));
  return (
    <Grid item xs={12}>
      <Typography component="div">
        <div className="row">
          <Box component="div" my={2} overflow="auto" color="primary.main">
            {number1}
          </Box>
          <Box component="div" my={2} overflow="auto" color="#000000">
            {operation}
          </Box>
          <Box component="div" my={2} overflow="auto" color="primary.main">
            {number2}
          </Box>
          <Box
            component="div"
            my={2}
            overflow="auto"
            color="#ffffff"
            style={{ display: number2 === "" && "none" }}
          >
            =
          </Box>
          <Box component="div" my={2} overflow="auto" color="success.main">
            {result(operation)}
          </Box>
          <br />
          <br />
        </div>
      </Typography>
      <div className="row">
        <div className="column">
          <div>
            {FabKeys[1]} {FabKeys[2]} {FabKeys[3]}
          </div>
          <div>
            {FabKeys[4]} {FabKeys[5]} {FabKeys[6]}
          </div>
          <div>
            {FabKeys[7]} {FabKeys[8]} {FabKeys[9]}
          </div>
          <div>
            {FabKeys[0]} {FabKeys[10]} {FabKeys[11]}
          </div>
        </div>
        <div className="column">
          <div>{FabOps[0]}</div>
          <div>{FabOps[1]}</div>
          <div>{FabOps[2]}</div>
          <div>{FabOps[3]}</div>
        </div>
      </div>
      <br />
      <div className="row" style={{ display: number1 === "" && "none" }}>
        <Button
          variant="contained"
          onClick={() => {
            setNumber1("");
            setNumber2("");
            setOperation("");
          }}
        >
          Reset
        </Button>
      </div>
    </Grid>
  );
}

export default Calculator;
