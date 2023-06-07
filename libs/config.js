import { PrismaClient as AtipicoClient } from '../prisma/generated/atipico'

let Atipico;

//check if we are running in production mode
if (process.env.NODE_ENV === 'production') {

    Atipico = new AtipicoClient()


} else {
    //check if there is already a connection to the database
    if (!global.Atipico) {

        global.Atipico = new AtipicoClient()

    }

    Atipico = global.Atipico

}

export { Atipico };
