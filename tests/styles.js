import { css } from 'https://unpkg.com/emotion@latest/dist/emotion.esm.js'

const LINK_FOREGROUND = 'black'

const ACTIVE_FOREGROUND = 'tomato'

export const header = css`
  display: flex;
  padding: 3.2rem;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 24px;
  background-color: #fff;

  > a {
    &:link {
      color: ${LINK_FOREGROUND};
    }

    &:hover {
      color: ${ACTIVE_FOREGROUND};
    }
  }
`
