import React from 'react'

export const ItemMenu = ({
    i
}) => {
    return (
        <article key={i.idmenu} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <h3 className="mt-3 text-lg font-semibold leading-6 ">
                    <a href={i.href}>
                        <span className="absolute inset-0" />
                        {i.nombre}
                    </a>
                </h3>

                {i.precio === 0 ? null
                    : (
                        <a
                            className="relative z-10 rounded-full  bg-orange-600 px-3 py-1.5 font-medium "
                        >
                            ${i.precio}
                        </a>
                    )}

            </div>


            {
                i.descripcion === null || i.descripcion === "" ? null
                    : (
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-100">{`(${i.descripcion})`}</p>
                    )
            }

        </article>
    )
}
