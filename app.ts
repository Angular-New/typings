// С помощью declare объявили, что существует функция fnGlobal, которая существует в общем глобальном пространстве JavaScript данного проекта
// и компилятору TS следует поискать функцию с таким именем там и использовать ее - на строке 12
declare var fnGlobal: (param: string) => void;

class Awesome {
    private _id: number;
    constructor(id: number) {
        this._id = id;
    }

    public run(): void {
        fnGlobal('Hello from app.ts file!'); // <- здесь используем глобальную функцию fnGlobal
    }
}

const awesome: Awesome = new Awesome(123);
awesome.run();