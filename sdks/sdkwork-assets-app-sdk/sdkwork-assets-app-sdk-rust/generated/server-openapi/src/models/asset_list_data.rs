use serde::{Deserialize, Serialize};

use crate::models::{AssetItem, PageInfo};

#[derive(Serialize, Deserialize, Debug, Clone, Default)]
pub struct AssetListData {
    pub items: Vec<AssetItem>,

    #[serde(rename = "pageInfo")]
    pub page_info: PageInfo,
}
