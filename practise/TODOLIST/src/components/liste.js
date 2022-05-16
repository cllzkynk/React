import React, { useState } from "react";
import { useStore } from "../store";
import { listeyeEkle, isaretle, temizle } from "../store/liste/listeAction";
const Liste = () => {
  const { listeState, dispatchListe } = useStore();
  const { liste } = listeState;
  const [text, setText] = useState("");
  return (
    <div>
      <h1>YAPILACAKLAR LİSTESİ</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          dispatchListe(listeyeEkle(text));
        }}
      >
        Ekle
      </button>
      <div>
        {liste.map((item) => (
          <div
            className={item.tamamlandi ? "yapildi" : ""}
            key={item.id}
            onClick={() => dispatchListe(isaretle(item.id))}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={() => dispatchListe(temizle())}>
        Tamamlananları Temizle
      </button>
    </div>
  );
};
export default Liste;
