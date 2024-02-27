import { styled } from "styled-components";

export const ContactSectionContainer = styled.section`
  align-items: center;
  padding: 60px 80px;
`;

export const FormContainer = styled.div`
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
`;

export const FormText = styled.div`
  text-align: center;
  padding-top: 30px;
`;

export const Title = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
`;

export const TitleSubNote = styled.p`
  font-size: 1.1rem;
  font-family: "Roboto Mono", monospace;
  line-height: 1.5;

  @media (max-width: 600px) and (min-width: 350px) {
    font-size: 0.8rem !important;
  }
  @media (max-width: 349px) {
    font-size: 0.75rem !important;
  }
`;

export const Form = styled.form`
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  display: flex;
  flex-direction: column;
  border: 0.5px solid ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  border-radius: 5px;
  padding: 20px 15px;
  margin: 0 auto 50px;
  max-width: 600px;
  @media (max-width: 600px) and (min-width: 349px) {
    margin: 0 auto 30px !important;
  }
  @media (max-width: 455px) {
    border: none !important;
    padding: 20px 0px !important;
  }
`;

export const InputLabel = styled.label`
  font-size: 1.2rem;
  font-family: "Roboto Mono", monospace;
`;

export const InputField = styled.input`
  outline: none;
  border: 0.5px solid ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  border-radius: 5px;
  background-color: ${(props) => (props.isDarkMode ? "#0a0a1a" : "#e4e4e4")};
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  font-size: 1rem;
  padding: 10px 15px;
  margin: 10px 0 25px;
  transition: all 0.3s ease-in-out;
  &:focus {
    border: 2px solid #0c9;
  }
`;

export const MessageTextArea = styled.textarea`
  resize: none;
  min-height: 100px;
  outline: none;
  border: 0.5px solid ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  border-radius: 5px;
  background-color: ${(props) => (props.isDarkMode ? "#0a0a1a" : "#e4e4e4")};
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  font-size: 1rem;
  padding: 10px 15px;
  margin: 10px 0 25px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 600px) and (min-width: 350px) {
    padding: 8px 10px !important;
    margin: 10px 0 15px !important;
  }
  @media (max-width: 349px) {
    margin: 8px 0 10px !important;
  }
  &:focus {
    border: 2px solid #0c9;
  }
`;

export const SubmitButton = styled.button`
  background-color: #0ab635;
  border: none;
  border-radius: 5px;
  color: #f2f2f2;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 1.5px;
  padding: 12px 0;
  width: 100%;
  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px #0ab635;
    transition: 0.3s;
  }
`;
