import styled, { keyframes } from 'styled-components';

const DealSlideIn = keyframes`
  0% { 
		opacity: 0; 
		transform: translate3d(-60%, 20%, 0) rotate(-18deg);
	}
  100% { 
		opacity: 1;
		transform: translate3d(0, 0, 0) rotate(0deg); 
	}
`

const SlideInSlower = keyframes`
  0% { 
		opacity: 0; 
		transform: translate3d(0, 40%, 0);
	}
	60% { 
		opacity: 0; 
		transform: translate3d(0, 40%, 0);
	}
  100% { 
		opacity: 1;
		transform: translate3d(0, 0, 0); 
	}
`

export const Section = styled.div`
  background: url("./rings-horizontal-bg.png");
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
	animation: ${DealSlideIn} 0.6s ease-out;
  background: var(--BG, linear-gradient(169deg, #282828 8.42%, #202020 48.96%, #202020 95.87%));
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 40px;
	padding: 50px;
	transform-origin: center;
`;

export const ModalContent = styled.div`
	align-items: center;
  display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 450px;
	width: 100%;
`

export const ModalHeading = styled.p`
  font-size: 30px;
	text-align: center;
`;

export const CompanyLogoWrapper = styled.div`
	margin: 40px 0;
	max-width: 224px;
  width: 100%;
`;

export const DealDescriptionSpan = styled.span`
	color: #FE6433;
	cursor: pointer;
	text-decoration: underline;
`;

export const DealDescription = styled.p`
	font-size: 30px;
	text-align: center;
`;

export const ButtonsBox = styled.div`
	align-items: center;
  display: flex;
	justify-content: center;
	margin: 60px 0 0;

	& > a:first-child {
		margin: 0 20px 0 0;
	}
`;

export const LogoWrapper = styled.div`
	animation: ${SlideInSlower} 0.7s ease-out;
	align-items: center;
	bottom: 50px;
	display: flex;
	justify-content: center;
	position: absolute;
	width: 100%;
`;