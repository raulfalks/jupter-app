'use client';

import Link from 'next/link'

import Button from '@/components/Button';
import AccountButton from '@/components/AccountButton';

import { 
  Section,
  Container,
  Modal,
  ModalContent,
  ModalHeader,
  CompanyLogoWrapper,
  DealDescription,
  DealDescriptionSpan,
  ButtonsBox,
  LogoWrapper } from '../../components/deal/styles'

export default function Deal() {
  return (
    <Section>
      <Container>
        <Modal>
          <ModalContent>
            <ModalHeader>
            Let’s close the deal?
            </ModalHeader>
            <CompanyLogoWrapper>
              <img src="./estus-logo.png"/>
            </CompanyLogoWrapper>
            <DealDescription>
            Raul’s Startup has closed a deal with: investor name and <DealDescriptionSpan>two more.</DealDescriptionSpan>
            </DealDescription>
            <ButtonsBox>
              <Link href="/deal"><Button text="I'm onboard!"/></Link>
              <Link href="/deal"><Button text="Not interested."/></Link>
            </ButtonsBox>
          </ModalContent>
        </Modal>
      </Container>
      <AccountButton />
      <LogoWrapper>
        <img src="./jupter-logo.png"/>
      </LogoWrapper>
    </Section>
  );
}