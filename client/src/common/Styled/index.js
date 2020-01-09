import styled from "styled-components";

export const CustomWindow = styled.div`
  width: 50vw;
  background: #f7f7f7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 55px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  @media (max-width: 1200px) {
    width: 70vw;
  }
  @media (max-width: 665px) {
    justify-content: center;
    padding: 30px;
  }
`;

export const RedirectToPage = styled.div`
  margin: 0;
  cursor: pointer;
  color: #7e7efa;
  text-decoration: 1;
  align-self: ${({ alignSelf }) => alignSelf};
  user-select: none;
`;
