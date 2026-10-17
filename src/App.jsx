import DashboardCard from "./components/DashboardCard.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";
import "./App.css";

const statistics = [
  {
    title: "Total Users",
    value: "1,204",
    description: "Registered users",
    change: "+12.8%",
    period: "vs. last month",
  },
  {
    title: "Total Projects",
    value: "48",
    description: "Across all workspaces",
    change: "+4.3%",
    period: "vs. last month",
  },
  {
    title: "Revenue",
    value: "$12,450",
    description: "Gross this month",
    change: "+8.2%",
    period: "vs. last month",
  },
  {
    title: "Active Sessions",
    value: "326",
    description: "Users active right now",
    change: "+2.4%",
    period: "vs. last hour",
  },
];

const revenueMonths = [
  { label: "Jan", height: "42%" },
  { label: "Feb", height: "56%" },
  { label: "Mar", height: "49%" },
  { label: "Apr", height: "68%" },
  { label: "May", height: "61%" },
  { label: "Jun", height: "82%" },
  { label: "Jul", height: "72%" },
  { label: "Aug", height: "94%" },
];

const activities = [
  {
    initials: "MC",
    avatarClass: "activity-avatar--blue",
    person: "Maya Chen",
    action: "updated",
    subject: "Customer Portal",
    time: "12 min ago",
    status: "Updated",
    statusClass: "activity-status--blue",
  },
  {
    initials: "JL",
    avatarClass: "activity-avatar--mint",
    person: "Jonah Lee",
    action: "deployed",
    subject: "Mobile App v2.4",
    time: "1 hr ago",
    status: "Deployed",
    statusClass: "activity-status--green",
  },
  {
    initials: "AP",
    avatarClass: "activity-avatar--peach",
    person: "Ava Patel",
    action: "invited 3 teammates to",
    subject: "Workspace",
    time: "3 hr ago",
    status: "Team",
    statusClass: "activity-status--orange",
  },
  {
    initials: "EB",
    avatarClass: "activity-avatar--lavender",
    person: "Ethan Brooks",
    action: "created",
    subject: "API Integration",
    time: "Yesterday",
    status: "Created",
    statusClass: "activity-status--gray",
  },
];

function App() {
  return (
    <DashboardLayout>
      <section className="welcome-row" aria-labelledby="welcome-title">
        <div>
          <p className="welcome-eyebrow">MONDAY, AUGUST 19, 2024</p>
          <h1 id="welcome-title">
            Good morning, Alex <span aria-hidden="true">✦</span>
          </h1>
          <p className="welcome-copy">
            Here&apos;s what&apos;s happening across your workspace today.
          </p>
        </div>
        <button className="date-button" type="button">
          <span aria-hidden="true">▦</span> Last 30 days{" "}
          <span className="date-caret" aria-hidden="true">
            ⌄
          </span>
        </button>
      </section>

      <section className="overview-section" aria-labelledby="overview-title">
        <div className="section-heading">
          <div>
            <h2 id="overview-title">Overview</h2>
            <p>Your key metrics at a glance</p>
          </div>
          <a className="text-link" href="#activity">
            View reports <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="stat-grid">
          {statistics.map((statistic) => (
            <DashboardCard
              key={statistic.title}
              title={statistic.title}
              value={statistic.value}
              description={statistic.description}
            >
              <span className="stat-change">
                <span className="trend-arrow" aria-hidden="true">
                  ↗
                </span>{" "}
                {statistic.change}
              </span>
              <span className="stat-period">{statistic.period}</span>
            </DashboardCard>
          ))}
        </div>
      </section>

      <div className="dashboard-lower-grid">
        <section
          className="panel revenue-panel"
          aria-labelledby="revenue-title"
        >
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">PERFORMANCE</p>
              <h2 id="revenue-title">Revenue over time</h2>
            </div>
            <button
              className="panel-menu"
              type="button"
              aria-label="Revenue chart options"
            >
              ···
            </button>
          </div>
          <div className="chart-summary">
            <strong>$84,254</strong>
            <span>
              <span className="trend-arrow" aria-hidden="true">
                ↗
              </span>{" "}
              8.2% <span>vs. previous period</span>
            </span>
          </div>
          <div
            className="revenue-chart"
            role="img"
            aria-label="Revenue increased overall from January through August"
          >
            <div className="chart-guides" aria-hidden="true">
              <span>$15k</span>
              <span>$10k</span>
              <span>$5k</span>
              <span>$0</span>
            </div>
            <div className="chart-bars" aria-hidden="true">
              {revenueMonths.map((month, index) => (
                <div className="chart-column" key={month.label}>
                  <div
                    className={`chart-bar${index === revenueMonths.length - 1 ? " chart-bar--current" : ""}`}
                    style={{ height: month.height }}
                  />
                  <span>{month.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="panel activity-panel"
          id="activity"
          aria-labelledby="activity-title"
        >
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">WORKSPACE</p>
              <h2 id="activity-title">Recent activity</h2>
            </div>
            <a className="panel-link" href="#activity">
              See all <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="activity-list">
            {activities.map((activity) => (
              <li
                className="activity-item"
                key={`${activity.person}-${activity.subject}`}
              >
                <span
                  className={`activity-avatar ${activity.avatarClass}`}
                  aria-hidden="true"
                >
                  {activity.initials}
                </span>
                <div className="activity-copy">
                  <p>
                    <strong>{activity.person}</strong> {activity.action}{" "}
                    <strong>{activity.subject}</strong>
                  </p>
                  <span>{activity.time}</span>
                </div>
                <span className={`activity-status ${activity.statusClass}`}>
                  {activity.status}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default App;
