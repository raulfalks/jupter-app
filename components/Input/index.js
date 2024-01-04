'use client';

import { InputWrapper } from "./style";

export default function Input(props) {
    return (
    <InputWrapper>
      <label>
				{props.label}
				<input type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
			</label>
    </InputWrapper>
    );
  }