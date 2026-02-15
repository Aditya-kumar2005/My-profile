"use client";
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex text-5xl text-center ">
      <h2>Something went wrong!</h2>
	  <p>The page you are looking not found</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
