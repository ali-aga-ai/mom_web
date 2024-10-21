import React from 'react';

const DiseaseCategories = () => {
  const categories = [
    {
      title: "Women",
      icon: "👩",
      conditions: [
        "Menstrual Disorders",
        "Infertility",
        "Hormonal Imbalances",
        "Menopause Symptoms",
        "PCOS",
        "Thyroid Issues"
      ]
    },
    {
      title: "Children",
      icon: "👧👦",
      conditions: [
        "Colds and Flu",
        "Eczema",
        "ADHD",
        "Croup",
        "Bedwetting",
        "Growth Issues"
      ]
    },
    {
      title: "Elderly",
      icon: "👴👵",
      conditions: [
        "Arthritis",
        "Osteoporosis",
        "Diabetes",
        "Cognitive Decline",
        "Insomnia",
        "Hypertension"
      ]
    },
    {
      title: "Therapy",
      icon: "👨‍👩‍👧",
      conditions: [
        "Anxiety",
        "Depression",
        "Stress Management",
        "Sleep Disorders",
        "Digestive Issues",
        "Allergies"
      ]
    }
  ];
  

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-center text-3xl font-semibold text-brown-600 mb-12">
        Safe, Natural, Chemical & Side-effect Free Treatment for
        <br />
        200+ Diseases & for all Age Groups
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Category Icon and Title */}
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{category.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800">{category.title}</h2>
            </div>

            {/* Conditions List */}
            <ul className="space-y-2">
              {category.conditions.map((condition, condIndex) => (
                <li key={condIndex} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-brown-500 rounded-full mr-2"></span>
                  {condition}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseaseCategories;