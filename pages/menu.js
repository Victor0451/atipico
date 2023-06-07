import React, { useState } from 'react'
import { Menu } from '@/components/menu/Menu'
import useSWR from 'swr'
import axios from 'axios'

export default function menu() {

    const [alPlato, guardarAlPlato] = useState([])
    const [guarni, guardarGuarni] = useState([])
    const [veggie, guardarVeggie] = useState([])
    const [lomito, guardarLomito] = useState([])
    const [mila, guardarMila] = useState([])
    const [porcionPapa, guardarPorcionPapa] = useState([])
    const [hamburguesas, guardarHamburguesas] = useState([])
    const [pastas, guardarPastas] = useState([])
    const [salsas, guardarSalsas] = useState([])
    const [postres, guardarPostres] = useState([])
    const [sinAlch, guardarSinAlch] = useState([])
    const [vinos, guardarVinos] = useState([])
    const [cervezas, guardarCervezas] = useState([])



    const traerMenu = async () => {

        await axios.get('/api/menu', {
            params: {
                f: 'al plato'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarAlPlato(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'guarniciones'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarGuarni(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'veggie'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarVeggie(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'lomito'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarLomito(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'mila'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarMila(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'porcion papa'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarPorcionPapa(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'hamburguesas'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarHamburguesas(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'pastas'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarPastas(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'salsas'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarSalsas(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'postres'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarPostres(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'sin alch'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarSinAlch(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'vinos'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarVinos(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })

        await axios.get('/api/menu', {
            params: {
                f: 'cervezas'
            }
        })
            .then(res => {

                if (res.status === 200) {
                    guardarCervezas(res.data)
                }

            })
            .catch(error => {
                console.log(error)
            })
    }

    useSWR("/api/menu", traerMenu);

    return (
        <>
            <Menu
                alPlato={alPlato}
                guarni={guarni}
                veggie={veggie}
                lomito={lomito}
                mila={mila}
                porcionPapa={porcionPapa}
                hamburguesas={hamburguesas}
                pastas={pastas}
                salsas={salsas}
                postres={postres}
                sinAlch={sinAlch}
                vinos={vinos}
                cervezas={cervezas}
            />
        </>
    )
}
