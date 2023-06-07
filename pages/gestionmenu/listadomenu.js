import React, { useState } from 'react'
import { ListadoMenu as ListMenu } from '@/components/menu/ListadoMenu'
import axios from 'axios'
import { toast } from 'react-toastify'
import useSWR from 'swr'
import { confirmAlert } from 'react-confirm-alert'

export default function ListadoMenu() {

    const [listado, guardarListado] = useState([])

    const tarerMenu = async () => {

        await axios.get('/api/menu', {
            params: {
                f: 'traer menu'
            }
        })
            .then(res => {
                if (res.data.length > 0) {
                    console.log(res.data)

                    guardarListado(res.data)

                } else if (res.data.length === 0) {
                    toast.info("No hay platos registrados")
                }

            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al traer el listado de platos registrados")
            })
    }

    const updateEstado = async (f, id) => {

        await confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro quieres cambiar el estado de menu?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {

                        let estado

                        if (f === "A") {

                            estado = true

                        } else if (f === "B") {

                            estado = false
                        }

                        let data = {

                            estado: estado,
                            id: id,
                            f: "update estado"
                        }

                        axios.put('/api/menu', data)
                            .then(res => {

                                if (res.status === 200) {

                                    toast.success("Estado actualizado")
                                    tarerMenu()
                                }

                            })
                            .catch(error => {
                                console.log(error)
                                toast.error("Ocurrio un error al actualizar el estado")
                            })


                    }
                },
                {
                    label: 'No',
                    onClick: () => {

                        toastr.info("El subsidio fue cancelado", "ATENCION")

                    }
                }
            ]
        });


    }

    useSWR("/api/menu", tarerMenu);



    return (
        <>
            <ListMenu
                listado={listado}
                updateEstado={updateEstado}
            />
        </>
    )
}
