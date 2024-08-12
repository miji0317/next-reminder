'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import ModalLayout from '@/app/_component/ModalLayout';

export default function CreateModal() {
  return (
    <ModalLayout>
      <ContentLayer></ContentLayer>
    </ModalLayout>
  );
}

const ContentLayer = styled.div`
  padding: 1rem;
`;
