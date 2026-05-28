interface SectionLabelProps {
  text: string;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ text, className = '', light = false }: SectionLabelProps) {
  return (
    <span
      className={`section-label ${className}`}
      style={light ? { color: '#C41D1D' } : undefined}
    >
      {text}
    </span>
  );
}
