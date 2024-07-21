import { useEffect, useState } from "react";
import {
  SecondWrapper,
  Ranking,
  RankingDes,
  RankingWrapper,
  RankingDesWrapper,
  Caution,
} from "../components/Second/Styled";
import Title from "../components/common/Title";
import axios from "axios";

const SecondPage = () => {
  // State 작성 -------------------------------------------------------------
  const { VITE_APP_API_KEY } = import.meta.env;
  const [weather, setWeather] = useState([]);
  // OPEN API 비동기로 불러와 state에 저장 및 불러오기 ---------------------------------
  // url은 `http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/50/` 이걸 활용하기!
  // 미세먼지 농도가 가장 높은 3곳만을 가져오고 싶어요! 그렇다면 sort 메서드를 사용해주면 됩니다!
  // 어떻게? 이렇게!
  // const sortedData = response.data.RealtimeCityAir.row.sort(
  //      (a, b) => b.PM10 - a.PM10
  //    );

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/50/`
      );
      console.log("2번실습:", response);
      const sortedData = response.data.RealtimeCityAir.row.sort(
        (a, b) => b.PM10 - a.PM10
      );
      console.log("sortedDate:", sortedData);
      setWeather(sortedData);
      console.log(sortedData[0].MSRSTE_NM);
    } catch (error) {
      console.log("error");
    }
  };
  //컴포넌트가 마운트될 때 한 번 실행되도록 -------------------------------------------------------------

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title title={"지금 서울에서 미세먼지 농도가 가장 높은 지역 TOP 3"} />
      <SecondWrapper>
        {weather.length > 0 ? (
          <>
            <RankingWrapper>
              <Ranking>1위: {weather[0].MSRSTE_NM}</Ranking>
              <Ranking>2위: {weather[1].MSRSTE_NM}</Ranking>
              <Ranking>3위: {weather[2].MSRSTE_NM}</Ranking>
            </RankingWrapper>

            <RankingDesWrapper>
              <RankingDes>
                1위인 "{weather[0].MSRSTE_NM}"의 현재 미세먼지 농도는 "
                {weather[0].PM10}"
              </RankingDes>
              <RankingDes>
                2위인 "{weather[1].MSRSTE_NM}"의 현재 미세먼지 농도는 "
                {weather[1].PM10}"
              </RankingDes>
              <RankingDes>
                3위인 "{weather[2].MSRSTE_NM}"의 현재 미세먼지 농도는 "
                {weather[2].PM10}"
              </RankingDes>
            </RankingDesWrapper>
            <Caution>마스크 꼭 쓰고 댕기세요 ~!</Caution>
          </>
        ) : (
          <p>데이터를 불러오는 중입니다...</p>
        )}
      </SecondWrapper>
    </>
  );
};

export default SecondPage;
