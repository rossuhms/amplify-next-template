'use client';
import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <Authenticator>{children}</Authenticator>;
};

export default RootLayout;
