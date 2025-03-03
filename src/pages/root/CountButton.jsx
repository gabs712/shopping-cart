export default function CountButton({ char, onClick, className }) {
  return (
    <button
      className="grid size-4 place-content-center rounded-full bg-slate-200"
      aria-controls="cartCounter"
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      <span className={className}>{char}</span>
    </button>
  )
}
