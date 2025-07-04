import styled, { css } from 'styled-components'

const styleCss = (isHighString: boolean) => {
  const shapeStyles: Record<
    string,
    | { indent: string; marginTop: string }
    | ((isHigh: boolean) => { indent: string; marginTop: string })
  > = {
    '3x2': {
      indent: isHighString ? '3px' : '10px',
      marginTop: isHighString ? '20px' : '18px',
    },
    '3x3': () => ({
      indent: isHighString ? '15px' : '25px',
      marginTop: isHighString ? '20px' : '18px',
    }),
    '2x2': {
      indent: isHighString ? '2px' : '10px',
      marginTop: isHighString ? '9px' : '10px',
    },
    '2x3': () => ({
      indent: isHighString ? '15px' : '25px',
      marginTop: isHighString ? '10px' : '10px',
    }),
    '3x6': { indent: '70px', marginTop: '20px' },
    '4x4': { indent: isHighString ? '2px' : '12px', marginTop: '30px' },
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
  height: 18px;
  background: ${(props) => props.color};

  h1 {
    color: white;
    position: relative;
    text-align: center;
    font-size: 11px;
    text-indent: 3px;
    margin-top: 10px;
    text-shadow: 0px 0px 5px black;
    ${(props) => position(props.params.text, props.params.size)}
  }
`
