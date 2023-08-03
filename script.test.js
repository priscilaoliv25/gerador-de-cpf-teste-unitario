/** @jest-environment jsdom */

const { validarCPF } = require("./script");

test ('Validar CPF valido', ()=>{

    var cpf = validarCPF("71326764071");
    expect(cpf).toBe(true);
} )

test ('Validar CPF invalido', ()=>{

    var cpf = validarCPF("12345678900");
    expect(cpf).toBe(false);
} )