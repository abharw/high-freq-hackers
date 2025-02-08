"use client";

import { useState } from "react";
import { incrementCount } from "@/lib/db";

const categories = ["cardboard", "glass", "metal", "paper", "plastic", "trash"];

export default function IncrementButtons() {
  const [loading, setLoading] = useState("");

  const handleIncrement = async (category: string) => {
    setLoading(category);
    await incrementCount(category);
    setLoading(""); // Reset loading state after update
  };

  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleIncrement(category)}
          disabled={loading === category}
          className={`p-3 rounded bg-blue-500 text-white hover:bg-blue-600 ${
            loading === category ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading === category ? "Updating..." : `+1 ${category}`}
        </button>
      ))}
    </div>
  );
}
