import React from "react";

const JsxLoop = () => {
  const dizi = ["Ali", "Veli", "Ayşe", "Fatma"];

  return (
    <>
      <div>JsxLoop</div>
      <ul>
        {dizi.map(item=><li>{item}</li>)}
      </ul>
    </>
  );
};

export default JsxLoop;
