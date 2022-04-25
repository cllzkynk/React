/* import Aders from "./components/Aders";
import Bders from "./components/Bders";
import Cders from "./components/Cders"; import Liste from "./comp2/Liste";
import Tablo from "./comp2/Tablo"; 

import Kurs from "./comp3/Kurs";*/
import students from "./assets/data/Students.json";

import "./assets/css/style.css";
import Kisi from "./comp3/Kisi";
import Cards from "./comp4/Cards";
import Akis from "./comp4/Akis";

function App() {
  return (
    <div className="App">
      {/*   <Aders />
      <Bders />
      <Cders />
        <Tablo />
      <Liste />
 <Kurs />
    <div className="yanyana">
        {students.map((student, index) => {
          const { isim, img, yas, kurs } = student;
          return <Kisi key={index} ad={isim} img={img} yas={yas} kurs={kurs} />;
        })}
      </div> 
 <div className="yanyana">
        {students.map((student, index) => {
          const { isim, img, yas, kurs } = student;
          return (
            <Cards key={index} ad={isim} img={img} yas={yas} kurs={kurs} />
          );
        })}
      </div>
      */}
      <Akis />
    </div>
  );
}

export default App;
