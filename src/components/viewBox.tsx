import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  height: 500px;
  margin: 10px auto 10px auto;
  padding: 0;
  background-color: #fff;
`

const ViewTitle = styled.h3`
  width: 80%;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid #bbbbbb;
  background-color: #fff;
  font-size: 30px;
  text-align: left;
`

const ViewBody = styled.p`
  width: 80%;
  height: 500px;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid #bbbbbb;
  background-color: #fff;
  font-size: 20px;
  text-align: left;
`
interface PostBoxProps {
  data: {
      _id: any;
      title: string;
      body: string;
  };
}

const ViewBox = ({data}: PostBoxProps) => {
  return (
    <Container>
      <ViewTitle>{data?.title}</ViewTitle>
      <ViewBody>{data?.body}</ViewBody>
    </Container>
  )
}

export default ViewBox;