import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'
import {AnimatePresence} from "framer-motion";

export default function MyApp({ Component, pageProps }) {
    return (<AnimatePresence exitBeforeEnter><Component {...pageProps} /></AnimatePresence>)
}