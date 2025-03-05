import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="h-[75vh] gap-14 px-5 flex items-center justify-center flex-col">
      <p className="text-brandHighlight text-center font-bold text-2xl">
        Your favorite products for a low price.
      </p>
      <button className="bg-sky-500 px-2 hover:opacity-85 active:opacity-75 rounded-md py-1 text-white">
        <Link to={'/products'}>Start now</Link>
      </button>
    </div>
  )
}
