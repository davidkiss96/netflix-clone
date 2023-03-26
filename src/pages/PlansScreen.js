import db from "../firebase";
import { collection, query, where, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/userSlice";
import { loadStripe } from "@stripe/stripe-js";

const apiKey = `${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`;

const PlansScreen = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const productsQuery = query(collection(db, "products"), where("active", "==", true));

    getDocs(productsQuery).then((querySnapshot) => {
      const products = {};
      querySnapshot.forEach(async (productDoc) => {
        products[productDoc.id] = productDoc.data();
        const priceSnap = await getDocs(collection(productDoc.ref, "prices"));
        priceSnap.docs.forEach((price) => {
          products[productDoc.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });

      setProducts(products);
    });
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await addDoc(collection(db, "customers", user.uid, "checkout_sessions"), {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    onSnapshot(docRef, async (snapshot) => {
      const { error, sessionId } = snapshot.data();

      if (error) {
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(apiKey);
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="0">
      {Object.entries(products).map(([productId, productData]) => {
        //TODO: add some logic to check if the user's subscription is active...
        return (
          <div key={productId} className="flex justify-between p-5 opacity-80 hover:opacity-100">
            <div className="">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button
              className="bg-buttonColorRed text-white py-2 px-5 text-base font-semibold cursor-pointer border-none"
              onClick={() => loadCheckout(productData.prices.priceId)}
            >
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
