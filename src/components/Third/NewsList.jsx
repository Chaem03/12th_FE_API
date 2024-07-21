import { ThirdWrapper } from "./styled";
import { useState, useEffect } from "react";
import axios from "axios";
import Title from "../common/Title";
import NewsCategory from "./NewsCategory";
import { GetContent, GetDiv, ArticleImage, ParentContainer } from "./styled";

const defaultImage = "https://likelion-dgu.com/metaLogo.png";
const NewsList = () => {
  //state 작성
  const [content, setContent] = useState([]);
  //OPEN API 비동기로 불러와 state에 저장 및 불러오기
  //이때의 url은 https://newsapi.org/v2/top-headlines?country=kr&apiKey=${import.meta.env.VITE_NEWS_API_KEY}
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${
          import.meta.env.VITE_NEWS_API_KEY
        }`
      );
      console.log("3번실습:", response);
      setContent(response.data.articles);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <ThirdWrapper>
        <Title title={"멋사 NEWS"} />

        <NewsCategory />
        <ParentContainer>
          {content.length > 0 ? (
            content.map((article, index) => (
              <GetContent key={index} style={{ marginBottom: "1rem" }}>
                <ArticleImage
                  src={article.urlToImage ? article.urlToImage : defaultImage}
                  alt={article.title}
                />

                <GetDiv>{article.title}</GetDiv>
              </GetContent>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ParentContainer>
      </ThirdWrapper>
    </>
  );
};

export default NewsList;
