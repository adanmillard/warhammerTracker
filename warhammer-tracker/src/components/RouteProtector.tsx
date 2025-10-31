import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "../ults/CountdownTimer";

export default function RouterProtector({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setTimeout(() => navigate('/'), 5000);
        return
      } else {
        setUser(currentUser);
      }

      setLoading(false);
    })
    return () => unsubscribe();
  }, [navigate])

  if (loading) return <div>Please sign into the app, you're being redirected in: <CountdownTimer/></div>

  return user ? <>{children}</> : null;

}
