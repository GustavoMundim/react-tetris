import type { ReactNode } from 'react'
import * as S from './layout.styles'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <S.Container>
      <S.Overlay />
      {children}
    </S.Container>
  )
}

export default Layout
