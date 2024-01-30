import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/assets/css/index.css'
import {I18nextProvider} from "react-i18next";
import i18n from "@/locales/i18n.ts";
import { repositories, RepositoriesContext } from "@/plugins/http";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <I18nextProvider i18n={i18n}>
            <RepositoriesContext.Provider value={repositories}>
                <App/>
            </RepositoriesContext.Provider>
        </I18nextProvider>
    </>
)
