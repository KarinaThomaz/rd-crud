export class Produto {
    constructor(
        public codigo?: number,
        public desc?: string,
        public reg_anvisa?: string,
        public controlado?: boolean,
        public cod_grupo?: number
    ) { }
}