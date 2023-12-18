// Снова объявили глобальную функцию fnGlobal для использования ее в secondo.ts
declare var fnGlobal: (param: string) => void;

class Secondo {
    constructor(
        public name: string = '',
        public surname?: string
    ) {}

    public run(): void {
        fnGlobal(`Hello ${this.name} from secondo.ts file!`); // <- здесь используем глобальную функцию fnGlobal
    }
}

const secondo: Secondo = new Secondo('John');
secondo.run();