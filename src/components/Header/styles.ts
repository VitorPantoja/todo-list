import styled from 'styled-components';
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  justify-content: center;
  /* height: 100%;
  width: 100%; */
  background: ${props => props.theme['gray-700']};
  /* padding: 4rem; */
  height: 12.5rem; /* Definindo a altura para 100% da viewport */
  width: 100%;
  z-index: 1; /* Set a base z-index */
`;
