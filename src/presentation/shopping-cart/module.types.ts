import { ListViewProps } from 'src/presentation/shopping-cart/list/view';
import { CartItem } from 'src/types';

export interface DataSourceComponentProps extends ListViewProps {
  cartItems?: CartItem[];
}
