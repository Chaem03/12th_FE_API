import { useState } from "react";
import axios from "axios";
import { BtnContainer, PostWrapper, ContentInput } from "./Styled";
import Title from "../common/Title";
// import * as S from "./"
//스타일 파일 하나 만들어서 관리 이럴경우 <S.wrapper>로 태그 작성

const FirstApiPostTest = () => {
  const [newPost, setNewPost] = useState({
    userId: "1",
    title: "",
    body: "",
  });

  const postData = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      console.log(response);
    } catch (error) {
      console.error("에러 내용:", error);
    }
  };

  return (
    <>
      <Title title={"새 게시글 작성"} />
      <PostWrapper>
        <ContentInput>
          제목:
          <textarea
            type="text"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
        </ContentInput>
        <ContentInput>
          내용:
          <textarea
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
        </ContentInput>
      </PostWrapper>
      <BtnContainer onClick={postData}>데이터 POST해보기</BtnContainer>
    </>
  );
};

export default FirstApiPostTest;
