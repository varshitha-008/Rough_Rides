import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tables = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get(`https://furni-flex-4-yx74.onrender.com/tables`);
          console.log(response.data);
          setCategories(response.data);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      fetchCategories();
    }, []);
  
  
   
  return (
    <div>
      
    </div>
  )
}

export default Tables
