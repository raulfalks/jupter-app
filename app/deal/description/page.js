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
  ModalHeading,
  ModalSubtitle,
  DealInformationSection,
  DealInformation,
  DealInformationTitle,
  DealBulletPoints,
  DealLinksBox,
  DealLink,
  WhyToInvest,
  ButtonsBox,
  LogoWrapper } from '../../../components/description/styles'

export default function Description() {
  return (
    <Section>
      <Container>
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalHeading>
                That is awesome!
              </ModalHeading>
              <ModalSubtitle>
                Check below the list of investors on this deal and how to proceed!
              </ModalSubtitle>
            </ModalHeader>
            <DealInformation>
              <DealInformationSection>
                <DealInformationTitle>Brief Description:</DealInformationTitle>
                <DealBulletPoints>- Rodada de R$ 32 milhões</DealBulletPoints>
                <DealBulletPoints>- ARR de R$ 220 milhões e EV/ARR de 3.2x</DealBulletPoints>
                <DealBulletPoints>- Startup em break even, com alto crescimento e geração de receita ‍</DealBulletPoints>
                <DealBulletPoints>- Crescimento incrível de 135% em 2021‍‍</DealBulletPoints>
                <DealBulletPoints>- Mais de R$ 122 milhões em receita em 2022 com estimativa de chegar a R$1 Bilhão em 2027‍</DealBulletPoints>
                <DealBulletPoints>- Aproximadamente R$ 10 Bilhões transacionados em 2022</DealBulletPoints>
                <DealBulletPoints>- 96 mil clientes em 2022 representando 63% de crescimento no ano‍</DealBulletPoints>
                <DealBulletPoints>- Valuation de R$ 700 milhões pre money com receita projetada superior a R$ 300 milhões nos próximos 12 meses</DealBulletPoints>
              </DealInformationSection>
              <DealInformationSection>
                <DealInformationTitle>Links:</DealInformationTitle>
                <DealLinksBox>
                  <DealLink>Lâmina comercial</DealLink>
                  <DealLink>Lâmina comercial</DealLink>
                  <DealLink>Lâmina comercial</DealLink>
                </DealLinksBox>
              </DealInformationSection>
              <DealInformationSection>
                <DealInformationTitle>Why should you invest:</DealInformationTitle>
                <WhyToInvest>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </WhyToInvest>
              </DealInformationSection>
              <DealInformationSection>
                <DealInformationTitle>Meet the founders:</DealInformationTitle>
                <WhyToInvest>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </WhyToInvest>
              </DealInformationSection>
            </DealInformation>
            <ButtonsBox>
              <Link href="/deal"><Button text="Want to reserve my quota"/></Link>
              <Link href="/deal"><Button text="Unfollow Deal"/></Link>
            </ButtonsBox>
          </ModalContent>
        </Modal>
        <LogoWrapper>
          <img src="../jupter-logo.png"/>
        </LogoWrapper>
      </Container>
      <AccountButton />
    </Section>
  );
}