import React, { FunctionComponent } from 'react'
import TitleRow from './elements/TitleRow'
import H1 from './elements/H1'

interface BigTitleProps {
  title: string
}

const BigTitle: FunctionComponent<BigTitleProps> = ({ title }) => (
  <TitleRow main>
    <H1 font="sans">{title}</H1>
  </TitleRow>
)

export default BigTitle
