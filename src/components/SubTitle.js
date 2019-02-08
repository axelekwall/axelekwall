import React from 'react';

import { TitleRow } from './elements';

const SubTitle = ({ text }) => (
  <TitleRow>
    <p className={'front_page_bio'}>{text}</p>
  </TitleRow>
);

export default SubTitle;
