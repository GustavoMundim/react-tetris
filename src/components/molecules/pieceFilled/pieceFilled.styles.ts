import styled from 'styled-components'

export const GridCell = styled.div<{ color: string }>`
  width: 18px;
  height: 18px;
  background: ${(props) => props.color};

  p {
    color: white;
    position: relative;
    text-align: center;
    font-size: 13px;
    text-indent: 3px;
    margin-top: 10px;
    text-shadow: 0px 0px 5px black;
  }
`
