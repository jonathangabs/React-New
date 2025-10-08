import React, { useState, useEffect } from 'react';

export default function Letreiro() {
    const texto = 'Conheça a Fatec';
    const [exibido, setExibido] = useState('');
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setExibido((prev) => {
                if (indice === texto.length) {
                    setIndice(0);
                    return '';
                }
                setIndice(indice + 1);
                return texto.substring(0, indice + 1);
            });
        }, 200);

        return () => clearInterval(intervalo);
    }, [indice, texto]);

    return (
        <>
            <p>{exibido}</p>
        </>
    );
} 