export declare const sdkMetadata: {
    name: string;
    packageName: string;
    sdkOwner: string;
    apiAuthority: string;
    language: string;
    standardProfile: string;
    baseUrl: string;
    apiPrefix: string;
    sdkDependencies: {
        workspace: string;
        role: string;
        required: boolean;
        dependencyMode: string;
        apiPrefix: string;
        apiAuthority: string;
        generatedTransportImportPolicy: string;
        packageByLanguage: {
            typescript: string;
        };
    }[];
};
export declare const operations: {
    readonly "assets.list": {
        readonly method: "GET";
        readonly path: "/app/v3/api/assets";
    };
    readonly "assets.create": {
        readonly method: "POST";
        readonly path: "/app/v3/api/assets";
    };
    readonly "assets.retrieve": {
        readonly method: "GET";
        readonly path: "/app/v3/api/assets/{assetId}";
    };
    readonly "assets.update": {
        readonly method: "PATCH";
        readonly path: "/app/v3/api/assets/{assetId}";
    };
    readonly "assets.archive": {
        readonly method: "POST";
        readonly path: "/app/v3/api/assets/{assetId}/archive";
    };
    readonly "assets.restore": {
        readonly method: "POST";
        readonly path: "/app/v3/api/assets/{assetId}/restore";
    };
    readonly "assetCollections.list": {
        readonly method: "GET";
        readonly path: "/app/v3/api/assets/collections";
    };
    readonly "assetCollections.create": {
        readonly method: "POST";
        readonly path: "/app/v3/api/assets/collections";
    };
    readonly "assetCollectionItems.create": {
        readonly method: "POST";
        readonly path: "/app/v3/api/assets/collections/{collectionId}/items";
    };
    readonly "assetCollectionItems.delete": {
        readonly method: "DELETE";
        readonly path: "/app/v3/api/assets/collections/{collectionId}/items/{itemId}";
    };
    readonly "assetRelations.create": {
        readonly method: "POST";
        readonly path: "/app/v3/api/assets/{assetId}/relations";
    };
    readonly "assetRelations.delete": {
        readonly method: "DELETE";
        readonly path: "/app/v3/api/assets/{assetId}/relations/{relationId}";
    };
};
//# sourceMappingURL=operations.d.ts.map