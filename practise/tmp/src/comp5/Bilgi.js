import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import sair from "./data";
const Bilgi = () => {
  const [index, setIndex] = useState(0);
  const { isim, resim, metin, id, tarih } = sair[index];
  const sayiKontrol = (sayi) => {
    if (sayi > sair.length - 1) {
      return 0;
    }
    if (sayi < 0) {
      return sair.length - 1;
    }
    return sayi;
  };
  const sonraki = () => {
    setIndex((index) => {
      let indexim = index + 1;
      return sayiKontrol(indexim);
    });
  };
  const onceki = () => {
    setIndex((index) => {
      let indexim = index - 1;
      return sayiKontrol(indexim);
    });
  };
  const karisik = () => {
    let numara = Math.floor(Math.random() * sair.length);
    setIndex(numara);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={resim} width="100" height="100" />
      <Card.Body>
        <Card.Title>{isim}</Card.Title>
        <h4>{tarih}</h4>
        <p>{id}</p>
        <Card.Text>{metin}</Card.Text>
        <Button ClassName="p-3"  variant="primary" onClick={sonraki}>
          Next
        </Button>
        <Button ClassName="p-3"  variant="success" onClick={karisik}>
          Random
        </Button>
        <Button  ClassName="p-3" variant="secondary" onClick={onceki}>
          Prev
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Bilgi;