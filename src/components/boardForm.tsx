import styled from "styled-components";

const BoardForm = () => {
  const Container = styled.div`
    width: 60%;
    height: 500px;
    margin: 10px auto 10px auto;
    padding: 0;
    background-color: #fff;
  `

  const AccessPost = styled.button`
    width: 80px;
    height: 30px;
    border: 1.5px solid #000;
    border-radius: 15px;
    background-color: #fff;
    font-size: 16px;
    font-weight: bold;
  `
  const PostListTitle = styled.div`
    width: 80%;
    height: 80px;
    margin: 10px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #bbbbbb;
    background-color: #fff;
    font-size: 20px;
    vertical-align: center;
  `
}

export default BoardForm;