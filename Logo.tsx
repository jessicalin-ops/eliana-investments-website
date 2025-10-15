interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export default function Logo({ className = '', isDark = false }: LogoProps) {
  const goldColor = isDark ? '#D4C5A0' : '#B8A574';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="p-2 rounded-lg flex items-center justify-center gap-1.5" style={{
        background: 'linear-gradient(to bottom right, rgba(6, 182, 212, 0.15), rgba(13, 148, 136, 0.15))',
        minWidth: '42px',
        height: '32px'
      }}>
        <div className="flex flex-col justify-center gap-0.5">
          <div className="w-3.5 h-3.5 flex flex-col justify-center gap-0.5">
            <div className="w-full h-0.5" style={{ backgroundColor: goldColor }}></div>
            <div className="w-full h-0.5" style={{ backgroundColor: goldColor }}></div>
            <div className="w-full h-0.5" style={{ backgroundColor: goldColor }}></div>
          </div>
        </div>
        <div className="h-3.5 w-0.5" style={{ backgroundColor: goldColor }}></div>
      </div>
      <div className="flex flex-col justify-center">
        <span
          className="font-bold"
          style={{
            color: goldColor,
            fontSize: '15px',
            letterSpacing: '0.08em',
            lineHeight: '1'
          }}
        >
          ELIANA
        </span>
        <span
          className="font-medium"
          style={{
            color: goldColor,
            fontSize: '9px',
            letterSpacing: '0.22em',
            lineHeight: '1.2',
            marginTop: '2px'
          }}
        >
          INVESTMENTS
        </span>
      </div>
    </div>
  );
}
