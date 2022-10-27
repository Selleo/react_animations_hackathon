## Results

### [react-spring](https://github.com/pmndrs/react-spring)

[Result](https://selleo-react-animations-hackathon.netlify.app/react-spring)

Pros:
- After wrapping your head around the API quirks you can do pretty nice effects

Cons:
- Very confusing API (if you provide object then you get only styles, if you provide function then you receive styles and API in tuple)
- Documentation is missing some explanations
- You have to rely on reverse engineering the examples
- I had problem with two separate animations to control the same css property (height) but finally found a tip in docs

**Overall: 6/10**

---

### [framer-motion](https://www.framer.com/motion/)

[Result](https://selleo-react-animations-hackathon.netlify.app/framer-motion)

Pros:
- Really pleasurable to work with library
- Easy to understand, intuitive and powerful API which is also well documented
- Works nicely with SVG
- Can make animations between SPA routes

Cons:
- Library is quite heavy, but it has lightweight version if we don't need some features `import { m } from 'framer-motion'`

**Overall: 9/10**

---

### [react-motion](https://github.com/chenglou/react-motion)

[Result](https://selleo-react-animations-hackathon.netlify.app/react-motion)

Pros:
- It's possible to do SOMETHING

Cons:
- Non existent documentation and solutions on SO are very old (use class components)
- High entry point to understand the library and achieve even the simplest animations
- Implementation is based on component state and overriding inline styles.
- Unintuitive and unclear API

**Overall: 0/10**

---

### [GSAP (GreenSock Animation Platform)](https://github.com/greensock/GSAP)

[Result](https://selleo-react-animations-hackathon.netlify.app/gsap)

Pros:
- Extensive documentation even containing videos
- Allows easily create simple animations by getting element with `useRef` and trigger GSAP functions
- Is extensible via plugins

Cons:
- team did not reported any

**Overall: 9/10**
