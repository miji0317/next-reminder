import { MdNotificationAdd } from 'react-icons/md';

type Props = {
  color: string | undefined;
  size: string | number | undefined;
  onClick: React.MouseEventHandler<SVGElement>;
};

export default function Create({ size, color, onClick }: Props) {
  return <MdNotificationAdd size={size} color={color} onClick={onClick} className="mousePointer" />;
}
