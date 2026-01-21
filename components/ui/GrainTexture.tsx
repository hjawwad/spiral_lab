export function GrainTexture() {
  return (
    <svg className="hidden">
      <defs>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
      </defs>
    </svg>
  )
}
