'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import ModalLayout from '@/app/_component/ModalLayout';
import InputRemind from '@/app/reminders/create/_component/InputRemind';

export default function CreateModal() {
  const [content, setContent] = useState<string>('');

  return (
    <ModalLayout>
      <ContentLayer>
        <Title>새 리마인더</Title>
        <InputRemind value={content} setStateValue={setContent} />
      </ContentLayer>
    </ModalLayout>
  );
}

const ContentLayer = styled.div`
  padding: 1.5rem;
`;

const Title = styled.p`
  font-weight: ${fonts.bold};
  color: ${colors.Black};
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;

  @media ${media.large} {
    font-size: 2.2rem;
  }

  @media ${media.regular} {
    font-size: 2rem;
  }
`;
