const Calculadora = require("../model/Calculadora");

//Testes para operação de Adição

describe("Testar operacoes da model", () => {
    test("Deve retornar 5 para 2 e 3", async () => {
        const soma = await Calculadora.soma(2, 3)
        expect(soma).toEqual(5)
    })


    test("Deve retornar 4.5 para 1.5 e 3", async () => {
        const soma = await Calculadora.soma(1.5, 3)
        expect(soma).toEqual(4.5)
    })

    test("Deve retornar 0 quando valor 1 não for numérico", async () => {
        const soma = await Calculadora.soma(undefined, 10)
        expect(soma).toEqual(0)
    })

    test("Deve retornar 1 quando valor 2 não for numérico", async () => {
        const soma = await Calculadora.soma(10, undefined)
        expect(soma).toEqual(0)
    })

    test("testando metodo de soma com erro", async () => {
        try {
            const soma = await Calculadora.soma(2, "a")
        }
        catch (erro) {
            expect(erro).toBeTruthy()
        }
    })

    //Testes para operação de Subtração

    test("testando metodo de subtracao", async () => {
        const subtracao = await Calculadora.subtracao(5, 3)
        expect(subtracao).toEqual(2)
    })

    test("Deve retornar 5 para 8 e 3 em formato texto", async () => {
        const subtracao = await Calculadora.subtracao(5.5, 1.5)
        expect(subtracao).toEqual(4);
    })

    test("Deve retornar 5 para 8 e 3 em formato texto", async () => {
        const subtracao = await Calculadora.subtracao(5.5, 1.5)
        expect(subtracao).toEqual(4);
    })

    test("Deve retornar 4 para 5.5 e 1.5", async () => {
        const subtracao = await Calculadora.subtracao('5.5', '1.5')
        expect(subtracao).toEqual(4);
    })

    test("Deve retornar 0 quando valor 1 não for numérico", async () => {
        const soma = await Calculadora.subtracao(undefined, 5)
        expect(soma).toEqual(0)
    })

    test("Deve retornar 1 quando valor 2 não for numérico", async () => {
        const soma = await Calculadora.subtracao(5, undefined)
        expect(soma).toEqual(0)
    })

    test("testando metodo de subtracao com erro", async () => {
        try {
            const subtracao = await Calculadora.subtracao(5, "a")
        }
        catch (erro) {
            expect(erro).toBeTruthy()
        }
    })

    //Testes para operação da Multiplicação

    test("Deve retornar 6 para 2 e 3", async () => {
        const multiplicacao = await Calculadora.multiplicacao(2, 3)
        expect(multiplicacao).toEqual(6)
    })

    test("Deve retornar 6 para 2 e 3 em formato texto", async () => {
        const multiplicacao = await Calculadora.multiplicacao('2', '3')
        expect(multiplicacao).toEqual(6)
    })

    test("Deve retornar 6 para 2 e 3", async () => {
        const multiplicacao = await Calculadora.multiplicacao(1.5, 3)
        expect(multiplicacao).toEqual(4.5)
    })

    test("Deve retornar 4.5 para 1.5 e 3", async () => {
        const multiplicacao = await Calculadora.multiplicacao(2, 3)
        expect(multiplicacao).toEqual(6)
    })

    test("Deve retornar 0 quando valor 1 não for numérico", async () => {
        const multiplicacao = await Calculadora.multiplicacao(undefined, 5)
        expect(multiplicacao).toEqual(0)
    })

    test("Deve retornar 1 quando valor 2 não for numérico", async () => {
        const multiplicacao = await Calculadora.multiplicacao(5, undefined)
        expect(multiplicacao).toEqual(0)
    })

    test("testando metodo de multiplicacao com erro", async () => {
        try {
            const multiplicacao = await Calculadora.multiplicacao(3, "a")
        }
        catch (erro) {
            expect(erro).toBeTruthy()
        }
    })

    //Testes para operação da Divisão

    test("Deve retornar 2 para 6 e 3", async () => {
        const divisao = await Calculadora.divisao(6, 3)
        expect(divisao).toEqual(2)
    })

    test("Deve retornar 6 para 2 e 3 em formato texto", async () => {
        const divisao = await Calculadora.divisao('6', '3')
        expect(divisao).toEqual(2)
    })

   
    test("Deve retornar 0 quando valor 1 não for numérico", async () => {
        const soma = await Calculadora.divisao(undefined, 5)
        expect(soma).toEqual(0)
    })

    test("Deve retornar 1 quando valor 2 não for numérico", async () => {
        const soma = await Calculadora.divisao(5, undefined)
        expect(soma).toEqual(0)
    })

    test("testando metodo de divisao com erro", async () => {
        try {
            const divisao = await Calculadora.divisao(30, "a")
        }
        catch (erro) {
            expect(erro).toBeTruthy()
        }
    })

});