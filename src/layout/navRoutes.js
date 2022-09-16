import {
  FramerMotionPage,
  GSAPPage,
  ReactMotionInput,
  ReactMotionPage,
  ReactSpringPage,
} from 'pages'

export const navRoutes = [
  { name: 'framer-motion', to: '/framer-motion', Component: FramerMotionPage },
  { name: 'react-motion', to: '/react-motion', Component: ReactMotionPage },
  {
    name: 'react-motion-inputs',
    to: '/react-motion-input',
    Component: ReactMotionInput,
  },
  { name: 'react-spring', to: '/react-spring', Component: ReactSpringPage },
  { name: 'gsap', to: '/gsap', Component: GSAPPage },
]
