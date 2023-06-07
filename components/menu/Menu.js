import React from 'react'
import { ItemMenu } from './ItemMenu'



export const Menu = ({
    alPlato,
    guarni,
    veggie,
    lomito,
    mila,
    porcionPapa,
    hamburguesas,
    pastas,
    salsas,
    postres,
    sinAlch,
    vinos,
    cervezas,
}) => {
    return (
        <div className='p-2'>
            <div className=" text-white border-2 rounded-xl border-white py-6">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-full lg:mx-0 border-t border-b border-orange-600">
                        <h1 className="mt-5 mb-5 text-3xl font-bold tracking-tight sm:text-4xl text-orange-600 flex justify-end ">AL PLATO</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {alPlato.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>

                    <div className="mt-10 mx-auto max-w-full lg:mx-0 border-t border-orange-600">
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-2xl text-orange-600 flex justify-end ">Veggie</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {guarni.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>

                    <div className="mt-10 mx-auto max-w-full lg:mx-0 border-t border-orange-600">
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-2xl text-orange-600 flex justify-end ">Guarniciones</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {veggie.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>

                    <div className='flex justify-end'>
                        <img
                            className="mt-10 h-2/3 w-2/3 rounded-lg shadow-sm shadow-blue-gray-900/50 "
                            src="img/alplato.jpg"
                            alt="nature image"
                        />
                    </div>

                </div>
            </div>

            <hr className='mt-5 mb-5 border-black' />

            <div className=" text-white border-2 rounded-xl border-white py-6">
                <div className=" mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-full lg:mx-0 border-t border-orange-600">
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl text-orange-600 flex justify-end ">ENTRE PANES</h1>
                    </div>

                    <div className="mt-5 mx-auto max-w-full lg:mx-0 border-t border-orange-600">
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-2xl text-orange-600 flex justify-end ">Lomitos</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {lomito.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>

                    <div className="mt-10 mx-auto max-w-full lg:mx-0 border-t border-orange-600">
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-2xl text-orange-600 flex justify-end ">Milanesas</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {mila.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>

                    <div className="mt-10 mx-auto max-w-full lg:mx-0 border-t border-orange-600">
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-2xl text-orange-600 flex justify-end ">Porcion de Papas</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {porcionPapa.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>

                    <div className='flex justify-start'>
                        <img
                            className="mt-10 h-2/3 w-2/3 rounded-lg shadow-sm shadow-blue-gray-900/50 "
                            src="img/lomito.jpg"
                            alt="nature image"
                        />
                    </div>

                </div>

            </div>

            <hr className='mt-5 mb-5 border-black' />

            <div className=" text-white border-2 rounded-xl border-white py-6">
                <div className=" mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-full lg:mx-0 border-t border-b border-orange-600">
                        <h1 className="mt-5 mb-5 text-3xl font-bold tracking-tight sm:text-4xl text-orange-600 flex justify-end ">HAMBURGUESAS</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {hamburguesas.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>

                    <div className='flex justify-end'>
                        <img
                            className="mt-10 h-2/3 w-2/3 rounded-lg shadow-sm shadow-blue-gray-900/50 "
                            src="img/hamburguesa.jpg"
                            alt="nature image"
                        />
                    </div>

                </div>

            </div>

            <hr className='mt-5 mb-5 border-black' />

            <div className=" text-white border-2 rounded-xl border-white py-6">
                <div className=" mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-full lg:mx-0 border-t border-b border-orange-600">
                        <h1 className="mt-5 mb-5 text-3xl font-bold tracking-tight sm:text-4xl text-orange-600 flex justify-end ">PASTAS</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {pastas.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>

                    <div className="mt-10 mx-auto max-w-full lg:mx-0 border-t border-orange-600">
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-2xl text-orange-600 flex justify-end ">Salsas</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {salsas.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>

                    <div className='flex justify-start'>
                        <img
                            className="mt-10 h-2/3 w-2/3 rounded-lg shadow-sm shadow-blue-gray-900/50 "
                            src="img/pastas.jpg"
                            alt="nature image"
                        />
                    </div>

                </div>

            </div>

            <hr className='mt-5 mb-5 border-black' />

            <div className=" text-white border-2 rounded-xl border-white py-6">
                <div className=" mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-full lg:mx-0 border-t border-b border-orange-600">
                        <h1 className="mt-5 mb-5 text-3xl font-bold tracking-tight sm:text-4xl text-orange-600 flex justify-end ">POSTRES</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {postres.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>

                    <div className='flex justify-end'>
                        <img
                            className="mt-10 h-2/3 w-2/3 rounded-lg shadow-sm shadow-blue-gray-900/50 "
                            src="img/postres.avif"
                            alt="nature image"
                        />
                    </div>

                </div>

            </div>

            <hr className='mt-5 mb-5 border-black' />

            <div className=" text-white border-2 rounded-xl border-white py-6">
                <div className=" mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-full lg:mx-0 border-t border-orange-600">
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl text-orange-600 flex justify-end ">BEBIDAS</h1>
                    </div>


                    <div className="mt-5 mx-auto max-w-full lg:mx-0 border-t border-orange-600">
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-2xl text-orange-600 flex justify-end ">Sin Alcohol</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {sinAlch.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>


                    <div className="mt-10 mx-auto max-w-full lg:mx-0 border-t border-orange-600">
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-2xl text-orange-600 flex justify-end ">Cervezas</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {cervezas.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>


                    <div className="mt-10 mx-auto max-w-full lg:mx-0 border-t border-orange-600">
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-2xl text-orange-600 flex justify-end ">Vinos</h1>
                    </div>

                    <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-5 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {vinos.map((i) => (
                            <ItemMenu i={i} />
                        ))}
                    </div>

                    <div className='flex justify-start'>
                        <img
                            className="mt-10 h-2/3 w-2/3 rounded-lg shadow-sm shadow-blue-gray-900/50 "
                            src="img/cerveza.avif"
                            alt="nature image"
                        />
                    </div>

                </div>

            </div>

        </div>
    )
}
