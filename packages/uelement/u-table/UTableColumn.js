
import { TableColumn } from 'element-ui'
let com = TableColumn
if (location.href.includes('isPdf=1') || location.href.includes('isPrint=1')) {
  com = Object.assign({}, TableColumn)
  delete com.props.fixed
}
export default com;
