'use client';

import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import AccountButton from '@/components/AccountButton';

import { 
  Section,
  Container,
  Modal,
  ModalContent,
  ModalHeader,
  ModalHeading,
  ModalSubtitle,
  ButtonsBox,
  LogoWrapper } from '../../../components/dealNegative/styles'

export default function Negative() {
  return (
    <Section>
      <Container>
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalHeading>
                Why you are not interested?
              </ModalHeading>
              <ModalSubtitle>
                Help us improve! Tell us why you're not interested, and our algorithm will refine your future deals.
              </ModalSubtitle>
            </ModalHeader>
            <Textarea placeholder="Write why you are not interested here..."/>
            <ButtonsBox>
              <Button text="Send"/>
            </ButtonsBox>
          </ModalContent>
        </Modal>
      </Container>
      <AccountButton />
      <LogoWrapper>
        <img src="../jupter-logo.png"/>
      </LogoWrapper>
    </Section>
  );
}