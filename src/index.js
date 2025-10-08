import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Relogio from './Relogio';
import Letreiro from './Letreiro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    <h1>Aula01 React</h1>
    <h3>Atividade 1: Relógio</h3>
    <Relogio/>
    <h3>Atividade 2: Letreiro</h3>
    <Letreiro/>
  </>
);

