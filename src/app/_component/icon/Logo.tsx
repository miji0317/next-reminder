import { TbSchoolBell } from 'react-icons/tb';

type Props = {
  size: string | number | undefined;
  onClick: React.MouseEventHandler<SVGElement> | undefined;
};

export default function Logo({ size, onClick }: Props) {
  return <TbSchoolBell size={size} onClick={onClick} className="mousePointer" />;
}
