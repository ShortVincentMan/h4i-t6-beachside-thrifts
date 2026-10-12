export default function ProductsLoadingIndicator() {
  return (
    <div className="products-page-loading" role="status" aria-live="polite">
      <div className="products-page-loading-shelf" aria-hidden="true">
        <span className="products-page-loading-card products-page-loading-card--one">
          <span />
          <i />
          <i />
        </span>
        <span className="products-page-loading-card products-page-loading-card--two">
          <span />
          <i />
          <i />
        </span>
        <span className="products-page-loading-card products-page-loading-card--three">
          <span />
          <i />
          <i />
        </span>
      </div>
      <span className="products-page-loading-message">Loading...</span>
      <span className="products-page-loading-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}
