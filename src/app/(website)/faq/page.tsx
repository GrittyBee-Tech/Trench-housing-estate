import { Suspense } from 'react';
import Faq from './faq';

export default function FaqPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Faq />
    </Suspense>
  );
}
