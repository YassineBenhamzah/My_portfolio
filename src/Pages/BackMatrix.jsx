import React, { useEffect, useRef } from "react";

export default function BackMatrix() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        const characters =
            "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(17, 24, 39, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#7FFF00";
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const text = characters.charAt(
                    Math.floor(Math.random() * characters.length)
                );
                ctx.fillText(text, i * fontSize, y * fontSize);
                drops[i] =
                    y * fontSize > canvas.height && Math.random() > 0.975
                        ? 0
                        : y + 1;
            });
        };

        const interval = setInterval(draw, 33);
        window.addEventListener("resize", resizeCanvas);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 opacity-30"
        />
    );
}
