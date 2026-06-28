"use client";

import { useEffect, useRef } from "react";

const PIECES = ["♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"];

interface ChessPiece {
  piece: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function ChessBackground() {
  const piecesRef = useRef<ChessPiece[]>([]);

  useEffect(() => {
    const pieces: ChessPiece[] = [];
    for (let i = 0; i < 12; i++) {
      pieces.push({
        piece: PIECES[i],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 5 + Math.random() * 5,
        delay: Math.random() * 4,
      });
    }
    piecesRef.current = pieces;

    const handleResize = () => {
      piecesRef.current = pieces.map((p) => ({
        ...p,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      {piecesRef.current.map((piece, i) => (
        <div
          key={i}
          className="absolute select-none text-white"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            fontSize: `${piece.size}rem`,
            opacity: 0.2,
            animation: `float ${piece.duration}s ease-in-out ${piece.delay}s infinite`,
            willChange: "transform",
          }}
        >
          {piece.piece}
        </div>
      ))}
    </div>
  );
}
