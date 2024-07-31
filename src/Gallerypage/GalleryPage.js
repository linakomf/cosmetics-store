import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import '../Styles/Gallerypage.css';
import SearchBar from './SearchBar';
import Resizer from 'react-image-file-resizer';
import axios from "axios";

Modal.setAppElement('#root');

const GalleryPage = ({ addToCart, addToFavorites }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  const [cartQuantities, setCartQuantities] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    quantity: 1,
  });

  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    username: '',
    password: ''
  });

  const [adminMessage, setAdminMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate();

  const openAdminModal = () => {
    setIsAdminModalOpen(true);
  };

  const closeAdminModal = () => {
    setIsAdminModalOpen(false);
  };

  const handleUsernameChange = (e) => {
    setAdminCredentials({ ...adminCredentials, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setAdminCredentials({ ...adminCredentials, password: e.target.value });
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminCredentials.username === '8888' && adminCredentials.password === '0000') {
      setIsAdmin(true);
      setIsAdminModalOpen(false); 
      setAdminMessage('Great! You are logged in as an administrator.');
    } else {
      alert('Incorrect username or password');
    }
  };

  const openAddProductModal = () => {
    setModalIsOpen(true);
  };

  const saveProduct = () => {
    axios.post('http://localhost:5002/products', newProduct).then(res => console.log(res));
  };

  const closeAddProductModal = () => {
    saveProduct();
    setModalIsOpen(false);
    setNewProduct({
      name: '',
      price: '',
      description: '',
      image: '',
      quantity: 1,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      Resizer.imageFileResizer(
        file,
        200,
        200,
        'JPEG',
        100,
        0,
        uri => {
          setNewProduct(prevState => ({
            ...prevState,
            image: uri
          }));
        },
        'base64'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts(prevProducts => [...prevProducts, { id: products.length + 1, ...newProduct }]);
    closeAddProductModal();
  };

  const handleDeleteProduct = (name) => {
    const updatedProducts = products.filter(product => product.name !== name);
    setProducts(updatedProducts);
    axios.post('http://localhost:5002/products/delete', { name }).then(res => console.log(res));
  };

  const handleAddToCart = (product) => {  
    addToCart(product);
    setCartQuantities((prevQuantities) => ({    
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,  
    }));
  };

  return (
    <div className="gallery-page">
      <h2>Product Catalog</h2>
      <SearchBar placeholder="Search catalog" handleSearch={handleSearch} />
      <div className="products-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="product-card-buttons">
              <Link to={`/product/${product.id}`} className="view-details-btn">Details</Link>
              <button className="cart-button" onClick={() => handleAddToCart(product)}> 
               🛒 {cartQuantities[product.id] || 0} 
               </button>
              
              {isAdmin && (
                <button className="delete-button" onClick={() => handleDeleteProduct(product.name)}>x</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {!isAdmin && (
        <button onClick={openAdminModal} className="admin-button">Admin</button>
      )}

      <Modal
        isOpen={isAdminModalOpen}
        onRequestClose={closeAdminModal}
        contentLabel="Admin Login"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Admin Login</h2>
        <form onSubmit={handleAdminLogin}>
          <label>
            Username:
            <input type="text" value={adminCredentials.username} onChange={handleUsernameChange} />
          </label>
          <label>
            Password:
            <input type="password" value={adminCredentials.password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Enter</button>
        </form>
      </Modal>

      {isAdmin && (
        <div>
          <p>{adminMessage}</p>
          <button onClick={openAddProductModal} className="add-product-button">Add</button>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeAddProductModal}
        contentLabel="Add New Product"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Add a new product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />
          </label>
          <label>
            Description:
            <textarea name="description" value={newProduct.description} onChange={handleChange} required />
          </label>
          <label>
            Price:
            <input type="text" name="price" value={newProduct.price} onChange={handleChange} required />
          </label>
          <label>
            Photo:
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </label>
          <button type="submit">Add</button>
          <button type="button" onClick={closeAddProductModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default GalleryPage;
