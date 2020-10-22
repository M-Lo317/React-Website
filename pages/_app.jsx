// pages/_app.js
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
