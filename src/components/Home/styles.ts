import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5;
  color: ${props => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid ${props => props.theme['gray-700']};
  background-color: ${props => props.theme['gray-400']};
  border-radius: 8px;
  width: 100%;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 50%;
  align-items: center;
  z-index: 2;
  position: absolute;
  top: 19%;
  left: 25%;
  gap: 0.5rem;
`;

export const HomeButton = styled.button`
  padding: 10px;
  border: 1px solid ${props => props.theme['gray-700']};
  color: ${props => props.theme['gray-100']};
  background-color: ${props => props.theme['blueDark']};
  border-radius: 8px;
`;
// export const Input = styled.input`
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   width: 100%;
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: #999;
//   }
// `
