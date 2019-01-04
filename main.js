    let productNameField = document.createElement("fieldset")

    let productNameLabel = document.createElement("label")
    productNameLabel.textContent = "Name"
    productNameLabel.setAttribute("for", "product__name")
    let productNameInput = document.createElement("input")
    productNameInput.setAttribute("id", "product__name")
    productNameInput.setAttribute("name", "product__name")

    productNameField.appendChild(productNameLabel)
    productNameField.appendChild(productNameInput)

    let productTypeSelect = document.createElement("select")
    productTypeSelect.setAttribute("id", "product__type__select")

    let submitButton = document.createElement("button")
    submitButton.textContent = "Add Product"
    submitButton.setAttribute("class", "food__save")

    // 2. Attach event listener to button in form
    submitButton.addEventListener("click", () => {
      console.log("Add product with name ", productNameInput.value, " and product type id ", productTypeSelect.value);
    })

    let productFormFragment = document.createDocumentFragment()
    productFormFragment.appendChild(productNameField)
    productFormFragment.appendChild(productTypeSelect)
    productFormFragment.appendChild(submitButton)

    let formArticle = document.querySelector("#product__form")
    formArticle.appendChild(productFormFragment)


fetch("http://localhost:3000/productTypes")
.then(response => response.json())
.then(productTypes => {
  let productTypesOptionFragment = document.createDocumentFragment()
  productTypes.forEach(productType => {
    let productTypeOption = document.createElement("option")
    productTypeOption.setAttribute("value", productType.productTypeId)
    productTypeOption.textContent = productType.name
    productTypesOptionFragment.appendChild(productTypeOption)
  })

  productTypeSelect.appendChild(productTypesOptionFragment)

})
