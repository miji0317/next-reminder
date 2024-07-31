import styled from 'styled-components';
import { VscAccount } from 'react-icons/vsc';
import { colors } from '@/styles/colors';

type Props = {
  size: string | number | undefined;
};

export default function DefaultProifle({ size }: Props) {
  return (
    <IconWrapper color={colors.Black}>
      <VscAccount size={size} />
    </IconWrapper>
  );
}

const IconWrapper = styled.div<{ color?: string; hoverColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${({ color }) => color ?? 'black'};
  }
`;
