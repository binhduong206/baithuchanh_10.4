import React, { createContext, useState, useContext } from "react";

// Tạo Context
const CartContext = createContext();

// Provider để bọc ứng dụng
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Giỏ hàng ban đầu rỗng

  // Hàm Thêm vào giỏ hàng
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Kiểm tra sản phẩm đã có trong giỏ chưa
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Nếu có rồi thì tăng số lượng
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        // Nếu chưa có thì thêm mới với số lượng = 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook để gọi cho nhanh
export const useCart = () => useContext(CartContext);
