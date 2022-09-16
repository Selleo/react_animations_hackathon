import { useEffect } from 'react'
import { gsap, Power0 } from 'gsap'

const Loading = () => {
  useEffect(() => {
    const hourGlassTl = gsap.timeline({ repeat: -1 })

    hourGlassTl
      .to('#sand1', { scale: 0, transformOrigin: 'bottom', duration: 0.4 })
      .fromTo(
        '#sand2',
        { scale: 0, transformOrigin: 'top', duration: 0.4 },
        { scale: 1, transformOrigin: 'top', duration: 0.4 }
      )
      .to('#hourGlass', { rotation: 180, ease: Power0.easeNone, duration: 0.4 })

    hourGlassTl.play()
  }, [])

  return (
    <svg
      width="77px"
      height="126px"
      viewBox="0 0 77 126"
      version="1.1"
      id="hourGlass"
    >
      <desc>Created with Sketch.</desc>
      <defs>
        <path
          d="M158.535948,143 C159.040265,158.940159 160.885581,169.606825 164.071895,175 C169.027983,183.388701 187.222222,192.757745 187.222222,197 C187.222222,200.215073 195.777778,199.493745 195.777778,197 C195.777778,193.964745 214.447857,184.15585 219.934641,175 C223.105816,169.708228 224.61562,159.041561 224.464052,143 L158.535948,143 Z"
          id="path-1"
        ></path>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Desktop-Copy-5" transform="translate(-153.000000, -134.000000)">
          <rect
            id="lid"
            stroke="#FFFFFF"
            x="153.5"
            y="134.5"
            width="76"
            height="8.5"
            rx="4.25"
          ></rect>
          <rect
            id="base"
            stroke="#FFFFFF"
            x="153.5"
            y="251"
            width="76"
            height="8.5"
            rx="4.25"
          ></rect>
          <path
            d="M158.535948,143 C159.040265,158.940159 160.885581,169.606825 164.071895,175 C169.027983,183.388701 187.222222,192.757745 187.222222,197 C187.222222,200.215073 166.9185,214.411029 164.071895,221 C161.05078,227.992908 159.205464,237.992908 158.535948,251 L224.464052,251 C224.586021,237.71491 223.076217,227.71491 219.934641,221 C216.230976,213.083665 195.777778,199.493745 195.777778,197 C195.777778,193.964745 214.447857,184.15585 219.934641,175 C223.105816,169.708228 224.61562,159.041561 224.464052,143 L158.535948,143 Z"
            id="hourGlassBody"
            stroke="#FFFFFF"
          ></path>
          <path
            d="M187.222222,197 C187.222222,200.215073 166.9185,214.411029 164.071895,221 C161.05078,227.992908 159.205464,237.992908 158.535948,251 L224.464052,251 C224.586021,237.71491 223.076217,227.71491 219.934641,221 C216.230976,213.083665 195.777778,199.493745 195.777778,197 C195.777778,193.964745 187.222222,192.757745 187.222222,197 Z"
            id="sand2"
            fill="#FFFFFF"
          ></path>
          <mask id="mask-2" fill="white"></mask>
          <use id="sand1" stroke="#FFFFFF" fill="#FFFFFF"></use>
        </g>
      </g>
    </svg>
  )
}

export default Loading
