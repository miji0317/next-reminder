import { SiBloglovin } from 'react-icons/si';

type Props = {
  size: string | number | undefined;
  onClick: React.MouseEventHandler<SVGElement> | undefined;
};

export default function Logo({ size, onClick }: Props) {
  return <SiBloglovin size={size} onClick={onClick} className="mousePointer" />;
}
