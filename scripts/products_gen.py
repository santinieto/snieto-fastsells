import json
import random
import uuid

# Ejemplo de uso
num_products = 100  # Especifica la cantidad de productos
categories = ["nuevos", "ofertas", "populares", "destacados"]  # Lista de categorías

def generate_products(num_products, categories):
    products = []
    for i in range(num_products):
        product = {
            "id": str(uuid.uuid4()),  # Genera un ID único y relevante
            "name": f"Producto {i+1}",
            "stock": random.randint(1, 100),
            "price": round(random.uniform(10, 1000), 2),
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "img": f"https://picsum.photos/{200 + i}",
            "category": random.choice(categories)  # Asigna una categoría al azar
        }
        products.append(product)
    return products

def save_to_json(products, filename="mocks/products.json"):
    with open(filename, "w") as file:
        json.dump(products, file, indent=4)

products = generate_products(num_products, categories)
save_to_json(products)

print(f"Archivo JSON generado con {num_products} productos.")
