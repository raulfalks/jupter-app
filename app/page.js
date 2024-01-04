'use client';

import Input from '@/components/Input';
import Button from '@/components/Button';

import { 
  Section,
  Container,
  Modal,
  ModalContent,
  ModalHeader,
  ModalForm,
  LogoWrapper } from '../components/page/styles'

export default function Page() {
  return (
    <Section>
      <Container>
        <Modal>
          <ModalContent>
            <ModalHeader>
              Join our ecossystem, the path to venture capital's next chapter begins here.
            </ModalHeader>
            <ModalForm method='GET'>
              <Input label="Login" type="text"/>
              <Input label="Password" type="password"/>
              <Button text="Join"/>
            </ModalForm>
          </ModalContent>
        </Modal>
      </Container>
      <LogoWrapper>
        <img src="./jupter-logo.png"/>
      </LogoWrapper>
    </Section>
  );
}