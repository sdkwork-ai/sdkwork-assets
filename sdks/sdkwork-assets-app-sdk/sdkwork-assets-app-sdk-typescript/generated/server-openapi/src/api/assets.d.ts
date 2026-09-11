import type { ApiRequestOptions, HttpClient } from '../http/client';
import type { AssetActionRequest, AssetCollection, AssetCollectionItem, AssetCollectionListData, AssetItem, AssetListData, AssetRelation, CreateAssetCollectionItemRequest, CreateAssetCollectionRequest, CreateAssetRelationRequest, CreateAssetRequest, UpdateAssetRequest } from '../types';
export declare class AssetsAssetRelationsApi {
    private client;
    constructor(client: HttpClient);
    /** Create an asset relation */
    create(assetId: string, body: CreateAssetRelationRequest, requestOptions?: ApiRequestOptions): Promise<AssetRelation>;
    /** Delete an asset relation */
    delete(assetId: string, relationId: string, requestOptions?: ApiRequestOptions): Promise<void>;
}
export declare class AssetsAssetCollectionItemsApi {
    private client;
    constructor(client: HttpClient);
    /** Add an asset to a collection */
    create(collectionId: string, body: CreateAssetCollectionItemRequest, requestOptions?: ApiRequestOptions): Promise<AssetCollectionItem>;
    /** Remove an asset from a collection */
    delete(collectionId: string, itemId: string, requestOptions?: ApiRequestOptions): Promise<void>;
}
export interface AssetsAssetCollectionsListParams {
    cursor?: string;
    pageSize?: number;
}
export declare class AssetsAssetCollectionsApi {
    private client;
    constructor(client: HttpClient);
    /** List asset collections */
    list(params?: AssetsAssetCollectionsListParams, requestOptions?: ApiRequestOptions): Promise<AssetCollectionListData>;
    /** Create an asset collection */
    create(body: CreateAssetCollectionRequest, requestOptions?: ApiRequestOptions): Promise<AssetCollection>;
}
export interface AssetsListParams {
    cursor?: string;
    pageSize?: number;
    kind?: string;
    sourceType?: string;
    q?: string;
}
export declare class AssetsApi {
    private client;
    readonly assetCollections: AssetsAssetCollectionsApi;
    readonly assetCollectionItems: AssetsAssetCollectionItemsApi;
    readonly assetRelations: AssetsAssetRelationsApi;
    constructor(client: HttpClient);
    /** List global assets */
    list(params?: AssetsListParams, requestOptions?: ApiRequestOptions): Promise<AssetListData>;
    /** Create a global asset metadata record */
    create(body: CreateAssetRequest, requestOptions?: ApiRequestOptions): Promise<AssetItem>;
    /** Get a global asset */
    retrieve(assetId: string, requestOptions?: ApiRequestOptions): Promise<AssetItem>;
    /** Update a global asset */
    update(assetId: string, body: UpdateAssetRequest, requestOptions?: ApiRequestOptions): Promise<AssetItem>;
    /** Archive a global asset */
    archive(assetId: string, body: AssetActionRequest, requestOptions?: ApiRequestOptions): Promise<AssetItem>;
    /** Restore an archived global asset */
    restore(assetId: string, body: AssetActionRequest, requestOptions?: ApiRequestOptions): Promise<AssetItem>;
}
export declare function createAssetsApi(client: HttpClient): AssetsApi;
//# sourceMappingURL=assets.d.ts.map