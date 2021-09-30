import * as React from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async'


export default function SaunaPrivatif(){
    

    return(
        <HelmetProvider>
            <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Titre</title>
            <meta name="description" content="" />
            <html lang="fr" />
            </Helmet>

           Hello World!

        </HelmetProvider>
    )
}