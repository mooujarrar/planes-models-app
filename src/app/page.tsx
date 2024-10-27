'use client'

import A321 from "./components/A321";
import A350 from "./components/A350";
import A380 from "./components/A380";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex space-x-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-72">
            <A350 />
            <h2 className="text-lg font-semibold mb-2">Card 1</h2>
            <p className="text-gray-600">
              This is the content of the first card.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg w-72">
            <A380 />
            <h2 className="text-lg font-semibold mb-2">Card 2</h2>
            <p className="text-gray-600">
              This is the content of the second card.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg w-72">
            <A321 />
            <h2 className="text-lg font-semibold mb-2">Card 3</h2>
            <p className="text-gray-600">
              This is the content of the third card.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
