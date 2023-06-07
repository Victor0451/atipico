import React from 'react'
import {
    Card,
    CardHeader,
    Typography,
    Alert,
    Button,
    Select,
    Option,
    Input,
    CardBody,
    Textarea,

} from "@material-tailwind/react";
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import Link from 'next/link'


export const FormNuevoMenu = ({
    categoriaRef,
    nombreRef,
    precioRef,
    categorias,
    handleChange,
    errores,
    regPlato,
    regCate
}) => {
    return (
        <Card className="h-full w-full p-4 bg-black border-2 border-white text-white" >
            <CardHeader floated={false} shadow={false} className="rounded-none bg-black">
                <Typography className="text-orange-600" variant="h2">Registro de Menu</Typography>
            </CardHeader>

            <CardBody>


                <div className='p-4 border-2 border-white rounded-lg mt-6 '>

                    <Typography variant="h5" color="white" className="mb-6">
                        Categoria
                    </Typography>

                    <div className="grid md:grid-cols-3 md:gap-6">

                        <div className="relative z-0 w-full mb-6 group">
                            <Input color='orange' size="md" label="Categoria" type="text" inputRef={categoriaRef} />

                        </div>

                    </div>

                    {errores ? (

                        <Alert
                            className='mt-5 mb-5'
                            color="red"
                            icon={
                                <InformationCircleIcon
                                    strokeWidth={2}
                                    className="h-6 w-6"
                                />

                            }
                        >
                            {errores}
                        </Alert>

                    ) : null}

                    <div className='flex justify-end'>
                        <Button onClick={regCate} >
                            Registrar
                        </Button>

                        <Link href={"/"}>
                            <Button className='ml-1' color='red'>
                                Canelar
                            </Button>
                        </Link>
                    </div>

                </div>

                <hr className='border-2 border-orange-600 mt-5 mb-5' />

                <div className='p-4 border-2 border-white rounded-lg mt-6 '>

                    <Typography variant="h5" color="white" className="mb-6">
                        Plato
                    </Typography>

                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="relative w-full mb-6 group">
                            <Select
                                color='orange'
                                label="Elige una Categoria"
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}
                                onChange={(value) => { handleChange('categoria', value) }}
                            >
                                {categorias.map((i, index) => (
                                    <Option key={index} value={i.idcategoria}>{i.categoria}</Option>
                                ))}



                            </Select>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input color='orange' size="md" label="Nombre" type="text" inputRef={nombreRef} />

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <Input color='orange' size="md" label="Precio" type="text" inputRef={precioRef} />

                        </div>


                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <Textarea rows={5} color='orange' size="md" label="Descripcion" type="text" onChange={(value) => { handleChange('descrip', value) }} />

                    </div>

                    {errores ? (

                        <Alert
                            className='mt-5 mb-5'
                            color="red"
                            icon={
                                <InformationCircleIcon
                                    strokeWidth={2}
                                    className="h-6 w-6"
                                />

                            }
                        >
                            {errores}
                        </Alert>

                    ) : null}

                    <div className='flex justify-end'>
                        <Button onClick={regPlato} >
                            Registrar
                        </Button>

                        <Link href={"/"}>
                            <Button className='ml-1' color='red'>
                                Canelar
                            </Button>
                        </Link>
                    </div>

                </div>

            </CardBody>
        </Card>
    )
}
