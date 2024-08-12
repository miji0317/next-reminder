'use client';

import styled from 'styled-components';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';

interface Props {
  value: string;
  setStateValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputRemind({ value, setStateValue }: Props) {
  const maxLength: number = 30;
  const inputText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setStateValue(event.currentTarget.value);
  };

  return (
    <InputWrapper>
      <Input maxLength={maxLength} onInput={inputText} placeholder="리마인더 내용을 입력하세요"></Input>
      <Count>
        {value.length} / {maxLength}
      </Count>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 0.5rem 1.2rem;
  border-bottom: 1px solid ${colors.NormalGray};
  font-weight: ${fonts.normal};
  color: ${colors.Black};

  @media ${media.large} {
    font-size: 1.5rem;
  }

  @media ${media.regular} {
    font-size: 1.3rem;
  }
`;

const Count = styled.span`
  background-color: ${colors.DarkGray};
  border-radius: 0.5rem;
  padding: 0 0.3rem;
  font-weight: ${fonts.light};
  color: ${colors.White};
  height: 2rem;
  font-size: 1rem;
  line-height: 2rem;
  white-space: nowrap;
`;
