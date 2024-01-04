'use client';

import Link from 'next/link'

import Button from '@/components/Button';
import AccountButton from '@/components/AccountButton';

import { 
  Section,
  Container,
  Modal,
  ModalContent,
  ModalHeading,
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
            <ModalHeading>
            Let’s close the deal?
            </ModalHeading>
            <CompanyLogoWrapper>
              <img src="./estus-logo.png"/>
            </CompanyLogoWrapper>
            <DealDescription>
            Raul’s Startup has closed a deal with: investor name and <DealDescriptionSpan>two more.</DealDescriptionSpan>
            </DealDescription>
            <ButtonsBox>
              <Link href="deal/description"><Button text="I'm onboard!"/></Link>
              <Link href="deal/description"><Button text="Not interested."/></Link>
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