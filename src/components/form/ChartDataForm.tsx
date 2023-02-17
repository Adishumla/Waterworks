'use client';
import { useState } from 'react';

export default function ChartDataForm({
	locations,
	chartState,
	setChartState
}: {
	locations: any;
	chartState: any;
	setChartState: any;
}) {
	const [locationData, setLocationData] = useState(locations[0]);
	const [fromDate, setFromDate] = useState('2023-01-01');
	const [toDate, setToDate] = useState('2023-01-31');

	const options = locations.map((location: any) => {
		return (
			<option key={location} value={location}>
				{location}
			</option>
		);
	});

	const changeLocation = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setLocationData(event.target.value);
	};

	const changeFromDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFromDate(event.target.value);
	};

	const changeToDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		setToDate(event.target.value);
	};

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setChartState({
			location: locationData,
			fromDate: fromDate,
			toDate: toDate
		});
		// console.log(locationData);
		// console.log(fromDate);
		// console.log(toDate);
	};

	return (
		<form onSubmit={submit} className="w-full h-fit flex flex-col p-4 gap-4">
			<div className='w-full h-fit flex flex-col gap-4'>
				<label htmlFor="location" className=''>Location</label>
				<select name='' id='location' onChange={changeLocation} className='rounded-lg border-abyss border-2 px-8 h-10'>
					{options}
				</select>
			</div>
			<div className='w-full h-fit flex flex-col gap-2'>
				<p className=''>Dates</p>
				<div className='w-full flex flex-row justify-between gap-4'>
					<input type='date' name='from' id='' value={fromDate} onChange={changeFromDate} className="h-10 w-full rounded-lg border-abyss border-2 text-center" />
					<input type='date' name='to' id='' value={toDate} onChange={changeToDate} className="h-10 w-full rounded-lg border-abyss border-2 text-center" />
				</div>
			</div>
			<div className='w-full grid grid-cols-2 justify-items-end gap-4'>
				<input type='submit' value='filter' className='col-start-2 h-10 w-4/5  rounded-lg bg-baltic hover:cursor-pointer'/>
			</div>
		</form>
	);
}
