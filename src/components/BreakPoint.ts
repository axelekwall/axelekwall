import { FunctionComponent, useState, useEffect, ReactElement } from 'react'
import { media } from '../utils/theme'

interface Props {
  children: ReactElement
  show: boolean
  breakPoint: string
}

// TODO: Continue refactor to functional component
const BreakPoint: FunctionComponent<Props> = ({
  children,
  breakPoint,
  show,
}) => {
  const [render, setRender] = useState(false)
  let mql: MediaQueryList

  // TODO: useCallback here?
  const update = (mql: MediaQueryListEvent | MediaQueryList): void => {
    setRender(show === mql.matches)
  }

  useEffect((): (() => void) => {
    mql = window.matchMedia(media[breakPoint])
    mql.addListener(update)
    update(mql)
    return (): void => {
      mql.removeListener(update)
    }
  }, [])

  return render ? children : null
}

export default BreakPoint
