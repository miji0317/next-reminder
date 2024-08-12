'use client';

import { useRouter } from 'next/navigation';
import { colors } from '@/styles/colors';
import Create from '@/app/_component/icon/Create';

export default function CreateRemind() {
  const router = useRouter();
  const openCreateRemind = () => {
    router.push(`/reminders/create`);
  };

  return <Create size={'3rem'} color={colors.DeepPrimary} onClick={openCreateRemind} />;
}
