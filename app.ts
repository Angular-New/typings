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