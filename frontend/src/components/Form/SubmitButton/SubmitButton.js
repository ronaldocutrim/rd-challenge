import React from 'react';

function SubmitButton({ text, disabled }) {
  return <button type="submit" disabled={disabled} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-200">{text}</button>;
}

export default SubmitButton;
