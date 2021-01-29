import BreadCrumbs from "./components/BreadCrumbs";
import DivisionSummary from "./components/DivisionSummary";
import ModuleHistory from "./components/ModuleHistory";
import Navigation from "./components/Navigation";
import SummaryCards from "./components/SummaryCards";
import Table from "./components/Table/Table";

const App = () => {
	return (
		<div className="App">
			<Navigation />
			<BreadCrumbs />
			<SummaryCards />
			<section className="mx-3 mt-4">
				<div className="row">
					<div className="col-xl-3 col-md-auto">
						<div className="row">
							<div className="col-12 col-md-6 col-xl-12">
								<DivisionSummary />
							</div>
							<div className="col-12 col-md-6 col-xl-12">
								<ModuleHistory />
							</div>
						</div>
					</div>
					<div className="col-xl-9 col-lg-12">
						<Table />
					</div>
				</div>
			</section>
		</div>
	);
};

export default App;
