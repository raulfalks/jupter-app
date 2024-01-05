import styled from 'styled-components';

export const InputWrapper = styled.div`
	width: 100%;
	
	label {
		display: block;
		width: 100%;
	}

  label, input, input::placeholder {
    font-size: 18px;
  }

  textarea {
    background: #0E0E0E;
    border-radius: 30px;
    box-shadow: -10px 10px 6px -7px rgba(0, 0, 0, 0.41);
    font-size: 18px;
    height: 500px !important;
    margin: 20px 0 0;
    outline: none;
    padding: 20px 18px;
    resize: none;
		width: 100%;
  }
`;
