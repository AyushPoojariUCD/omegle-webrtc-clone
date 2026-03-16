import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/room">Room</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
}