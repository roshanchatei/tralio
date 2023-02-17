import Dashboard from "../container/Dashboard/Dashboard";

export default function Home({dashboardPage, setDashboardPage}) {

    return (
        <>
            <Dashboard dashboardPage={dashboardPage} setDashboardPage={setDashboardPage} />
        </>
    )
}
