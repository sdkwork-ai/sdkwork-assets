import type { AssetItem } from './asset-item';
export interface AssetItemHttpResponse {
    code: 0;
    data: unknown & {
        item: AssetItem;
    };
    /** Server-owned request correlation id. */
    traceId: string;
}
//# sourceMappingURL=asset-item-http-response.d.ts.map