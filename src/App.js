import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 假設的餐點數據
const menuData = [
  {
    date: '2024-07-15',
    meals: [
      { type: '早餐', name: '蔬菜蛋餅', image: '/api/placeholder/300/200' },
      { type: '午餐', name: '滷肉飯', image: '/api/placeholder/300/200' },
      { type: '點心', name: '水果拼盤', image: '/api/placeholder/300/200' },
    ],
  },
  {
    date: '2024-07-16',
    meals: [
      { type: '早餐', name: '鮮奶麥片', image: '/api/placeholder/300/200' },
      { type: '午餐', name: '番茄義大利麵', image: '/api/placeholder/300/200' },
      { type: '點心', name: '蒸地瓜', image: '/api/placeholder/300/200' },
    ],
  },
  {
    date: '2024-07-17',
    meals: [
      { type: '早餐', name: '薯餅蛋堡', image: '/api/placeholder/300/200' },
      { type: '午餐', name: '雞肉炒飯', image: '/api/placeholder/300/200' },
      { type: '點心', name: '牛奶布丁', image: '/api/placeholder/300/200' },
    ],
  },
];

const KindergartenMenu = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // 從今天開始

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : menuData.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < menuData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-4xl font-bold mb-8 text-white">小太陽幼兒園每日餐點</h1>
      <div className="relative w-full max-w-md">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">{menuData[currentIndex].date}</h2>
          {menuData[currentIndex].meals.map((meal, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-medium mb-2">{meal.type}</h3>
              <div className="flex items-center">
                <img src={meal.image} alt={meal.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                <p className="text-lg">{meal.name}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default KindergartenMenu;