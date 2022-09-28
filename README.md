# Shopping Cart Mini App

Shopping Cart Mini-app.

[![repository](https://img.shields.io/badge/repo-github-orange)](https://github.com/jmconcha/shopping-cart-lib)

## Mini App

- Shopping Cart - [![status](https://img.shields.io/badge/DONE-green)](#)

## Installation

```sh
npm install @jmconcha/shopping-cart-lib
```

## Usage

```sh
import { ShoppingCart } from '@jmconcha/shopping-cart-lib';

//...
const cartItems = [{
  id: 'id-1',
  name: 'Product 1',
  price: 100,
  quantity: 2,
  imageUrl: 'https://www.gallery.com/product-1',
}];

<ShoppingCart
  cartItems={cartItems}
  disableIncrementButton={true}
/>
```

## Types

```sh
{
  // optional
  cartItems: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  },
  // optional
  disableIncrementButton: boolean;
}
```

## Example (1)

```jsx
import React from 'react';
import { MoreHoriz } from '@mui/icons-material';

const paymentMethod = [
  {
    id: 0,
    uuid: 'e40cd54a-d0d4-11ec-85e9-0abb0f8232d8',
    code: 'CASH',
    name: 'Cash',
    status: 'ACTIVE',
  },
  {
    id: 0,
    uuid: 'e40cd7a9-d0d4-11ec-85e9-0abb0f8232d8',
    code: 'CHECK',
    name: 'Cheque',
    status: 'INACTIVE',
  },
  {
    id: 0,
    uuid: 'e40cd87a-d0d4-11ec-85e9-0abb0f8232d8',
    code: 'DCCARD',
    name: 'Debit/Credit Card',
    status: 'ACTIVE',
  },
  {
    id: 0,
    uuid: 'e40cd8fb-d0d4-11ec-85e9-0abb0f8232d8',
    code: 'PM',
    name: 'Paymaya',
    status: 'INACTIVE',
  },
  {
    id: 0,
    uuid: 'bdo1234677890',
    code: 'BDO',
    name: 'BDO Unionbank',
    status: 'INACTIVE',
  },
  {
    id: 0,
    uuid: 'e40cd973-d0d4-11ec-85e9-0abb0f8232d8',
    code: 'GC',
    name: 'G-Cash',
    status: 'INACTIVE',
  },
  {
    id: 0,
    uuid: 'e40cd9f0-d0d4-11ec-85e9-0abb0f8232d8',
    code: 'BANKTRANSFER',
    name: 'Bank Transfer',
    status: 'ACTIVE',
  },
];

const rows = [
  {
    id: 44,
    customer_id: 'SMS0100000001',
    fullname: 'Diane Sy',
    inv_no: 'INV0000000010',
    paytxn_no: 'RV0000000001',
    payrcpt_no: null,
    payrefdoc_no: 'PRD0000000002',
    posted_date: '2022-03-31',
    cancelled_date: null,
    refunded_date: null,
    payment_date: '2022-03-28T07:59:11.000Z',
    payment_method: 'Bank',
    bank_code: 'BDO',
    payment_type: 'Regular Payment',
    amount_paid: '3000.00',
    payment_received_by: null,
    notes: null,
    api_response: null,
    status: 'Posted',
  },
  {
    id: 2,
    customer_id: 'SMS0100000001',
    fullname: 'Diane Sy',
    inv_no: 'INV0000000010',
    paytxn_no: 'RV0000000002',
    payrcpt_no: null,
    payrefdoc_no: 'PRD0000000002',
    posted_date: '2022-03-31',
    cancelled_date: null,
    refunded_date: null,
    payment_date: '2022-03-28T07:59:14.000Z',
    payment_method: 'Check',
    bank_code: 'BDO',
    payment_type: 'Regular Payment',
    amount_paid: '3000.00',
    payment_received_by: null,
    notes: null,
    api_response: null,
    status: 'Cancelled',
  },
  {
    id: 3,
    customer_id: 'SMS0100000002',
    fullname: 'Diane Sy',
    inv_no: 'INV0000000002',
    paytxn_no: 'INV0000000002',
    payrcpt_no: null,
    payrefdoc_no: 'PRD0000000002',
    posted_date: '2022-04-01',
    cancelled_date: null,
    refunded_date: null,
    payment_date: '2022-03-31T01:45:19.000Z',
    payment_method: 'Bank Transfer',
    bank_code: 'BPI',
    payment_type: 'Overpayment',
    amount_paid: '3000.00',
    payment_received_by: null,
    notes: 'Nothing special',
    api_response: null,
    status: 'Posted',
  },
  {
    id: 4,
    customer_id: 'SMS0100000002',
    fullname: 'Diane Sy',
    inv_no: 'INV0000000002',
    paytxn_no: 'INV0000000002',
    payrcpt_no: null,
    payrefdoc_no: 'PRD0000000002',
    posted_date: '2022-04-01',
    cancelled_date: null,
    refunded_date: null,
    payment_date: '2022-03-31T04:54:13.000Z',
    payment_method: 'Bank Transfer',
    bank_code: 'BPI',
    payment_type: 'Overpayment',
    amount_paid: '3000.00',
    payment_received_by: null,
    notes: 'Nothing special',
    api_response: null,
    status: 'Posted',
  },
  {
    id: 5,
    customer_id: 'SMS0100000002',
    fullname: 'Diane Sy',
    inv_no: 'INV0000000003',
    paytxn_no: 'RV0000000003',
    payrcpt_no: null,
    payrefdoc_no: 'PRD0000000002',
    posted_date: '2022-03-31',
    cancelled_date: null,
    refunded_date: null,
    payment_date: '2022-03-31T04:54:13.000Z',
    payment_method: 'Bank Transfer',
    bank_code: 'BDO',
    payment_type: 'Overpayment',
    amount_paid: '3000.00',
    payment_received_by: null,
    notes: null,
    api_response: null,
    status: 'Unposted',
  },
  {
    id: 6,
    customer_id: 'SMS0100000002',
    fullname: 'Diane Sy',
    inv_no: 'INV0000000004',
    paytxn_no: 'RV0000000004',
    payrcpt_no: null,
    payrefdoc_no: 'PRD0000000002',
    posted_date: '2022-03-31',
    cancelled_date: null,
    refunded_date: null,
    payment_date: '2022-03-31T04:54:13.000Z',
    payment_method: 'Bank Transfer',
    bank_code: 'BDO',
    payment_type: 'Overpayment',
    amount_paid: '3000.00',
    payment_received_by: null,
    notes: null,
    api_response: null,
    status: 'Unposted',
  },
  {
    id: 7,
    customer_id: 'SMS0100000002',
    fullname: 'Diane Sy',
    inv_no: 'INV0000000005',
    paytxn_no: 'RV0000000005',
    payrcpt_no: null,
    payrefdoc_no: 'PRD0000000002',
    posted_date: '2022-03-31',
    cancelled_date: null,
    refunded_date: null,
    payment_date: '2022-03-31T04:54:13.000Z',
    payment_method: 'Bank Transfer',
    bank_code: 'BDO',
    payment_type: 'Overpayment',
    amount_paid: '3000.00',
    payment_received_by: null,
    notes: null,
    api_response: null,
    status: 'Unposted',
  },
  {
    id: 8,
    customer_id: 'SMS0100000002',
    fullname: 'Diane Sy',
    inv_no: 'INV0000000006',
    paytxn_no: 'RV0000000006',
    payrcpt_no: null,
    payrefdoc_no: 'PRD0000000002',
    posted_date: '2022-03-31',
    cancelled_date: null,
    refunded_date: null,
    payment_date: '2022-03-31T04:54:13.000Z',
    payment_method: 'Bank Transfer',
    bank_code: 'BDO',
    payment_type: 'Overpayment',
    amount_paid: '3000.00',
    payment_received_by: null,
    notes: null,
    api_response: null,
    status: 'Unposted',
  },
  {
    id: 9,
    customer_id: 'SMS0100000002',
    fullname: 'Diane Sy',
    inv_no: 'INV0000000007',
    paytxn_no: 'RV0000000007',
    payrcpt_no: null,
    payrefdoc_no: 'PRD0000000002',
    posted_date: '2022-03-31',
    cancelled_date: null,
    refunded_date: null,
    payment_date: '2022-03-31T04:54:13.000Z',
    payment_method: 'Bank Transfer',
    bank_code: 'BDO',
    payment_type: 'Overpayment',
    amount_paid: '3000.00',
    payment_received_by: null,
    notes: null,
    api_response: null,
    status: 'Unposted',
  },
  {
    id: 10,
    customer_id: 'SMS0100000002',
    fullname: 'Diane Sy',
    inv_no: 'INV0000000008',
    paytxn_no: 'RV0000000008',
    payrcpt_no: null,
    payrefdoc_no: 'PRD0000000002',
    posted_date: '2022-03-31',
    cancelled_date: null,
    refunded_date: null,
    payment_date: '2022-03-31T04:54:13.000Z',
    payment_method: 'Bank Transfer',
    bank_code: 'BDO',
    payment_type: 'Overpayment',
    amount_paid: '3000.00',
    payment_received_by: null,
    notes: null,
    api_response: null,
    status: 'Unposted',
  },
];

const columns = [
  {
    field: 'posted_date',
    headerName: 'Posted Date',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'customer_id',
    headerName: 'Customer ID',
    minWidth: 180,
    flex: 1,
  },
  {
    field: 'fullname',
    headerName: 'Fullname',
    minWidth: 180,
    flex: 1,
  },
  {
    field: 'inv_no',
    headerName: 'Invoice Number',
    minWidth: 220,
    flex: 1,
  },
  {
    field: 'paytxn_no',
    headerName: 'Transaction No.',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'bank_code',
    headerName: 'Bank',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'payment_type',
    headerName: 'Payment Type',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'payrefdoc_no',
    headerName: 'Payment Reference No.',
    minWidth: 150,
    flex: 1,
  },
];

const headerButtons = [
  {
    id: 'any',
    name: '',
    icons: { endIcon: <MoreHoriz /> },
    disabled: false,
    show: true,
    action: (row: any) => console.log('2Y', row),
  },
  {
    id: 'any',
    name: '',
    theme: 'secondary',
    icons: { startIcon: <MoreHoriz /> },
    disabled: false,
    show: true,
    action: () => console.log('ANY'),
  },
  {
    type: 'more',
    name: 'More Actions',
    theme: 'tertiary',
    icons: { endIcon: <MoreHoriz /> },
    options: [
      {
        id: 'option-edit',
        name: 'Edit',
        disabled: false,
        show: true,
      },
      {
        id: 'option-delete',
        name: 'Delete',
        disabled: false,
      },
      {
        id: 'view-history',
        name: 'View History',
        action: (data: any) => console.log(data),
      },
    ],
  },
];

export const exampleData = {
  dataLoad: {
    rows: rows,
    rowsTotal: 1000,
    collections: {
      payment_method: paymentMethod,
      products: ['Dove Shampoo'],
    },
  },
  dataIn: {
    id: 'adminCRUD',
    addFunction: () => console.log('ADD'),
    updateFunction: (value: any, id: number | string, originalData: any) =>
      console.log('UPDATE', value, id, originalData),
    deleteFunction: (row: any) => console.log(row),
    modals: {
      update: {
        // visible: false,
        title: <React.Fragment>Update</React.Fragment>,
        content:
          'Your are about to remove an item on this order. Do you want to proceed with this action?',
        buttonCancel: 'Cancel',
        buttonProceed: 'Yes',
      },
      delete: {
        // visible: false,
        title: <React.Fragment>Confirmation</React.Fragment>,
        content:
          'Your are about to remove an item on this order. Do you want to proceed with this action?',
        buttonCancel: 'Cancel',
        buttonProceed: 'Yes',
      },
    },
    list: {
      // GENERAL
      autoHeight: true,
      density: 'standard',
      realTimeUpdate: false,
      hideColumns: { fulname: false },
      showPagination: true,
      // HEADER PROPS
      showHeader: true,
      headerButtons: headerButtons,
      // TABLE PROPS
      values: {
        pagination: {
          page: 2,
          limit: 100,
        },
        sort: {
          field: 'fullname',
          sort: 'desc',
        },
      },
      columns: columns,
      showRowAction: true,
      floatRowAction: true,
      rowActions: [
        {
          id: 'UPDATE',
          type: 'default',
          icon: null,
          disabled: false,
          show: true,
        },
        {
          type: 'more',
          icon: <MoreHoriz />,
          options: [
            {
              id: 'UPDATE',
              name: 'Edit',
              disabled: (row: any) => row?.bank_code === 'BPI',
              show: (row: any) => row?.bank_code !== 'BPI',
            },
            {
              id: 'DELETE',
              name: 'Delete',
              disabled: (row: any) => row?.bank_code === 'BPI',
            },
            {
              id: 'VIEW',
              name: 'View History',
            },
          ],
        },
      ],
    },
    forms: {
      sectionFields: [
        {
          header: 'sample1',
          fields: [
            {
              name: 'products',
              label: 'Suggested Products',
              type: 'autocomplete',
              disabled: false,
            },
          ],
        },
        {
          header: 'sample2',
          fields: [
            {
              name: 'prod',
              label: 'Products',
              disabled: false,
            },
          ],
        },
      ],
      validations: {},
      hideFields: ['payment_type', 'payment_method'],
      fullScreen: true,
      footerButtons: [
        {
          action_type: 'cancel',
          label: 'Cancel',
          color: 'tertiary',
          disabled: false,
          action: () => {
            alert('cancel');
          },
        },
        {
          action_type: 'save',
          label: 'Save',
          disabled: false,
          action: () => {
            alert('save');
          },
        },
      ],
      renderHeaderTitle: (value: any) => {
        return {
          ...value,
          title:
            value?.type === 'CREATE'
              ? 'Create Payment'
              : value?.type === 'UPDATE'
              ? `Update Payment: ${value?.data?.paytxn_no}`
              : value?.title,
        };
      },
      // this will work for fullscreen only
      headerButtons: [
        {
          type: 'popover',
          disabled: false,
          theme: 'tertiary',
          actions: [
            {
              action_type: 'save',
              label: 'Save',
              theme: 'tertiary',
              divider: false,
              disabled: true,
            },
            {
              action_type: 'update',
              label: 'Update',
              theme: 'tertiary',
              divider: false,
              disabled: false,
            },
            {
              action_type: 'delete',
              label: 'Delete',
              theme: 'tertiary',
              divider: true,
              disabled: false,
            },
            {
              label: 'View History',
              action: () => console.log('View History'),
              theme: 'tertiary',
              divider: false,
              disabled: false,
            },
          ],
        },
        {
          type: 'button',
          action_type: 'delete',
          label: 'Delete',
          disabled: false,
          theme: 'tertiary',
        },
        {
          type: 'button',
          action_type: 'update',
          label: 'Update',
          disabled: false,
          theme: 'tertiary',
        },
        {
          type: 'button',
          action_type: 'save',
          label: 'Save',
          disabled: false,
          theme: 'primary',
        },
      ],
    },
    styles: {},
  },
  dataOut: (OUT: any) => console.log('DATA OUT', OUT),
};
```

## Peer Dependecies

```sh
"react": "^17.0.2",
"react-dom": "^17.0.2"
```
