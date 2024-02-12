import styled, { keyframes } from 'styled-components';

const SlideIn = keyframes`
  0% { 
		opacity: 0; 
		transform: translate3d(0, 4%, 0);
	}
  100% { 
		opacity: 1;
		transform: translate3d(0, 0, 0); 
	}
`

export const Section = styled.div`
  background: url("../deal-description-bg.png");
  background-position: center;
  background-size: cover;
  height: 100%;
	position: relative;
`;

export const Container = styled.div`
	align-items: center;
  display: flex;
	flex-direction: column;
	height: 100%;
	padding: 100px 0 0;
	position: relative;
`;

export const Modal = styled.div`
	animation: ${SlideIn} 0.6s ease-out;
  background: var(--BG, linear-gradient(169deg, #282828 8.42%, #202020 48.96%, #202020 95.87%));
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 40px;
	padding: 50px;
`;

export const ModalContent = styled.div`
	align-items: center;
  display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1165px;
	width: 100%;
`

export const ModalHeader = styled.div`
	align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ModalHeading = styled.p`
  font-size: 35px;
	text-align: center;
`;

export const ModalSubtitle = styled.p`
  font-size: 18px;
	text-align: center;
`;

export const DealInformation = styled.div`
	padding: 40px 0 0;
`;

export const DealInformationSection = styled.div`
	margin: 0 0 50px;
`;

export const DealInformationTitle = styled.h2`
	color: #9D9D9D;
	font-size: 35px;
	margin: 0 0 15px;
`;

export const DealBulletPoints = styled.p`
	font-size: 25px;
`;

export const DealLinksBox = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DealLink = styled.a`
	color: #FF6B00;
	font-size: 25px;
`;

export const WhyToInvest = styled.p`
	font-size: 25px;
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
	align-items: center;
	display: flex;
	justify-content: center;
	margin: 70px 0;
	width: 100%;
`;
