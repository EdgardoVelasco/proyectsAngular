export class Perro{
    private _name:string;
    private _description:string;
    private _maxLife:number;
    private _urlImage:string;

    constructor(name:string, description:string, maxLife:number, urlImage:string){
        this._name=name;
        this._description=description;
        this._maxLife=maxLife;
        this._urlImage=urlImage;
    }
    public get name():string{return this._name;}
    public get description():string{return this._description;}
    public get maxLife():number{return this._maxLife;}
    public get urlImage():string{return this._urlImage;}
}