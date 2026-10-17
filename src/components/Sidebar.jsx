import "./Sidebar.css";

const navigationItems = [
  { label: "Dashboard", icon: "▦", href: "#dashboard", active: true },
  { label: "Projects", icon: "◫", href: "#projects" },
  { label: "Analytics", icon: "◷", href: "#analytics" },
  { label: "Settings", icon: "⚙", href: "#settings" },
  { label: "Profile", icon: "○", href: "#profile" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <a
        className="sidebar-brand"
        href="#dashboard"
        aria-label="Northstar home"
      >
        <span className="brand-mark" aria-hidden="true">
          n
        </span>
        <span>northstar</span>
      </a>
      <div className="workspace-switcher">
        <span className="workspace-avatar" aria-hidden="true">
          S
        </span>
        <span className="workspace-copy">
          <strong>Studio North</strong>
          <span>Free workspace</span>
        </span>
        <span className="workspace-caret" aria-hidden="true">
          ⌄
        </span>
      </div>
      <p className="sidebar-label">WORKSPACE</p>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <a
            className={`sidebar-link${item.active ? " sidebar-link--active" : ""}`}
            href={item.href}
            key={item.label}
            aria-current={item.active ? "page" : undefined}
          >
            <span className="sidebar-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span>{item.label}</span>
            {item.label === "Projects" && <span className="nav-count">8</span>}
          </a>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="plan-card">
          <span className="plan-icon" aria-hidden="true">
            ✦
          </span>
          <div>
            <strong>Upgrade your plan</strong>
            <span>Unlock more for your team</span>
          </div>
          <span className="plan-arrow" aria-hidden="true">
            →
          </span>
        </div>
        <div className="sidebar-user">
          <span className="sidebar-user-avatar">AJ</span>
          <span className="sidebar-user-copy">
            <strong>Alex Johnson</strong>
            <span>alex@northstar.io</span>
          </span>
          <span className="user-menu-dots" aria-hidden="true">
            ···
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
