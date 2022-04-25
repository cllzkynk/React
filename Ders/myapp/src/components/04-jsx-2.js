import React from "react";

const Jsx2 = () => {
  const yas = 18;
  



  return (
    <div>

      {/* TERNARY YÖNTEMİ */}
      {yas>=15 ? <h2>İçerik 15 ve üstüne özel</h2> : ""}


      {/* SHORT CIRCUIT YÖNTEMİ */}
      {yas>=15 && <h2>İçerik 15 ve üstüne özel</h2>}

      {yas>=15 || <h2>İçerik 15 yaş altı için özel</h2>}
   
    </div>
  );
};

export default Jsx2;
