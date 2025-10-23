/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface BackgroundPanelProps {
  onRemoveBackground: () => void;
  onGenerateBackground: (prompt: string) => void;
  isLoading: boolean;
}

const BackgroundPanel: React.FC<BackgroundPanelProps> = ({ onRemoveBackground, onGenerateBackground, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    if (prompt) {
      onGenerateBackground(prompt);
    }
  };

  return (
    <div className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex flex-col items-center gap-4 animate-fade-in backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-center text-gray-300">Background Tools</h3>
      
      <div className="w-full flex flex-col gap-4">
        <div>
            <p className="text-md text-center text-gray-400 mb-2">Step 1: Isolate the subject from the background.</p>
            <button
                onClick={onRemoveBackground}
                className="w-full bg-gradient-to-br from-purple-600 to-indigo-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner text-base disabled:from-indigo-800 disabled:to-indigo-700 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
                disabled={isLoading}
            >
                Remove Background
            </button>
        </div>

        <div className="w-full h-px bg-gray-600 my-2"></div>

        <div>
            <p className="text-md text-center text-gray-400 mb-2">Step 2: Generate a new background for the isolated subject.</p>
            <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }} className="w-full flex flex-col sm:flex-row items-center gap-2">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., 'a beach at sunset'"
                    className="flex-grow bg-gray-800 border border-gray-600 text-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition w-full disabled:cursor-not-allowed disabled:opacity-60 text-base"
                    disabled={isLoading}
                />
                <button 
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold py-4 px-8 text-base rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner disabled:from-blue-800 disabled:to-blue-700 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
                    disabled={isLoading || !prompt.trim()}
                >
                    Generate
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default BackgroundPanel;
