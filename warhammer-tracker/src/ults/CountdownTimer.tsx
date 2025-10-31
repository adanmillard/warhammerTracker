import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      })
    }, 1000)

    return () => clearInterval(timer);
  }, [])

  return (
    <>{ count }</>
  )

}
