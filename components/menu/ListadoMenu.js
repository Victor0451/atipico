import React, { useMemo } from 'react'
import DataTable from "react-data-table-component";
import FilterComponent from '../Layouts/FilterComponent';
import moment from 'moment';
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

} from "@material-tailwind/react";
import { CheckCircleIcon, XCircleIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

export const ListadoMenu = ({
    listado,
    updateEstado
}) => {

    const columns = [

        {
            name: "Fecha",
            selector: row => `${moment(row.fecha_solicitud).format('DD/MM/YYYY')}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "Categoria",
            selector: row => `${row.categoria}`,
            sortable: true,
            grow: 0.1
        },

        {
            name: "Plato",
            selector: row => `${row.nombre}`,
            sortable: true,
            grow: 0.3
        },
        {
            name: "Decrip.",
            selector: row => `${row.descripcion}`,
            sortable: true,
            grow: 0.3
        },
        {
            name: "Precio",
            selector: row => `$${row.precio}`,
            sortable: true,
            grow: 0.1
        },


        {
            name: "Estado",
            selector: row => `${row.estado}`,
            sortable: true,
            grow: 0.1
        },
        {
            name: "acciones",
            button: true,
            grow: 0.1,
            cell: (row, index) =>
            (
                <>

                    <CheckCircleIcon color='green' className="butlist mt-px h-7 w-7" onClick={() => updateEstado('A', row.idmenu)} />

                    <XCircleIcon color='red' className="butlist mt-px h-7 w-7" onClick={() => updateEstado('B', row.idmenu)} />

                </>

            )
        }

    ];

    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
        false
    );

    const filteredItems = listado.filter(
        item =>
            JSON.stringify(item)
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1
    );

    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (

            <>
                <FilterComponent
                    onFilter={e => setFilterText(e.target.value)}
                    onClear={handleClear}
                    filterText={filterText}
                />

            </>


        );
    }, [filterText, resetPaginationToggle]);

    return (
        <Card className="h-full w-full p-4 bg-black border-2 border-white text-white" >
            <CardHeader floated={false} shadow={false} className="rounded-none bg-black">
                <Typography className="text-orange-600" variant="h2">Registro de Menu</Typography>
            </CardHeader>

            <CardBody>
                <div className='mt-4'>
                    <Typography variant="h5" color="blue-gray">
                        Listado de Menu Registrados
                    </Typography>
                    <Typography color="gray" className="mt-1 mb-5 font-normal">
                        <u>Total</u>: {listado.length}
                    </Typography>


                    <DataTable
                        columns={columns}
                        data={filteredItems}
                        defaultSortField="name"
                        striped
                        pagination
                        subHeader
                        subHeaderComponent={subHeaderComponent}
                    />

                </div>


            </CardBody>
        </Card>
    )
}
