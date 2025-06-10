import React from 'react';
import EmptyView from '../EmptyView/EmptyView';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>
      {recommendations.length === 0 ? (
        <EmptyView />
      ) : (
        <ul className="flex flex-col gap-4 items-start">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="border-2 rounded-xl py-2 px-4 text-black bg-cyan-500 border-cyan-300 shadow-">
              {recommendation.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecommendationList;
