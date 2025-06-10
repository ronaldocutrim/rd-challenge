import React from 'react';

function EmptyView() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg text-center">
      <svg
        className="w-16 h-16 text-gray-400 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Nenhuma recomendação encontrada</h3>
      <p className="text-gray-500 mb-4">
        Preencha o formulário com suas preferências e funcionalidades desejadas para receber recomendações personalizadas.
      </p>
      <div className="bg-cyan-50 p-3 rounded-md w-full">
        <p className="text-sm text-cyan-700">
          <span className="font-bold">Dica:</span> Quanto mais específicas forem suas escolhas, melhores serão as recomendações!
        </p>
      </div>
    </div>
  );
}

export default EmptyView;
