import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* header */}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
