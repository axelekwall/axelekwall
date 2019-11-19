import React, { ReactElement, FunctionComponent, ReactNode } from 'react';
import TitleRow from './elements/TitleRow';

export type SubTitleContent = string | ReactNode;
interface SubTitleProps {
  subTitleContent: SubTitleContent;
}

const SubTitle: FunctionComponent<SubTitleProps> = ({
  subTitleContent,
}): ReactElement => (
  <TitleRow>
    <p className={'front_page_bio'}>{subTitleContent}</p>
  </TitleRow>
);

export default SubTitle;
