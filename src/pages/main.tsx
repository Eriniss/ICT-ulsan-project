import axios from "axios";
import Carousel from '../components/carousel';
import WeeklyBooks from "../components/weeklyBooks";

interface dataType {
  _id: any;
  title: string;
  body: string;
}

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
    <div className="Main">
      <Carousel />
      <WeeklyBooks />
    </div>
  )
};

export default Main;