import React, { ReactElement } from 'react';

import { TitleRow } from './elements';

const BigTitle = ({ title }): ReactElement => (
  <TitleRow main>
    <h1 className={'big_title'}>{title}</h1>
  </TitleRow>
);

export default BigTitle;
