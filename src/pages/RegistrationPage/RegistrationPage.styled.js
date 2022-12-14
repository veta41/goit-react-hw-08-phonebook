import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  margin: 40px auto 0;
  padding: 30px;
  background-color: #a5c9c9;

  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
`;
export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const LableText = styled.span`
  display: block;
  margin: 0 0 10px;
  color: #7f2fb0;
`;

export const LableInfo = styled.span`
  font-size: 12px;
  color: #555;
`;

export const Input = styled.input`
  width: 286px;
  padding: 5px;
  outline: none;
  border: 1px solid #a16a93;
  border-radius: 3px;
  margin-bottom: 15px;
`;

export const FormButton = styled.button`
  display: block;
  width: 286px;
  padding: 10px;
  margin: 15px auto 0;
  background-color: #a16a93;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
