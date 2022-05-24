import { FC, ReactNode } from 'react';

type DefaultProps = {
  children: ReactNode;
};

export type FComp<P = {}> = FC<P & DefaultProps>;
