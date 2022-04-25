import React from "react";
import students from "../assets/data/Students.json";

const Tablo = () => {
  const still1 = {
    color: "crimson",
    fontWeight: "bolder",
    backgroundColor: "aquamarine",
  };
  const still2 = {
    color: "yellow",
    fontWeight: "bolder",
    backgroundColor: "gray",
  };
  return (
    <div>
      <h1 style={{ color: "brown" }}>KURSİYERLER</h1>
      <table>
        <thead>
          <tr style={still1}>
            <th>İsim</th>
            <th>Yaş</th>
            <th>Aldığı Kurs</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr style={index % 2 == 0 ? still1 : still2} key={index}>
                <td>{student.isim}</td>
                <td>{student.yas}</td>
                <td>{student.kurs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tablo;
