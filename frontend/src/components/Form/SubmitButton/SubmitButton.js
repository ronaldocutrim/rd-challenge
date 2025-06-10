import React from 'react';

function SubmitButton({ text, disabled }) {
  return <button type="submit" disabled={disabled} className="bg-cyan-200 text-cyan-700 font-bold py-2 px-4 rounded disabled:bg-gray-200 disabled:text-gray-500">{text}</button>;
}

export default SubmitButton;
