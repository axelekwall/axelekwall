import React from 'react';

import { TitleRow } from './elements';

const BigTitle = ({ title }) => (
  <TitleRow main>
    <h1 className={'big_title'}>{title}</h1>
  </TitleRow>
);

export default BigTitle;
