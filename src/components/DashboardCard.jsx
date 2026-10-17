import "./DashboardCard.css";

function DashboardCard({ title, value, description, children }) {
  return (
    <article className="dashboard-card">
      <div className="dashboard-card-heading">
        <h3>{title}</h3>
        <span className="dashboard-card-mark" aria-hidden="true">
          ↗
        </span>
      </div>
      <p className="dashboard-card-value">{value}</p>
      <p className="dashboard-card-description">{description}</p>
      <div className="dashboard-card-children">{children}</div>
    </article>
  );
}

export default DashboardCard;
