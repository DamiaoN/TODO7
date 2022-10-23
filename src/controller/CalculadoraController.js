const Calculadora = require("../model/Calculadora");

class CalculadoraController {
    static async soma(req, res) {
        try {
            const query = req.query;
            console.log("query:", query);
            const values = Object.values(query);
            console.log("values:", values);
            const converteNumero = values.map(numero => {
                return Number(numero);
            })    
            console.log("conversao:", converteNumero);
            const soma = await Calculadora.soma(...converteNumero);
            res.status(200).json({
                Resultado: soma,
                Erro: "Erro inesperado.",
            });
        } catch (erro) {
            if (erro) {
                res.status(400).json({ mensagem: "", erro: true });
            }
        }
    }

    static async subtracao(req, res) {
        try {
            const query = req.query;
            console.log("query:", query);
            const values = Object.values(query);
            console.log("values:", values);
            const converteNumero = values.map(numero => {
                return Number(numero);
            })
            console.log("conversao:", converteNumero);
            const subtracao = await Calculadora.subtracao(...converteNumero);
            res.status(200).json({
                Resultado: subtracao,
                Erro: "Erro inesperado."
            });
        } catch (erro) {
            if (erro) {
                res.status(400).json({ mensagem: "", erro: true });
            }
        }
    }

    static async multiplicacao(req, res) {
        try {
            const query = req.query;
            console.log("query:", query);
            const values = Object.values(query);
            console.log("values:", values);
            const converteNumero = values.map(numero => {
                return Number(numero);
            })
            console.log("conversao:", converteNumero);
            const multiplicacao = await Calculadora.multiplicacao(...converteNumero);
            res.status(200).json({
                Resultado: multiplicacao,
                Erro: "Erro inesperado.",
            });
        } catch (erro) {
            if (erro) {
                res.status(400).json({ mensagem: "", erro: true });
            }
        }
    }

    static async divisao(req, res) {
        try {
            const query = req.query;
            console.log("query:", query);
            const values = Object.values(query);
            console.log("values:", values);
            const converteNumero = values.map(numero => {
                return Number(numero);
            })
            console.log("conversao:", converteNumero);
            const divisao = await Calculadora.divisao(...converteNumero);
            res.status(200).json({
                Resultado: divisao,
                Erro: "Erro inesperado.",
            });
        } catch (erro) {
            if (erro) {
                res.status(400).json({ mensagem: "", erro: true });
            }
        }
    }

}

module.exports = CalculadoraController