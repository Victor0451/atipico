import { Atipico } from '../../libs/config'


export default async function handler(req, res) {

    if (req.method === "GET") {

        if (req.query.f && req.query.f === "al plato") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 1,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "guarniciones") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 2,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "veggie") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 3,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "lomito") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 4,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "mila") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 5,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "porcion papa") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 6,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "hamburguesas") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 7,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "pastas") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 8,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "salsas") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 9,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "postres") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 10,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "sin alch") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 11,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "vinos") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 12,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "cervezas") {

            const alPlato = await Atipico.menu.findMany({

                where: {
                    idcategoria: 13,
                    estado: true
                }

            })

            res.status(200).json(alPlato);


        } if (req.query.f && req.query.f === "traer categorias") {

            const categorias = await Atipico.categorias.findMany({

                where: {

                    estado: true
                }

            })

            res.status(200).json(categorias);

        } if (req.query.f && req.query.f === "traer menu") {

            const menu = await Atipico.$queryRaw`
            SELECT 
                m.idmenu,
                c.categoria,
                m.nombre,
                m.descripcion,
                m.precio,
                CASE
                    WHEN m.estado = true THEN 'Activo'
                    WHEN m.estado = false THEN 'Baja'
                    END as estado,
                m.fecha
            FROM menu as m
            INNER JOIN categorias as c on c.idcategoria = m.idcategoria            
            
            
        
        `

            res.status(200).json(menu);

        }


    } if (req.method === "POST") {

        if (req.body.f && req.body.f === "reg plato") {

            const plato = await Atipico.menu.create({
                data: {
                    idcategoria: parseInt(req.body.idcategoria),
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    precio: parseFloat(req.body.precio),
                    estado: req.body.estado,
                    fecha: new Date(req.body.fecha)
                }
            })

            res.status(200).json(plato);

        } if (req.body.f && req.body.f === "reg cate") {

            const cate = await Atipico.categorias.create({
                data: {
                    categoria: req.body.categoria,
                    estado: req.body.estado,
                    fecha: new Date(req.body.fecha)
                }
            })

            res.status(200).json(cate);

        }


    } if (req.method === "PUT") {

        if (req.body.f && req.body.f === "update estado") {

            const upEst = await Atipico.menu.update({

                data: {
                    estado: req.body.estado
                },

                where: {
                    idmenu: parseInt(req.body.id)
                }

            })

            res.status(200).json(upEst);


        }
    }





}