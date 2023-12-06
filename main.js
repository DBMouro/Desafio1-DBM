class ProductManager {
  static ultId = 0;

  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, img, code, stock) {
    if (!title || !description || !price || !img || !code || !stock) {
      console.log(
        "Es importante que completes todos los campos, ya que estos son todos obligatorios"
      );
      return;
    }

    if (this.products.some((item) => item.code === code)) {
      console.log("El codigo del producto debe ser unico");
      return;
    }

    const newProduct = {
      id: ++ProductManager.ultId,
      title,
      description,
      price,
      img,
      code,
      stock,
    };

    this.products.push(newProduct);
  }

  getProducts() {
    console.log(this.products);
  }

  getProductById(id) {
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      console.log("Producto no encontrado");
    } else {
      console.log("El producto encontrado es: ", product);
    }
  }
}

const manager = new ProductManager();

manager.getProducts();

manager.addProduct("test producto", "test", 200, "s/imagen", "a1", 10);

manager.addProduct("chicles", "Frutilla", 200, "s/imagen", "a3", 50);

manager.addProduct("caramelos", "masticables", 200, "s/imagen", "a4", 50);

manager.getProducts();

manager.addProduct("alfajor", "dulce de leche", 200, "s/imagen", "a2", 50);

manager.getProductById(2);
manager.getProductById(50);
