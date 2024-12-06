import PaymentComplete from '@/components/paymentComplete';
import React, { Suspense } from 'react';
import Loading from '@/components/loading';

const Complete = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <PaymentComplete />
    </Suspense>
  );
};

export default Complete;
