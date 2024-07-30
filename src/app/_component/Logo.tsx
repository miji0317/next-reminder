import { SiBloglovin } from 'react-icons/si';

type Props = {
  size: string | number | undefined;
};

export default function Logo({ size }: Props) {
  return <SiBloglovin size={size} />;
}
