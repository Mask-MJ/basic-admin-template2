export const ROW_KEY = 'id'
// Optional display number per page;
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100]

// Number of items displayed per page
export const PAGE_SIZE = 10
// Common interface field settings
export const FETCH_SETTING = {
  // The field name of the current page passed to the background
  pageField: 'page',
  // The number field name of each page displayed in the background
  sizeField: 'pageSize',
  // Field name of the form data returned by the interface
  listField: 'rows',
  // Total number of tables returned by the interface field name
  totalField: 'total'
}
// 任务 12: 分页栏左侧的总数文案, 供 BasicTable 与自写分页的页面共用, 避免两份文案漂移
export const PAGINATION_PREFIX = ({ itemCount }: { itemCount?: number }) =>
  `共 ${itemCount ?? 0} 条`
// Default Size
export const DEFAULT_SIZE = 'small'
//  默认居中
export const DEFAULT_ALIGN = 'center'
// 操作栏配置
export const ACTION_SETTINGS = {
  STRIPED: [
    { label: '显示', key: 'true' },
    { label: '不显示', key: 'false' }
  ],
  DENSITY: [
    { label: '紧凑', key: 'small' },
    { label: '默认', key: 'medium' },
    { label: '宽松', key: 'large' }
  ]
}
