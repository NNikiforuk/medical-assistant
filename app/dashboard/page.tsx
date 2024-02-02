import Card from "@/components/dashboard/Card/Card";

const Dashboard = () => {
	return (
		<>
			<div>Hello from dashboard!</div>
			<Card isTaken={true} hour="08.00" name="Ketonal" dosage="120mg" />
			<Card isTaken={false} hour="10.00" name="Apap" dosage="30mg" />
			<Card isTaken={false} hour="12.00" name="Antibiotics" dosage="5mg" />
			<Card isTaken={false} hour="16.00" name="Paracetamol" dosage="120mg" />
			<Card isTaken={false} hour="22.00" name="Ibuprom" dosage="3mg" />
		</>
	);
};

export default Dashboard;
