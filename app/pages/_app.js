import "./styles.css";
import { Provider } from 'react-redux';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import store from '../src/redux/store';

export default function App({ Component, pageProps }) {
    return <>
        <Provider store={store}>
            <Header /><Component {...pageProps} /><Footer />
        </Provider>
    </>
}
