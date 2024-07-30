import { IconContext } from 'react-icons';
import { MdAccountCircle } from 'react-icons/md';
import styled from 'styled-components';
import { colors } from '@/styles/colors';

type Props = {
  size: string | number | undefined;
};

export default function DefaultProifle({ size }: Props) {
  return (
    <ReactIcon color={colors.DarkGray} hoverColor={colors.Black}>
      <MdAccountCircle size={size} />
    </ReactIcon>
  );
}

const ReactIcon = styled.div<{ color?: string; hoverColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${({ color }) => color ?? 'black'};
  }
  svg:hover {
    color: ${({ hoverColor }) => hoverColor ?? 'black'};
  }
`;
