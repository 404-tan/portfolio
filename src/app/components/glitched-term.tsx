'use client'
import { JSX, useEffect, useState } from 'react';

interface GlitchedTermProps {
  user: string;
  machine: string;
  commandResult: Map<string, string | JSX.Element>;
  fontSize?: string;
  repeatDelay?: number;
  duration?: number;
}

export default function GlitchedTerm({
  user,
  machine,
  commandResult,
  fontSize = '1.2rem',
  repeatDelay = 1500,
}: GlitchedTermProps) {
  

    return (
        <div>

        </div>
    );
}