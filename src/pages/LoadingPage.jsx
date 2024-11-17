const LoadingPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div>
        <span className="loading loading-infinity loading-xs"></span>
        <span className="loading loading-infinity loading-sm"></span>
        <span className="loading loading-infinity loading-md"></span>
        <span className="loading loading-infinity loading-lg"></span>
      </div>

      <br />

      <div>
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    </div>
  );
};

export default LoadingPage;
