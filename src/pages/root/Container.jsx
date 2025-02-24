import PropTypes from 'prop-types'

export default function Container({ children }) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.element,
}
