import type { AssetRelation } from './asset-relation';
export interface AssetRelationHttpResponse {
    code: 0;
    data: unknown & {
        item: AssetRelation;
    };
    /** Server-owned request correlation id. */
    traceId: string;
}
//# sourceMappingURL=asset-relation-http-response.d.ts.map