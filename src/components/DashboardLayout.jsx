import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import "./DashboardLayout.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-shell">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <main className="dashboard-content">{children}</main>
        <footer className="dashboard-footer">
          <span>© 2024 Northstar, Inc.</span>
          <div>
            <a href="#help">Help center</a>
            <a href="#privacy">Privacy</a>
            <a href="#status">
              <span className="status-dot" /> All systems operational
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DashboardLayout;
