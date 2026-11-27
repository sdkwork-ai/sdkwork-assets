use serde::{Deserialize, Serialize};

use crate::models::{AssetCollection, PageInfo};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct AssetCollectionListData {
    pub items: Vec<AssetCollection>,

    #[serde(rename = "pageInfo")]
    pub page_info: PageInfo,
}
