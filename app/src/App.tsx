import * as React from 'react';
import * as api from 'typescript-fetch-api';

interface AppComponentState {
  products: Array<api.Product>,
  apiError: any,
}

export class App extends React.Component<void, AppComponentState> {

  constructor() {
    super();
    this.state = {
      products: [],
      apiError: null,
    };
  }

  componentDidMount() {
    api.ProductsApiFactory().productsGet()
      .then(products => {
        this.setState({ products });
      })
      .catch(apiError => {
        this.setState({ apiError });
      })
  }

  render() {
    // const products = this.state.products;
    const products = this.state.products;
    const apiError = this.state.apiError;

    return (
      <div>
        <h1>Products:</h1>
        {apiError &&
          <div>{String(apiError)}</div>
        }
        <div>
          <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
      </div>
    );
  }
}
