import type { MediaKind } from './mediaResource.js';
export declare function stableIdentifierSuffix(value: string): string;
export declare function buildAiGeneratedSpaceId(ownerSubjectType: string, ownerSubjectId: string): string;
export declare function buildAiGeneratedNodeId(generationId: string, outputIndex: number): string;
export declare function buildDriveUri(spaceId: string, nodeId: string): string;
export declare function buildUploadTaskId(modality: string, generationId: string, outputIndex: number): string;
export declare function uploadProfileForMediaKind(kind: MediaKind): string;
//# sourceMappingURL=driveLayout.d.ts.map