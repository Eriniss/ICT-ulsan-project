import axios from "axios";
import Carousel from '../components/carousel';
import WeeklyBooks from "../components/weeklyBooks";

const Main = () => {
  axios
  .get("http://localhost:4000")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  }
  );
  
  return (
    <div className="Main" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Carousel />
      <WeeklyBooks />
    </div>
  )
};

export default Main;