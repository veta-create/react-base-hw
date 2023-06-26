import { Provider } from "react-redux";
import store from "../src/redux/store";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import "./styles.css";

export default function App({ Component, pageProps }) {
    return <>
        <Provider store={store}>
            <Header /><Component {...pageProps} /><Footer />
        </Provider>
    </>
}
