import Card from "@/components/dashboard/Card/Card";

const Dashboard = () => {
	return (
		<>
			<div>Hello from dashboard!</div>
			<Card isTaken={false} hour="08.00" name="Ketonal" dosage="120mg" />
		</>
	);
};

export default Dashboard;
