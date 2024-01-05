'use client';

import { InputWrapper } from "./style";

export default function Textarea(props) {
  return (
    <InputWrapper>
      <label>
        {props.label}
        <textarea placeholder={props.placeholder}></textarea>
      </label>
    </InputWrapper>
  );
}