import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Alert,
    Button,
    Select,
    Option,
    Input,
    CardFooter

} from "@material-tailwind/react";
import { RocketLaunchIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

export const HomeScreen = () => {
    return (
        <Card className="h-full w-full p-4 bg-black border-2 border-white text-white" >
            <CardHeader floated={false} shadow={false} className="rounded-none bg-black">
                <Typography className="text-orange-600" variant="h2">Gestion Del Sistema</Typography>
            </CardHeader>

            <CardBody>
                <div className='p-4 border-2 border-white rounded-lg mt-6 '>

                    <Typography variant="h5" color="white" className="mb-6">
                        Opciones
                    </Typography>

                    <div className="grid md:grid-cols-2 md:gap-6">

                        <div className="  w-full mb-6 group">

                            <Card className="mt-6 w-96 bg-black border-2 border-white" >
                                <CardBody>
                                    <RocketLaunchIcon className="text-orange-600 w-12 h-12 mb-4" />
                                    <Typography variant="h5" color="white" className="mb-2">
                                        Menu Virtual
                                    </Typography>

                                </CardBody>
                                <CardFooter className="pt-0">
                                    <a href="/menu" className="inline-block">
                                        <Button size="sm" variant="text" className=" text-white flex items-center gap-2">
                                            Entrar
                                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>

                        </div>

                        <div className="  w-full mb-6 group">

                            <Card className="mt-6 w-96 bg-black border-2 border-white" >
                                <CardBody>
                                    <RocketLaunchIcon className="text-orange-600 w-12 h-12 mb-4" />
                                    <Typography variant="h5" color="white" className="mb-2">
                                        Registrar Categorias y Platos
                                    </Typography>

                                </CardBody>
                                <CardFooter className="pt-0">
                                    <a href="/gestionmenu/nuevomenu" className="inline-block">
                                        <Button size="sm" variant="text" className=" text-white flex items-center gap-2">
                                            Entrar
                                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>

                        </div>

                        <div className="  w-full mb-6 group">

                            <Card className="mt-6 w-96 bg-black border-2 border-white" >
                                <CardBody>
                                    <RocketLaunchIcon className="text-orange-600 w-12 h-12 mb-4" />
                                    <Typography variant="h5" color="white" className="mb-2">
                                        Listado de Platos
                                    </Typography>

                                </CardBody>
                                <CardFooter className="pt-0">
                                    <a href="/gestionmenu/listadomenu" className="inline-block">
                                        <Button size="sm" variant="text" className=" text-white flex items-center gap-2">
                                            Entrar
                                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>

                        </div>


                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
