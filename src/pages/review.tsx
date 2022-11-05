import axios from "axios";

const Review = () => {
  axios
  .get("http://localhost:4000/review")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  }
  );

  return (
    <div>
      <h1>독서감상문 페이지</h1>
    </div>
  )
}

export default Review;