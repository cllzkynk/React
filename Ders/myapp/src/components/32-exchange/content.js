import React, { useContext, useState } from "react";
import { StoreContext } from "../../store";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";

const Content = () => {
  const [amount, setAmount] = useState(0);

  const [tl,setTL] = useState(0);

  const context = useContext(StoreContext);

  const convertToTRY = () => {
    const tl = (amount / context.rates.USD).toFixed(2);
    setTL(tl);
  };

  return (
    <Container className="mt-5">
      <InputGroup className="mb-3">
        <FormControl
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
        <Button variant="warning" onClick={convertToTRY}>
          Convert to ₺
        </Button>
      </InputGroup>

      <h1>{tl}</h1>
    </Container>


 


  );
};
export default Content;
