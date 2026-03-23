import SwaggerParser from '@apidevtools/swagger-parser';
export async function parseSpec(specPath) {
    const api = await SwaggerParser.validate(specPath);
    const endpoints = [];
    const paths = api.paths ?? {};
    for (const path in paths) {
        const pathItem = paths[path];
        if (!pathItem)
            continue;
        const methods = ['get', 'post', 'put', 'patch', 'delete'];
        for (const method of methods) {
            const operation = pathItem[method];
            if (!operation)
                continue;
            const parameters = (operation.parameters ?? []).map((p) => {
                const param = p;
                return param.name;
            });
            const responses = Object.keys(operation.responses ?? {});
            endpoints.push({
                path,
                method,
                summary: operation.summary ?? '',
                parameters,
                responses,
            });
        }
    }
    return endpoints;
}
//# sourceMappingURL=parser.js.map