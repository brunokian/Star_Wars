import styled from 'styled-components';

export const Title = styled.h1`
  color: yellow;
  margin: 0 auto;
  padding: 30px;
  width: 50%;
  text-align: center;
`;

export const PlanetsData = styled.tr`
  color: white;
  border-color: red;
  

  td {
    padding-left: 30px;
  }
`;

export const Categories = styled.tr`
  color: yellow;
  font-size: large;

  th {
    padding-left: 20px;
  }
`;

export const NumericFilterGroup = styled.div`
  padding: 10px;
  padding-left: 10px;
  
  input {
    width: 200px;
  }
`;
