import { LuAlarmClock } from 'react-icons/lu';

type Props = {
  color: string | undefined;
  size: string | number | undefined;
};

export default function Clock({ size, color }: Props) {
  return <LuAlarmClock size={size} color={color} />;
}
