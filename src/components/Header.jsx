import "./Header.css";

function Header() {
    return (
        <header className="topbar">
            <div className="breadcrumb">
                <span>Workspace</span>
                <span className="breadcrumb-separator" aria-hidden="true">
                    /
                </span>
                <strong>Dashboard</strong>
            </div>
            <form
                className="header-search"
                role="search"
                onSubmit={(event) => event.preventDefault()}
            >
                <span className="search-icon" aria-hidden="true">
                    ⌕
                </span>
                <input
                    type="search"
                    aria-label="Search workspace"
                    placeholder="Search anything..."
                />
                <kbd>⌘ K</kbd>
            </form>
            <div className="header-actions">
                <button
                    className="notification-button"
                    type="button"
                    aria-label="Notifications"
                >
                    <span aria-hidden="true">🔔</span>
                    <i aria-hidden="true" />
                </button>
                <div className="header-user">
                    <span className="header-avatar" aria-hidden="true">
                        AJ
                    </span>
                    <span className="header-user-copy">
                        <strong>Alex Johnson</strong>
                        <span>Administrator</span>
                    </span>
                    <span className="header-user-caret" aria-hidden="true">
                        ⌄
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;
