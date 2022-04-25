import React from "react";
import students from "../assets/data/Students.json";

const Kurs = () => {
  return (
    <div>
      <h1>KURSİYERLER</h1>
      <h3>Yaşı 25ten büyük olanlar:</h3>

      {students
        .filter((student) => student.yas > 25)
        .map((student, index) => {
          return (
            <ul key={index}>
              <li>{student.isim}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default Kurs;
