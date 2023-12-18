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