'use client';

import { ButtonWrapper } from "./style";

export default function Button(props) {
    return (
    <ButtonWrapper>
			<button type={props.type}>{props.text}</button>
    </ButtonWrapper>
    );
  }