/**
 * Upload declaration constants for the SDKWork Assets PC application root.
 *
 * Source of truth: `apps/sdkwork-assets-pc/specs/upload.declaration.json`
 * (DRIVE_SPEC.md §18). Upload call sites MUST consume these constants instead of
 * repeating the declared literals inline — §18.3 forbids duplicating a declared
 * value as a bare literal because a duplicate silently diverges from the
 * declaration that the gate validates.
 *
 * The catalog upload declares `appResourceIdKind: application`: the uploaded
 * node is not attached to a pre-existing entity, it *becomes* the catalog entry,
 * so the application itself is the resource the upload belongs to.
 */

export interface AssetsUploadDeclarationEntry {
  readonly appResourceType: string;
  readonly appResourceIdKind: 'application' | 'entity' | 'draft';
  readonly scene: string;
  readonly source: string;
  readonly uploadProfileCode: string;
  readonly retention: 'long_term' | 'temporary';
  readonly retentionTtlSeconds?: number;
  readonly purpose: string;
}

export const ASSETS_PC_APP_ID = 'sdkwork-assets-pc' as const;
export const ASSETS_PC_UPLOAD_SOURCE = 'sdkwork-assets-pc' as const;

export const ASSETS_PC_CATALOG_ENTRY_UPLOAD = {
  appResourceType: 'asset.catalog_entry',
  appResourceIdKind: 'application',
  scene: 'catalog-upload',
  source: ASSETS_PC_UPLOAD_SOURCE,
  uploadProfileCode: 'attachment',
  retention: 'long_term',
  purpose:
    'Asset file uploaded into the application asset catalog, where the uploaded node is registered as a catalog entry.',
} as const satisfies AssetsUploadDeclarationEntry;

export const ASSETS_PC_UPLOAD_DECLARATIONS: readonly AssetsUploadDeclarationEntry[] = [
  ASSETS_PC_CATALOG_ENTRY_UPLOAD,
];
