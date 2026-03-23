export interface ParsedEndpoint {
    path: string;
    method: string;
    summary: string;
    parameters: string[];
    responses: string[];
}
export declare function parseSpec(specPath: string): Promise<ParsedEndpoint[]>;
//# sourceMappingURL=parser.d.ts.map