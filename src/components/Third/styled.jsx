import { styled } from "styled-components";

export const ThirdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ThirdNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
  gap: 1rem;
  margin-top: 2rem;
  width: 80%;
  border: 1px solid white;
`;
export const ThirdContent = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;
  width: 80%;
`;
export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const GetContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  width: 80%;
  margin-bottom: 1rem;
`;

export const GetDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export const ArticleImage = styled.img`
  max-width: 40%;
  max-height: 150px;
  object-fit: cover;
  padding: 0.6rem;
`;
