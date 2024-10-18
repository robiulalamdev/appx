import { Redirect } from "expo-router";
import { useSelector } from "react-redux";

export default function App() {
  const { user } = useSelector((state) => state.persisted.user);
  return <>{user ? <Redirect href="(main)" /> : <Redirect href="(auth)" />}</>;
}
