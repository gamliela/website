import { useImageLoader } from "./useImageLoader";
import styles from "./ImageLoader.module.css";

function ImageLoader() {
  const { fetchImage, cancel, loading, imageSrc, error } = useImageLoader();

  return (
    <div className={styles.ImageLoader}>
      <p>
        <button onClick={fetchImage} disabled={loading}>
          Load image
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={cancel} disabled={!loading}>
          Cancel
        </button>
      </p>
      {error && (
        <div data-testid="error">
          {error.name !== "AbortError" && <p>An error has occurred.</p>}
          {error.name === "AbortError" && <p>Timeout error.</p>}
        </div>
      )}
      {imageSrc && (
        <p>
          <img src={imageSrc} alt="random stuff from httpbin.org" />
        </p>
      )}
    </div>
  );
}

export { ImageLoader };
