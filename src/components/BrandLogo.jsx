export default function BrandLogo({ light = false, compact = false }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <img
        src="/buffalo-lawn-care-logo.svg"
        alt=""
        width="44"
        height="44"
        className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
      />
      {!compact && (
        <span className={`font-display text-[14px] font-extrabold leading-tight tracking-[0.1em] sm:text-base ${light ? 'text-cream' : 'text-brand-900'}`}>
          BUFFALO<br className="sm:hidden" /> LAWN CARE
        </span>
      )}
    </span>
  )
}
