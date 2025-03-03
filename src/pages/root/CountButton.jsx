import PropTypes from 'prop-types'

export default function CountButton({ char, onClick, className }) {
  return (
    <button
      className="grid active:opacity-60 transition-opacity size-4 place-content-center rounded-full bg-slate-200"
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

CountButton.propTypes = {
  char: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}
