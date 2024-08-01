import { BiArrowBack } from 'react-icons/bi';

type Props = {
  size: string | number | undefined;
  onClick: React.MouseEventHandler<SVGElement>;
};

export default function Back({ size, onClick }: Props) {
  return <BiArrowBack size={size} onClick={onClick} className="mousePointer" />;
}
