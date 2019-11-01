import { OkraOptions } from './OkraOptions';
export declare class Angular8OkraService {
    private token;
    okraPublicKey: string;
    constructor(token: string);
    loadScript(): Promise<void>;
    getOkraOptions(obj: OkraOptions): OkraOptions;
}
