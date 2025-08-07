import { useRef, useEffect } from "react"

export default function Background() {
    const ref = useRef<HTMLCanvasElement>(null)


    useEffect(() => {
        const canvas = ref.current
        if (!canvas) return;
        const ctx = canvas.getContext("2d")
        if (!ctx) return;
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.beginPath()
        }
        animate()


    }, [])
    return (
        <canvas ref={ref} />


    )
}