"use client";

import { useEffect, useRef } from "react";

export const CyberBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const currentCanvas = canvasRef.current;
    if (!currentCanvas) return;

    const context = currentCanvas.getContext("2d");
    if (!context) return;

    const canvas = currentCanvas;
    const ctx = context;

    // キャンバスをウィンドウサイズに合わせる
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawCyberCity();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // サイバーシティを描画
    function drawCyberCity() {
      const width = canvas?.width;
      const height = canvas?.height;

      // 背景をクリア
      ctx.fillStyle = "#0a0a1f";
      ctx.fillRect(0, 0, width, height);

      drawStars();
      drawGrid();
      drawNeonLights();
    }

    function drawStars() {
      const starCount = 100;
      ctx.fillStyle = "#ffffff";

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.7;
        const size = Math.random() * 1.5;

        ctx.globalAlpha = Math.random() * 0.8 + 0.2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }

    function drawGrid() {
      const width = canvas.width;
      const height = canvas.height;
      const horizonY = height * 0.7;

      // 水平グリッドライン
      ctx.strokeStyle = "#2FEBE9";
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;

      const lineCount = 20;
      const spacing = (height * 0.3) / lineCount;

      for (let i = 0; i < lineCount; i++) {
        const y = horizonY + i * spacing;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 垂直グリッドライン（遠近感あり）
      const verticalLines = 20;

      for (let i = 0; i <= verticalLines; i++) {
        const xRatio = i / verticalLines;
        const x = width * xRatio;

        ctx.beginPath();
        ctx.moveTo(x, horizonY);
        ctx.lineTo(width * 0.5 + (x - width * 0.5) * 3, height);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
    }

    function drawNeonLights() {
      const width = canvas.width;
      const height = canvas.height;

      // ネオンの光の効果
      const neonCount = 15;
      const colors = ["#EE29E8", "#2FEBE9", "#F0F085"];

      for (let i = 0; i < neonCount; i++) {
        const x = Math.random() * width;
        const y = height * (0.6 + Math.random() * 0.3);
        const radius = 2 + Math.random() * 4;
        const color = colors[Math.floor(Math.random() * colors.length)];

        // グロー効果
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 10);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.1, color + "80"); // 半透明
        gradient.addColorStop(1, "transparent");

        ctx.globalAlpha = 0.3;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * 10, 0, Math.PI * 2);
        ctx.fill();

        // 中心の明るい部分
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className='w-full h-full' />;
};
