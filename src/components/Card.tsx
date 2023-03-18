import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode
  // any props that come into the component
}
export default function Card({asset}: {asset: any}) {

  console.log(asset.href, asset.url)
  return (
    <div className="w-4/6 max-w-sm border border-gray-200 rounded-lg shadow">
      <a href={asset.href}>
        <img className="rounded-t-lg" src={asset.url} alt="product image" />
      </a>
    </div>
  );
}
