interface GeometricMarkProps {
  size?: number;
  opacity?: number;
  blur?: number;
  className?: string;
}

export default function GeometricMark({
  size = 200,
  opacity = 0.6,
  blur = 60,
  className = '',
}: GeometricMarkProps) {
  return (
    <div
      className={`rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: 'radial-gradient(circle, #C41D1D 0%, transparent 70%)',
        filter: `blur(${blur}px)`,
        opacity,
      }}
    />
  );
}
