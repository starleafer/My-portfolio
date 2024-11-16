import { ReactLenis, useLenis } from 'lenis/react'

export function SmoothScroll({ children }) {
    //   const lenis = useLenis(({ scroll }) => {
    //   })

    return (
        <ReactLenis
            options={{
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                smoothTouch: true
            }}
        >
            {children}
        </ReactLenis>
    )
}