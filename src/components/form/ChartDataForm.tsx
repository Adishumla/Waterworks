'use client';
import { useState } from 'react';

export default function ChartDataForm({
	locations,
	chartState,
	setChartState,
	chartLoaderState
}: {
	locations: any;
	chartState: any;
	setChartState: any;
	chartLoaderState: any;
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
		if (!chartLoaderState) {
			setChartState({
				location: locationData,
				fromDate: fromDate,
				toDate: toDate
			});
		}
	};

	return (
		<form onSubmit={submit} className='w-full h-fit flex flex-col pt-4 gap-4'>
			<div className='w-full h-fit flex flex-col'>
				<label htmlFor='location' className=''>
					Location
				</label>
				<select name='' id='location' onChange={changeLocation} className='rounded-md border-abyss border h-8'>
					{options}
				</select>
			</div>
			<div className='w-full h-fit flex flex-col'>
				<p className=''>Dates</p>
				<div className='w-full flex flex-row justify-between gap-2'>
					<input
						type='date'
						name='from'
						id=''
						value={fromDate}
						onChange={changeFromDate}
						className='h-8 w-full rounded-md border-abyss border text-center'
					/>
					<input
						type='date'
						name='to'
						id=''
						value={toDate}
						onChange={changeToDate}
						className='h-8 w-full rounded-md border-abyss border text-center'
					/>
				</div>
			</div>
			<div className='w-full grid grid-cols-2 justify-items-end gap-4'>
				<input
					type='submit'
					value={chartLoaderState ? 'loading...' : 'filter'}
					className='col-start-2 h-8 w-4/5  rounded-md bg-baltic hover:cursor-pointer'
				/>
			</div>
		</form>
	);
}
