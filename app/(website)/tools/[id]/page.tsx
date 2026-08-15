import React from 'react';
import CalculatorDetailPage from '@/components/pages/tools/calculator-detail';
import { getCalculatorConfig } from '@/lib/calculators/config';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const config = getCalculatorConfig(id);

  if (!config) {
    return {
      title: 'Calculator Not Found - MAHIR Invest',
      description: 'The requested financial calculator could not be found.',
    };
  }

  return {
    title: `${config.title} - MAHIR Invest`,
    description: config.description,
  };
}

export default async function ToolDetailRoute({ params }: Props) {
  const { id } = await params;
  return <CalculatorDetailPage id={id} />;
}
