import React, { ReactElement, FunctionComponent } from 'react';
import { TitleRow } from './elements';

interface Props {
  text: string;
}

const SubTitle: FunctionComponent<Props> = ({ text }): ReactElement => (
  <TitleRow>
    <p className={'front_page_bio'}>{text}</p>
  </TitleRow>
);

export default SubTitle;
