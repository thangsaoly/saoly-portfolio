import './MatrixBackground.css';

export function MatrixBackground({ className = "" }) {
  // We need 4 pattern blocks, each with 40 columns
  const patterns = Array.from({ length: 4 });
  const columns = Array.from({ length: 40 });

  return (
    <div className={`matrix-container ${className}`}>
      {patterns.map((_, patternIdx) => (
        <div key={patternIdx} className="matrix-pattern">
          {columns.map((_, colIdx) => (
            <div key={colIdx} className="matrix-column" />
          ))}
        </div>
      ))}
    </div>
  );
}
