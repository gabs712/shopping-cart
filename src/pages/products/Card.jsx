import PropTypes from 'prop-types'

export default function Card({ imageUrl, title, price }) {
  return (
    <div>
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <p>{title}</p>
        <p>{'$' + price}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
