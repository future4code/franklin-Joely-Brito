import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para [1, 2, 1]", () => {
        const numerosDuplicados = checaItensDuplicados([1, 2, 1]);
        expect(numerosDuplicados).toEqual(true);
    });

    it("retorna true para [5, 5, 3, 6, 5, 6]", () => {
        const numerosDuplicados = checaItensDuplicados([5, 5, 3, 6, 5, 6]);
        expect(numerosDuplicados).toEqual(true);
    });

    it("retorna true para ['a', 'a', 'b', 'c']", () => {
        const numerosDuplicados = checaItensDuplicados(['a', 'a', 'b', 'c']);
        expect(numerosDuplicados).toEqual(true);
    });

    it("retorna false para ['f', 'd', 'a', 'j']", () => {
        const numerosDuplicados = checaItensDuplicados(['f', 'd', 'a', 'j']);
        expect(numerosDuplicados).toEqual(false);
    });

    it("retorna false para [1, 2, 3]", () => {
        const numerosDuplicados = checaItensDuplicados([1, 2, 3]);
        expect(numerosDuplicados).toEqual(false);
    });

    it("retorna false para [1]", () => {
        const numerosDuplicados = checaItensDuplicados([1]);
        expect(numerosDuplicados).toEqual(false);
    });

    it("retorna false para []", () => {
        const numerosDuplicados = checaItensDuplicados([]);
        expect(numerosDuplicados).toEqual(false);
    })
});
