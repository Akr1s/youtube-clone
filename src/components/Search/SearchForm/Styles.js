import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-grow: 1;

  @media ${(p) => p.theme.breakpoints.md} {
    flex-grow: 0;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 12px 23px;
  border: 3px solid #ebebeb;
  border-radius: 30px;

  @media ${(p) => p.theme.breakpoints.md} {
    display: none;
  }
`;

export const SearchButton = styled.button`
  margin: 0;
  margin-left: -50px;
  font-size: 19px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  @media ${(p) => p.theme.breakpoints.md} {
    margin-left: 0;
    font-size: 30px;
  }
`;
