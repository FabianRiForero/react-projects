import React, { useEffect, useState } from 'react'

export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const data = JSON.parse(localStorage.getItem(itemName)) || initialValue;
        setItem(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  const saveItem = newTodos => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      setItem(newTodos);
    } catch (error) {
      setError(error);
    }
  }
  return { item, saveItem, loading, error }
}