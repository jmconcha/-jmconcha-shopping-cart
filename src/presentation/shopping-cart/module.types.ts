import { ListViewProps } from '../../presentation/shopping-cart/list/view';
import { CartItem } from '../../types';

export interface DataSourceComponentProps extends ListViewProps {
  cartItems?: CartItem[];
}
