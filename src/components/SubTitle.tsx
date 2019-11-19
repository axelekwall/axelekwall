import React, { ReactElement, FunctionComponent, ReactNode } from 'react';
import TitleRow from './elements/TitleRow';
import P from './elements/P';

export type SubTitleContent = string | ReactNode;
interface SubTitleProps {
  subTitleContent: SubTitleContent;
}

const SubTitle: FunctionComponent<SubTitleProps> = ({
  subTitleContent,
}): ReactElement => (
  <TitleRow>
    <P className={'front_page_bio'}>{subTitleContent}</P>
  </TitleRow>
);

export default SubTitle;
