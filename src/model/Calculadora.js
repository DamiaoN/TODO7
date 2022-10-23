class Calculadora {
    static async soma(numero1, numero2) {

        if (Number(numero1) & Number(numero2)) {

            const resultadoSoma = numero1 + numero2

            return resultadoSoma;

        } if (isNaN(numero1) || isNaN(numero2)) {

            return 0;

        } else throw new Error("nao e um numero");
    }

    static async subtracao(numero1, numero2) {

        if (Number(numero1) & Number(numero2)) {

            const resultadoSubtracao = numero1 - numero2

            return resultadoSubtracao

      } if (isNaN(numero1) || isNaN(numero2)) {

            return 0;

        } else throw new Error("nao e um numero");
    }

    static async multiplicacao(numero1, numero2) {

        if (Number(numero1) & Number(numero2)) {

            const resultadoMultiplicacao = numero1 * numero2

            return resultadoMultiplicacao

        }if (isNaN(numero1) || isNaN(numero2)) {

            return 0;

        } else throw new Error("nao e um numero")
    }

    static async divisao(numero1, numero2) {

        if (Number(numero1) & Number(numero2)) {

            const resultadoDivisao = numero1 / numero2

            return resultadoDivisao

        }if (isNaN(numero1) || isNaN(numero2)) {

            return 0;

        } else throw new Error("nao e um numero")
    }
}

module.exports = Calculadora;