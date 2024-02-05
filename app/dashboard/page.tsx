import Card from "@/components/dashboard/Card/Card";
import CarouselWrapper from "@/components/dashboard/Carousel/CarouselWrapper";

const Dashboard = () => {
	return (
		<div>
			<header></header>
			<main>
				<CarouselWrapper>
					<Card isTaken={false} hour="08:00" name="Ketonal" dosage="120mg" />
					<Card isTaken={false} hour="10:00" name="Apap" dosage="30mg" />
					<Card isTaken={false} hour="12:00" name="Antibiotic" dosage="5mg" />
					<Card
						isTaken={false}
						hour="16:00"
						name="Paracetamol"
						dosage="120mg"
					/>
					<Card isTaken={false} hour="22:00" name="Ibuprom" dosage="3mg" />
					<Card isTaken={false} hour="22:00" name="Ibuprom" dosage="3mg" />
					<Card isTaken={false} hour="22:00" name="Ibuprom" dosage="3mg" />
					<Card isTaken={false} hour="22:00" name="Ibuprom" dosage="3mg" />
					<Card isTaken={false} hour="22:00" name="Ibuprom" dosage="3mg" />
					<Card isTaken={false} hour="22:00" name="Ibuprom" dosage="3mg" />
					<Card isTaken={false} hour="22:00" name="Ibuprom" dosage="3mg" />
					<Card isTaken={false} hour="22:00" name="Ibuprom" dosage="3mg" />
				</CarouselWrapper>
			</main>
		</div>
	);
};

export default Dashboard;
