import styled from "styled-components";

interface PostBoxProps {
  data: {
      _id: any;
      title: string;
      body: string;
    };
  }

  const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  background-color: #fff;
`

const PostBox = ({data}: PostBoxProps) => {  
  return (
    <Container>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </Container>
  )
}

export default PostBox;