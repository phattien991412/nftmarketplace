import React from "react";

const Browse = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl py-2">Browse Marketplace</h2>
        <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
      </div>
      <div className="mt-8">
        <input
          className="w-full p-4 rounded-[20px] border border-secondary bg-primary"
          type="text"
          placeholder="Search your favourite NFTs"
        />
      </div>
    </div>
  );
};

export default Browse;
