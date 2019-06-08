import React, { FunctionComponent } from 'react';

import { TitleRow } from './elements';

interface BigTitleProps {
  title: string;
}

const BigTitle: FunctionComponent<BigTitleProps> = ({ title }) => (
  <TitleRow main>
    <h1 className={'big_title'}>{title}</h1>
  </TitleRow>
);

export default BigTitle;
