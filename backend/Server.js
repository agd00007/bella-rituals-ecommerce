const express = require("express");
const axios = require("axios");
const bcrypt = require("bcryptjs");
const cors = require("cors");

require("./db");

const Product = require("./Product");
const User = require("./user");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const { brand, productType, refresh } = req.query;

    if (refresh === "true") {
      let url = "https://makeup-api.herokuapp.com/api/v1/products.json?";
      if (brand) {
        url += `brand=${brand}&`;
      }

      if (productType) {
        url += `product_type=${productType}`;
      }

      const response = await axios.get(url);
      const products = response.data;

      const validProducts = await Promise.all(
        products.map(async (product) => {
          try {
            await axios.head(product.image_link);
            return product;
          } catch {
            console.log("Imagen inválida, se omite:", product.image_link);

            return null;
          }
        }),
      );

      const filteredProducts = validProducts.filter(Boolean);

      await Promise.all(
        filteredProducts.map((product) =>
          Product.updateOne(
            {
              name: product.name,
              brand: product.brand,
            },
            {
              name: product.name,
              brand: product.brand,
              product_type: product.product_type,
              price: product.price,
              image_link: product.image_link,
            },
            {
              upsert: true,
            },
          ),
        ),
      );

      return res.json({
        message: "Productos actualizados en MongoDB (solo válidos)",
        count: filteredProducts.length,
      });
    }

    const filter = {};

    if (brand) {
      filter.brand = brand;
    }

    if (productType) {
      filter.product_type = productType;
    }

    const productsFromDB = await Product.find(filter);

    res.json(productsFromDB);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error obteniendo productos",
    });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    res.json({
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    console.error(error);

    res.status(400).json({
      message: "Error creando usuario",
      error: error.message,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Usuario no encontrado",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        message: "Contraseña incorrecta",
      });
    }

    res.json({
      message: "Login correcto",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error en login",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
