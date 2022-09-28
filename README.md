# Shopping Cart Mini App

Shopping Cart Mini-app.

[![repository](https://img.shields.io/badge/repo-github-orange)](https://github.com/jmconcha/shopping-cart)

## Mini App

- Shopping Cart - [![status](https://img.shields.io/badge/DONE-green)](#)

## Installation

```sh
npm install @jmconcha/shopping-cart
```

&nbsp;

## ShoppingCart Props

| Prop                   | default value | Type     | Description                                               |
| ---------------------- | ------------- | -------- | --------------------------------------------------------- |
| cartItems              | []            | CartItem | List of cart items                                        |
| disableIncrementButton | false         | boolean  | disables the button that increment the cart item quantity |

&nbsp;

## CartItem Data Model

| Prop     | default value | Type   | Description              |
| -------- | ------------- | ------ | ------------------------ |
| id       |               | string | Product unique id        |
| name     |               | string | Product name             |
| price    |               | number | Product price            |
| quantity |               | number | Product quantity in cart |
| imageUrl |               | string | Product image link       |

&nbsp;

## Empty Cart Example

```jsx
import React from 'react';
import { ShoppingCart } from '@jmconcha/shopping-cart';

function Example() {
  return <ShoppingCart />;
}

export default Example;
```

![Empty Cart Example](https://lh3.googleusercontent.com/fife/AAbDypAdRoCPomSiCzWcSUjl_-BG0ViX77XuopEAOsPd0WBnkqX9lSHtieSHhFB0iKFRECTH1O4eyGUuD_k1WLqgS3X1Gn26dzkJIzVPZkOqGGW78vXy3iouz0UPpS5klSExvXyF-TKh_9mn4xAqqpa7XDVudVyRvIcKpAPxiiaH_sopxLBBgjSLIiW0ANyEGbZrAZy2YZC5R5Fi8_pUrgdpvXJHDXpZSanvaxAYOn25GeWHxJIix3NAdpbrDxIe82mWqg14q8cp_WRroMbSwSeSrJYDxBlq4ab2nslkomWOLxVuY62i5ZAFVp8Uq_1mGGJ8wsC_k2oKFPIk2GyVXinLuwV7wBQqagrVpCQK47rvNy0SQfQCMRikAI2XYe2vw8p_Iv9-poSvTpOTXUtP4m7wRCJSn-lnOISBizSl8_a81JukK1oYnfwbpKwgI7mybYIrldnJ1xSl33aubjUigfcXBrzJF_Uolc0x-itEKuzAc9k9bDe5fU7QPQrBMSE7ibQ72gYzylX0IUR1qPQFyGXhPpoOyH-n3c-Bjx8j4gDBBYH274RxZ9FpDwiJfnvjX0z4QaY0b0zoxiKFbNTVi9y2e8r6oIwSOQzfnEx35mRfPAhCqX7cUVZlIl7UFhv3ar7_SevNmsqKnl1XVDVA8se_kUKBT7TSeCYAfYtFQVCkjLujzPrLrsGwJ3KO_4GM1FvqUFsE0CBl5ej066airQmkrmfanQcyRT5K6fjuc0XQAvoUWZnBKjhKnbnKOOSXHizxDjkCWMzA-MoLFkmd8mwmgq6a3P9erUfNfQaXTsG29hX0YbniilaT4MysIAdTZUiDVxOpOJeNOQmZnN8pSABcDrpm25se4xGuew_UnGGZ2367eCWG0VcbhwOZKbJ9xtXEDlrzuKiLRkM-y0aEx2EGS49tCehbrIXPPCPoKfrsxGO1j2BhCZSOff44Xsv9QmP8uQ_HD8BZrv9eEXRQLrSxygTHKdlIb9WLT0psMK4zwad23P4cJjFujx2JSIjBIQbIlwduLxSmbQ9401zHDHybixtIUu_I9VKYp5jPkQ4MlUrusJ38U7x1fzMnMoRKwaQ70ZYCxrvDwroKrP2x3qys4HIKq726hnQGJ_mrTUhfjHYf7cKMBDwxdnjQtKLdaM3oXqjnhuKk-zw6ORe3RtB_x_T6XxLDYC6ur8KqdvK-iv49DAj2RHv4_Z4iZG0TmPks64YoVCuWR0Pu8WkAa2QZiFoZg4RMbSfdjh4km6ZIzyjSn7sKcUy6eKPpqZaVdWgR-5YdcYZ-u6_ACXtCRLTQ0KFszqJDXO60Ei3_gJld1FRd8-g5KdnvYYbsnhULU_klXNAAn4jpW37ZJ562bH498Ft0peaKkxRL0vq8L4XWz04Dy_u2tfZLqsUMY31my50JXY2-iM63y_9U5iv3t0mCAWtEtoclJwd0XyGXJdpuS5Wrecm_AgSBeRWSmfOWmDlytCgaN0IIPEFfW1zFwA8tRN-pmvJIZPgsWij80VCMVk0eIc86hQvPxhjwyZ_uRJfwubch9B42R0yafVNqwXs2=w1920-h929 'Empty Cart Example')

&nbsp;

## With Cart Items Example

```jsx
import React from 'react';
import { ShoppingCart } from '@jmconcha/shopping-cart';

function Example() {
  const cartItems = [
    {
      id: 'id-1',
      name: 'Product 1',
      price: 100,
      quantity: 1,
      imageUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      id: 'id-2',
      name: 'Product 2',
      price: 200,
      quantity: 2,
      imageUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      id: 'id-3',
      name: 'Product 3',
      price: 300,
      quantity: 3,
      imageUrl: 'https://via.placeholder.com/150/24f355',
    },
  ];

  return <ShoppingCart cartItems={cartItems} />;
}

export default Example;
```

![With Cart Items Example](https://lh3.googleusercontent.com/fife/AAbDypD1UbDt_iROY7JjOmZvUrbdWcW0Jbt2m2NgtfCZwN6jimywJxIVnbMrffQUhApfJYNeoMi3r6LOQfdrXQ1v_6aDVFw1XRFHZZ-zTQtIFusO6JMrXI9hpqqH2YeLIAMAwUVmRbIIlIMZLGFR6gs8agjsA1XeveBtdqXtmRer9GqSyyvb7ayMDzIP-vsZgcvw5eMA0HUZD_v5g4n840cXSNBe_QMSUPrc9slpXuxxsv-2xltPdZFS7HgnyayTHmcM1Xx8dre-FmQYNStIMpo5_YhJGVInhKOOYKwrYHUfkXkxfkCn2l4dwltvJduWGbax9d1X9hwhxjrJqFhw4mTMUItl1oSZ5PXnRhVw8ouks9PacFG9MKAnTBrGZ-fO6t_l5IyibnoGnggDmrLK11DgUccNrmVO3Gxi1chXD2aMY7f-ptHdHNGdbv80beINcC30MYrKKJQ_oJX5gpMzdBF8yxdPQpAFz073YI5whhKcecnyNyXCV8fIQQ5bOVQbKEIAgYfFDcMbIHbwMtl_hSj75ipjnn8mwzYLC3UPNQpaL2I-axFE0e2ZBS52KCI28nxU0VIv_y6cg-hLCqyb6JmZBERuD35EQeZebqzmzWAWLLkuz3NlQ8i1ZBOvINI6n6JlidOpmJj4VBxb3d52IyE9fCJRXRKKzGZ6dWVqK8lZRZIP2-tptjqaQcKF3l8xAJTchRSbHm9d-xyY_uM--quC6hyAiUvATV42ud4sdIYG-vkYRw54xlD3HHzoZrO0uLul9TEqwjAxHA5XTpwxoV-MOyXNO-i2XESH8FpLpdZ3PjLi1B4FOsMehBbQHXjnK4iVJD2dB460Jdi9Ug2V0vjqtEZHVQdbAU8GaoKIUWbK7dZ6VBc3cxmMw1j_-cNEucQc3obyhOS4ZqPukTpQoR6_SJHcopG318kGMDNenQeOm_Te4KCwHyx-z7ETZRyNKZ37GhW0khz6CCWLq0SGKD2QH0_Qkqx9pqzbhUMcSjPxuDh16rSy5Qv20D7hz8IVN1n0w07CWalPbN4ki1fMMRw1tORCubjAUPJ7bdgSXnKvH3TXsXjDEyQGzdtbl1yrzmASl-vTlCQfxcnIV05MVVltlvZ71i0xf3lGEMSzAeIWsOm8ukJq-zOg2JIknLzV46rSKLRNPo8jgUwQHnYvwrUzSnjfsvK24qKbRqbq4CNA9LRlLe1Q8pfq3rhFdbJmWLl9g0YDFgdrzQjkbDFt-nixP7XvJlsuc5P5MP6vU1GcRgCMThX0V_I3q9pDYlkXH0IMyIfNRQ7nrKQOuNS2Zv0l4ueLGX1hQvM4ma8yRvORCApp6JIe1sPXDAUO4tl9p4MTe2W8AEOa0_4zpkMY-clXLNJMVzq7ZOvx4cKPZpTPvmrIs8oSa4CSClRh61vPNy1QvIoxeMi8IG8FdfhBUainn29eMW-jK-Uy_dP1AHnqMPSQPb9GMJFeOCyatG_ELIFUZSMWXmwL3b-inpiPOBYtC4o3Dv7PBxSW1aWUFxkFhejT2HTwjleE6lKd_5tKqZEOioU_EOvZuN0UKKT8f3zC=w1227-h929 'With Cart Items Example')

&nbsp;

## Disabled Increment Button Example

```jsx
import React from 'react';
import { ShoppingCart } from '@jmconcha/shopping-cart';

function Example() {
  const cartItems = [
    {
      id: 'id-1',
      name: 'Product 1',
      price: 100,
      quantity: 1,
      imageUrl: 'https://via.placeholder.com/150/24f355',
    },
  ];

  return <ShoppingCart cartItems={cartItems} disableIncrementButton />;
}

export default Example;
```

![Disabled Increment Button Example](https://lh3.googleusercontent.com/fife/AAbDypBenwkYD6LbnLPjaxh7_7F3sxY7pgmgmvohGnkZM4EjMayBZoaVvU7g4_V5F_2QQSUI2nPOAFLhsKLokczuwVNcgn-NA1P0h1ijrZnotfjnw6GmHaeKQAb04zuObJPpkA1oGuvQinYDFDd9Ox58NqOURRAWkpxOnN4O3UU8xmKH4k7eL3GgLLs8-mlgj3rFa32el0TcQitIIzBFMfXu4XcH28JPLExPTdMennfqdLYnFT7064FtxksCKu3y4y4z7lkFV3LY8nFa4xeLqpyuICRKVJdwEuhzEvPkLEfgxiCDONuklXJACP5RrfgyQcx_XNPOkoeZjz2CqS4XmEtZmHCLhT7BbLHTArd3Esp4p2bUjEhGAjrW1e9uLjNNr_c4xFmIMXP_BVQFNT-9PQEo0COd2rGwEV9TWvq7ldKkMBFhI-FlWJUQvj_Wq0fr9TQm-E4bxRfZONU9LTPKnuznHFINkYS93FFJ4IpGvqDaPla60LwRzusso5NowtMKipLWCEX5ACmpRmmGl3D955wBPa5JBSROhhPCEnNsAsBNOxOO0hiNTmiLSTfZ9CdSJXO22iyxlF8QuePRDkuJQ0mH9MoscvzVOmF1wAlQqcgy8mw2pC2q9C4AnaBUAYdcdza1TAtWp5dLdgAZeFBlZG2hgY7WYc7wg0l2tgaoAXHhYYDwpSDmCbTSaGKJZZKFUjlPOo4fqcdADFoHIQWSF1Fqgwf-ocDGxI_IqI6qBDrkRr1BQprrwHEJgEDFruOM6NI_qZy9qQwd1oe1gIQLTiEgalOETUVmDK-vmxQ9Ri4sww4BxSS-PfN12oJRZBpjMNRnWYWMI0Mc6NlAWuwNvp5mcLl9aMJtY3tSUNMtwFMALOfXCT2pilCTD_SYIZxgz8VE_g8cHuJYGsfmLIzLJ4HXzJhzCRL-Kld6gABZuhV10T3HkznXKxte6hVde4jiV8MOChB36gKuXV8oSTcTXGqt4jksXRUeiqA5IbzKZMkSoAOe9t02E1HRv34z-L26hTJ7fimB3dSykQkoDNun9vTC6u2yI9JW3DMawnTte5nBDCOjaCu37Fb-B4IsD_MvU_z7ExuxBweB78DWrGjVIBHg5wkhO3-xvKIfL8kGEC4MCwuzYyJTy6MoGZO2EvFcblC-p0QpdB_BgkYob8CzyMUafTJhUOKCeUQoOUgsWyfa60xYdJ02LdOaNWl34QJa_VNQuyxNE1flDiyh4zGkyBtaU56ujD0I4xXNnxuhsuxaPPMKFXsvg2AQmzGNHClfSS-WarcCB664j5oZEVEnzwpEHm5-Olj1TKBQ-1fLmW6Eehj14RJBbtvdQWzwfRBAGJHb06ERBO3zTEGMW19CTEjwxLCPow3_eDvfYc7zQPBsPelESkCCtMnLY2sd3eeNKbn01EUzjG92SyXrrK8_eGSxm9kpfH2jnqP-J6mwIeaNQw63MGBm2bR7UO7fjypuOzNXLaU2E_vL2vT01zUQR6wetpRqS2slMmN5S-NaMcCx8Ud_VrHfVUkO2NMFEuaur9kmeEF-MfntWVCEv27hBewY=w1227-h929 'Disabled Increment Button Example')

&nbsp;

## Peer Dependecies

```sh
"react": "^18.2.0",
"react-dom": "^18.2.0"
```
