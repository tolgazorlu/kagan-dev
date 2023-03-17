export default function Card({ asset }: { asset: any }) {
  return (
    <div className="w-4/6 max-w-sm border border-gray-200 rounded-lg shadow">
      <a href={asset.href}>
        <img className="rounded-t-lg" src={asset.url} alt="product image" />
      </a>
    </div>
  );
}