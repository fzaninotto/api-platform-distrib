import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./admin.module.css";

const Admin = () => {
  // Load the admin client-side
  const [DynamicAdmin, setDynamicAdmin] = useState(<p>Loading...</p>);
  useEffect(() => {
    (async () => {
      const App = (await import("../../components/admin/App")).App;
      setDynamicAdmin(<App />);
    })();
  }, []);

  return (
    <div className={styles.admin}>
      <Head>
        <title>API Platform Admin</title>
      </Head>

      {DynamicAdmin}
    </div>
  );
};
export default Admin;
