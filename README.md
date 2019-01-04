## Setup

1. Clone this repository.
1. In a new command line window, run http-server: `hs`
1. In another command line window, run json-server: `json-server -w api/database.json`


## An example of using embed to get nested data from JSON Server
1. Make sure your json-server is running.
1. Make a request to the following URL: `http://localhost:3000/products/1?_expand=productType`
1. Notice how we are getting all data about the product with id `1` but instead of the `productTypeId`, we get the data for the associated product type.
1. Take a look at the `database.json` file to see how it has been set up so that this functionality is available.
