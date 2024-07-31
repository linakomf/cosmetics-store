import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../Styles/ProductDetails.css';

const ProductCard = ({ addToFavorites, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  const [isLiked, setIsLiked] = useState(false);

const [cartQuantities, setCartQuantities] = useState({});


  const products = [
    {
      id: 1,
      name: 'Lipstick stick',
      price: '3,048 ₸',
      description: 'INFLUENCE BEAUTY influence. A look at the classics from the future. This product is a unique combination of all the best qualities of a stick lipstick. The innovative CONJUNCTION MIX formula is responsible for its main properties: semi-matte finish, durability, high pigmentation, and even application from the first time. The lipstick moisturizes and smoothes the lips. The translucent case, through which the entire lipstick mechanism is visible, emphasizes its conciseness and functionality.',
      image: 'https://images.verishop.com/doll-10-the-multi-tasker-3-in-1-cream-color-stick/7835723727042-3764476317?auto=format&cs=strip&fit=max&w=768&dpr=2',
      composition: 'RICINUS COMMUNIS (CASTOR) SEED OIL, OCTYLDODECANOL, ETHYLHEXYL PALMITATE, OZOKERITE, PARAFFIN, ISONONYL ISONONANOATE, BIS-DIGLYCERYL POLYACYLADIPATE-2, CAPRYLIC/CAPRIC TRIGLYCERIDE, SYNTHETIC FLUORPHLOGOPITE, SILICA DIMETHYL SILYLATE, COPERNICIA CERIFERA CERA [COPERNICA CERIFERA (CARNAUBA) WAX], AROMA (FLAVOR), LIMONENE, HEXYL CINNAMAL, GLYCOL MONTANATE, SHOREA ROBUSTA RESIN, METHYLPARABEN, PROPYLPARABEN, BHT, CI 77891 (TITANIUM DIOXIDE), CI 17200 (RED 33 LAKE), CI 15850:1 (RED 7), CI 45410 (RED 28 LAKE), CI 42090 (BLUE 1 LAKE), CI 77499 (IRON OXIDES). Ingredients: shea butter, vitamin E, mineral oils, natural dyes.',
      application: 'Apply in the usual way or with a brush to the skin of the lips.',
    },
    {
      id: 2, name: 'Primer', price: '5,850 ₸', description: 'DARLING* lash cocoon. I am your WATERPROOF mascara that gently wraps each eyelash in a "COCOON" resistant to any external influences: tears, sweat, rain, even a pool will not deprive your eyes of EXPRESSIVENESS. The magic will disappear only when exposed to warm water at 38°C, without using additional products. Did we really create the perfect mascara?',
      image: 'https://warpaintformen.com/cdn/shop/products/Remover_PadsSet-min_e1f7e188-dc6e-446b-8583-60e52beb81a9_1512x.jpg?v=1684940717',
      composition: 'Water, Styrene/Acrylates/Ammonium Methacrylate Copolymer, Iron Oxides (CI 77499), Butylene Glycol, Alcohol Denat., Pullulan, Acrylates Copolymer, Polyacrylate-13, Silica, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyisobutene, Phenoxyethanol, Polysorbate 80, Sodium Dehydroacetate, C11-15 Pareth-7, Caprylyl Glycol, Sodium Laureth-12 Sulfate, Tetrasodium EDTA, Sorbitan Isostearate, Polysorbate 20, Polysorbate 60, Ethylhexylglycerin, Potassium Sorbate, Disodium EDTA.',
      application: 'Take a brush and carefully apply the mascara from the base of the lashes in zigzag movements. No need for cleansing products. Rinse with warm water at 38°C.'
    },
    {
      id: 3, name: 'Powder', price: '7,896 ₸', description: 'ARTDECO perfect teint foundation. Perfect Teint Foundation for flawless skin. The feather-light texture not only contains no mineral oils, but also has an absorbing property thanks to the delicate powder particles it contains. The result is a light matte finish, the texture dissolves on the skin, making the skin even and natural-looking. No mask effect! The foundation is notable for its durability, medium to high coverage, which is nevertheless barely noticeable on the skin. Minor imperfections and bumps on the skin can be visually corrected with Perfect Teint Foundation, and thanks to the water it contains, the texture has a refreshing effect on the skin. Advantage: the ingredients included in the formula moisturize and care for the skin, irritated skin is soothed, and peach petal extract protects the skin from harmful environmental influences. Absolutely perfect foundation!',
      image: 'https://warpaintformen.com/cdn/shop/products/Anti-shine-02-min_1512x.jpg?v=1684940668',
      composition: 'Aqua (Water), Cyclopentasiloxane, Cyclohexasiloxane, Isododecane, Glycerin, Cetyl PEG/PPG-10/1 Dimethicone, Microcrystalline Cellulose, Alcohol Denat., PEG-10 Dimethicone, Polyglyceryl-4 Isostearate, Copernicia Cerifera Cera, Polymnia Sonchifolia Root Juice, Euterpe Oleracea Fruit Extract, Tocopheryl Acetate, Ascorbyl Tetraisopalmitate, Sodium Hyaluronate, Alpha-Glucan Oligosaccharide, Inulin, Shorea Robusta Resin, Lactobacillus, Phenoxyethanol, DMDM Hydantoin, Ethylhexylglycerin, Potassium Sorbate, Sodium Benzoate, Sodium Chloride, Disteardimonium Hectorite, Magnesium Sulfate, Triethoxycaprylylsilane, Paraffin, Propylene Carbonate, Parfum (Fragrance), Aluminum Hydroxide, Tapioca Starch, Glycol Montanate, Maltodextrin, Sorbic Acid, Citric Acid, Limonene. +/-: CI 77891 (Titanium Dioxide), CI 77492 (Iron Oxide), CI 77491 (Iron Oxide), CI 77499 (Iron Oxide).',
      application: 'Apply a few drops of the foundation to the back of your hand, then evenly distribute the cream on your face using a brush, makeup sponge, or fingers. Shake well before use.'
    },
    {
      id: 4, name: 'Foundation cream', price: '1,459 ₸', description: 'ESSENCE dip eyeliner. Waterproof eyeliner in a rich black color provides up to 24 hours of impeccable durability! Thanks to a softer applicator, the dip eyeliner waterproof 24h long-lasting from essence provides a pleasant, easy application.',
      image: 'https://images.verishop.com/laura-mercier-real-flawless-foundation/7804033532098-2879903032?auto=format&cs=strip&fit=max&w=768&dpr=2',
      composition: 'Aqua (water), propanediol, ammonium acrylates copolymer, glyceryl rosinate, acrylates/ethylhexyl acrylate copolymer, pvp, methylpropanediol, xanthan gum, ethylhexylglycerin, simethicone, caprylyl glycol, phenylpropanol, cellulose, sodium sulfate, phenoxyethanol, sodium dehydroacetate, sorbitan oleate, silica, mica, citric acid, sodium hydroxide, alcohol, sodium benzoate, potassium sorbate, CI 77891 (titanium dioxide), CI 77499 (iron oxides).',
      application: 'Run the applicator along the lash line.'
    },
    { id: 5, name: 'Blush', price: '10,020 ₸', description: 'KIKO MILANO unlimited blush', image: 'https://images.verishop.com/westman-atelier-super-loaded-tinted-highlight/7804033728706-611752841?auto=format&cs=strip&fit=max&w=768&dpr=2' },

    { id: 6, name: 'Concealer', price: '4,390 ₸', description: 'MAYBELLINE NEW YORK the eraser eye. The Maybelline The Eraser Eye concealer quickly hides signs of fatigue, sleepless nights, stress, and refreshes sensitive skin. It refreshes dull skin and adds radiance to it. This product from Maybelline has a convenient applicator with a miniature sponge. The composition is easy and convenient to apply. The formula of The Eraser Eye is unique. It includes exotic components. Among them are healing goji berries. They provide active care for the eyelids. This concealer for the skin around the eyes will easily become your favorite. The concealer effectively masks circles under the eyes and eliminates the tired look.',
      image: 'https://warpaintformen.com/cdn/shop/products/Concealer-01-min_1512x.jpg?v=1700476964' },

    { id: 7, name: 'Mascara', price: '2,520 ₸', description: 'Max Factor lash cocoon. The Darling* Mascara is a brush-on wonder that wraps each lash in a waterproof cocoon. Smudge-proof, swim-proof, and tear-proof, it promises long-lasting wear while adding intense volume to your lashes.',
      image: 'https://images.verishop.com/laura-mercier-real-flawless-foundation/7804033532098-2879903032?auto=format&cs=strip&fit=max&w=768&dpr=2' },
  ];
  

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBack = () => {
    navigate('/gallery');
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    addToFavorites(product);

  };

  const handleAddToCart = (product) => {  addToCart(product);
    setCartQuantities((prevQuantities) => ({    ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,  }));
  };

  return (
    <div className="product-page">
      <div className="product-card-details">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info-section">
          <h2>{product.name}</h2>
          <p>{product.price}</p>

          <div className="tabs">
            <button
              className={activeTab === 'description' ? 'active' : ''}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={activeTab === 'composition' ? 'active' : ''}
              onClick={() => setActiveTab('composition')}
            >
              Composition
            </button>
            <button
              className={activeTab === 'application' ? 'active' : ''}
              onClick={() => setActiveTab('application')}
            >
              Application
            </button>
          </div>

          {activeTab === 'description' && <p>{product.description}</p>}
          {activeTab === 'composition' && <p>{product.composition}</p>}
          {activeTab === 'application' && <p>{product.application}</p>}

          <div className="product-card-buttons">
            <button
              className="like-button"
              onClick={handleLikeClick}
              style={{ color: isLiked ? 'red' : 'grey' }}
            >
              <FontAwesomeIcon icon={faHeart} /> 
            </button>
            <button className="cart-button" onClick={() => handleAddToCart(product)}> 
  🛒 {cartQuantities[product.id] || 0} 
</button>
            <button className="back-button" onClick={handleBack}>
              ← Back to the catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
