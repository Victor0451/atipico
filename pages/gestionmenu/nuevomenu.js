import React, { useState } from 'react'
import { FormNuevoMenu } from '@/components/menu/FormNuevoMenu'
import axios from 'axios'
import { toast } from 'react-toastify'
import useSWR from 'swr'
import moment from 'moment'


export default function NuevoMenu() {

    let categoriaRef = React.createRef()
    let nombreRef = React.createRef()
    let precioRef = React.createRef()

    const [categorias, guardarCategorias] = useState([])
    const [cateSelec, guardarCateSelec] = useState("")
    const [descrip, guardarDescrip] = useState("")
    const [errores, guardarErrores] = useState(null)

    const traerCategorias = async () => {

        await axios.get('/api/menu', {
            params: {
                f: 'traer categorias'
            }
        })
            .then(res => {

                if (res.data.length > 0) {

                    guardarCategorias(res.data)

                } else if (res.data.length === 0) {

                    toast.info("No hay categorias registradas")

                }
            })
            .catch(error => {
                console.log(error)
                toast.error("Ocurrio un error al traer las categorias")
            })

    }

    const handleChange = (f, value) => {

        if (f === 'categoria') {

            guardarCateSelec(value)

        } else if (f === 'descrip') {

            guardarDescrip(value.target.value)

        }

    }

    const regPlato = async () => {

        guardarErrores(null)

        const pla = {

            idcategoria: cateSelec,
            nombre: nombreRef.current.value,
            descripcion: descrip,
            precio: precioRef.current.value,
            estado: true,
            fecha: moment().format('YYYY-MM-DD'),
            f: 'reg plato'
        }

        console.log(pla)

        if (pla.idcategoria === "") {

            guardarErrores("Debes seleccionar una categoria")

        } else if (pla.nombre === "") {

            guardarErrores("Debes ingresar el nombre del plato")

        } else if (pla.precio === "") {

            guardarErrores("Debes ingresar el precio plato")

        } else {


            await axios.post('/api/menu', pla)
                .then(res => {

                    if (res.status === 200) {

                        toast.success("El plato se registro con exito")

                    }

                })
                .catch(error => {
                    console.log(error)
                    toast.error("Ocurrio un error al registrar el plato")
                })

        }

    }

    const regCate = async () => {

        guardarErrores(null)

        let cate = {

            categoria: categoriaRef.current.value,
            estado: true,
            fecha: moment().format('YYYY-MM-DD'),
            f: 'reg cate'

        }

        if (cate.categoria === "") {

            guardarErrores("Debes ingresar la categoria")

        } else {

            await axios.post('/api/menu', cate)
                .then(res => {

                    if (res.status === 200) {

                        toast.success("Categoria registrada con exito")

                    }

                })
                .catch(error => {
                    console.log(error)
                    toast.error("Ocurrio un error al crear la categoria")
                })

        }

    }

    useSWR("/api/menu", traerCategorias);


    return (
        <>
            <FormNuevoMenu
                categoriaRef={categoriaRef}
                nombreRef={nombreRef}
                precioRef={precioRef}
                categorias={categorias}
                errores={errores}
                handleChange={handleChange}
                regPlato={regPlato}
                regCate={regCate}
            />
        </>
    )
}
