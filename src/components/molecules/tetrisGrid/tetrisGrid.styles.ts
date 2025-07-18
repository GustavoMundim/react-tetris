import styled, { css } from 'styled-components'

type StyleObj = {
  indent: string
  marginTop: string
}

type StyleCssProps = StyleObj | ((isHigh: boolean) => StyleObj)

const styleCss = (isHighString: boolean) => {
  const shapeStyles: Record<string, StyleCssProps> = {
    '3x2': { indent: isHighString ? '25px' : '24px', marginTop: '30px' },
    '3x3': () => ({
      indent: isHighString ? '50px' : '50px',
      marginTop: isHighString ? '30px' : '35px',
    }),
    '2x2': { indent: isHighString ? '26px' : '28px', marginTop: '20px' },
    '2x3': () => ({
      indent: '50px',
      marginTop: '20px',
    }),
    '3x6': { indent: '70px', marginTop: '40px' },
    '4x4': { indent: isHighString ? '24px' : '20px', marginTop: '50px' },
  }
  return shapeStyles
}

function position(text: string, shape: string) {
  const isHighString = text.length === 8
  const shapeStyles = styleCss(isHighString)
  const styleDef = shapeStyles[shape]
  if (!styleDef) return css``

  const style =
    typeof styleDef === 'function' ? styleDef(isHighString) : styleDef

  return css`
    text-indent: ${style.indent};
    margin-top: ${style.marginTop};
  `
}

export const GridCell = styled.div<{
  color: string
  params: { size: string; text: string }
}>`
  width: 25px;
  height: 20px;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    position: relative;
    text-align: center;
    font-size: 11px;
    margin: 0;
    text-shadow: 0px 0px 5px black;

    ${(props) => position(props.params.text, props.params.size)}
  }
`
