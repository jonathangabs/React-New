import react, { useState, useEffect } from 'react';

export default function Relogio() {
    const [horaAtual, setHoraAtual] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHoraAtual(new Date().toLocaleTimeString());
        }, 1000);
        
        return () => clearInterval(intervalo);
    }, []);

    return (
        <>
            <p>Hora atual:</p>
            <p>{horaAtual}</p>
        </>
    );
}
