import styled from 'styled-components';

export const Section = styled.div`
  background: url("./login-page-bg.png");
  background-position: center;
  background-size: cover;
  height: 100vh;
	position: relative;
`;

export const Container = styled.div`
	align-items: center;
  display: flex;
	height: 100%;
	justify-content: center;
	position: relative;
`;

export const Modal = styled.div`
  background: var(--BG, linear-gradient(169deg, #282828 8.42%, #202020 48.96%, #202020 95.87%));
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 20px;
	padding: 50px;
`;

export const ModalContent = styled.div`
	align-items: center;
  display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 300px;
	width: 100%;
`

export const ModalHeading = styled.p`
  font-size: 18px;
	margin: 0 0 45px;
	text-align: center;
`;

export const ModalForm = styled.form`
	align-items: center;
  display: flex;
	flex-direction: column;
	justify-content: center;

	label {
		margin: 0 0 25px;
	}
`;

export const LogoWrapper = styled.div`
	align-items: center;
	bottom: 50px;
	display: flex;
	justify-content: center;
	position: absolute;
	width: 100%;
`;