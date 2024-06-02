export default function Shimmer() {
  return (
    <div className="absolute top-0 left-0 w-full h-full animate-loading">
      <div className="w-1/2 h-full bg-opacity-20 transform skew-x-20 shadow-skew"></div>
    </div>
  );
}
