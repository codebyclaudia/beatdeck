import React from 'react';
import { useScene } from 'beatdeck';

interface ZoomWrapperProps {
  sceneIndex?: number;
  beatIndex?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function ZoomWrapper({ beatIndex, children, style }: ZoomWrapperProps) {
  const { here, b } = useScene();
  
  const isActive = beatIndex !== undefined ? (here && b >= beatIndex) : here;
  const isPast = beatIndex !== undefined ? (here && b > beatIndex) : false;

  const transform = isActive
    ? isPast
      ? 'scale(1.02) translateZ(0)'
      : 'scale(1) translateZ(0)'
    : 'scale(0.92) translateZ(0)';

  const opacity = isActive ? 1 : 0;

  return (
    <div
      style={{
        transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease-out',
        transform,
        opacity,
        transformOrigin: 'center center',
        maxWidth: 1920,
        maxHeight: 1080,
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

