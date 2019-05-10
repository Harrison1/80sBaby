import { addDecorator, addParameters, configure } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import theme from './theme'

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
}

addParameters({
  options: {
    theme,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
})

addDecorator(withA11y)

// automatically import all files in the components folder ending in *.stories.tsx
const req = require.context('../src/', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
