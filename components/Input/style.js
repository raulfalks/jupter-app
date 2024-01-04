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

  input {
    background: #232323;
    border: 1px solid #424242;
    border-radius: 15px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12) inset, 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
    margin: 10px 0 0;
    outline: none;
    padding: 20px 18px;
		width: 100%;
  }
`;
