import { useEffect, useState } from "react";
 
/**
 * React Hook to get the scroll percentage from the page, returns value from 0 to 100
 */
export function useReadingProgress() {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    function updateScrollCompletion() {
      // see how much we have scrolled
      const currentProgress = window.scrollY;
      // see how much total scroll is available
      let scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    }
    // add scroll event listener
    window.addEventListener("scroll", updateScrollCompletion);
 
    // remove scroll event listener on umount
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);
  return completion;
}

export default function PageReadIndicator() {
    const completion = useReadingProgress();
    return (
        <>
        <nav className="sticky z-50 bottom-0">
            <span
            id="progress-bar"
            style={{
                transform: `translateX(${completion - 100}%)`,
            }}
            className={`absolute bottom-0 w-full transition-transform duration-150 h-1 bg-pteal`}
            />
            {/* Rest of the NavBar */}
        </nav>
        </>
    )
}