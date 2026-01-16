import React from 'react';

const MenuCard = ({ name, description, price }) => {
    return (
        <div className="group relative bg-white/5 p-6 border border-white/10 hover:border-fire-ember/50 transition-colors duration-300">
            <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-cream-white group-hover:text-fire-ember transition-colors">
                    {name}
                </h3>
                <span className="text-lg font-bold text-fire-ember ml-4 whitespace-nowrap">
                    {price}
                </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default MenuCard;
