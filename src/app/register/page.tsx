import RegisterForm from '@/components/register-sections/registerForm';
import React, { Suspense } from 'react';
import Loading from '@/components/loading';

const Register = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
};

export default Register;
