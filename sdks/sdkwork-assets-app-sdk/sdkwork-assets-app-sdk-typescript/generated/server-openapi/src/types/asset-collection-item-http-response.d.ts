import type { AssetCollectionItem } from './asset-collection-item';
export interface AssetCollectionItemHttpResponse {
    code: 0;
    data: unknown & {
        item: AssetCollectionItem;
    };
    /** Server-owned request correlation id. */
    traceId: string;
}
//# sourceMappingURL=asset-collection-item-http-response.d.ts.map