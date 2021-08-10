import React from 'react';

import Items from '../Items';
import { extratoLista } from '../../info';

import { Box, Botao } from "../UI";

const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(({ id, type, value, date, from }) => (
                <Items key={id}
                    type={type}
                    value={value}
                    from={from}
                    date={date}
                >
                </Items>
            ))}
            <Botao>Ver Mais</Botao>
        </Box>
    );
}

export default Extrato;