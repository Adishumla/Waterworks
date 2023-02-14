import ChartDisplay from '@/components/ChartDisplay';
import ChartDataForm from '@/components/from/ChartDataForm';


export default async function Data() {
	const response = await fetch("http://data.goteborg.se/RiverService/v1.1/MeasureSites/4a9a0d23-8e98-4e64-81ac-3e01fed82bee?format=Json");
	const data = await response.json();

	const locations = data.map((point:any)=>{
		return point.Code;
	});


	return (
		<main className='bg-gradient-to-b from-white to-atlantic'>
			{/* send apikey to chartdisplay */}
			<ChartDisplay />
			<ChartDataForm locations={locations}/>
		</main>
	);
}
