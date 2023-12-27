import { CheckCircleIcon } from '@heroicons/react/24/outline';

import { cn } from 'utilities/theme.utils';

type TInputProps = {
	title: string;
	index: number;
	description: string;
	isChecked: boolean;
	onChange: (value: boolean) => void;
};

export default function Input({ title, index, description, isChecked, onChange }: TInputProps) {
	return (
		<div className={`flex gap-2`}>
			<label className={`relative mt-1 flex h-6 w-6 cursor-pointer rounded-full`} htmlFor={`todo${index}`}>
				<input
					id={`todo${index}`}
					type="checkbox"
					onChange={(event) => onChange(event.target.checked)}
					className={`peer h-full w-full cursor-pointer appearance-none rounded-full border border-slate-300 bg-slate-100 transition-all checked:border-lime-500 checked:bg-transparent hover:border-lime-500 hover:bg-lime-100`}
				/>
				<span
					className={`pointer-events-none absolute h-full w-full rounded-full opacity-0 transition-opacity peer-checked:opacity-100`}
				>
					<CheckCircleIcon className={`stroke-2 text-lime-500`} />
				</span>
			</label>

			<div className={cn(isChecked && 'line-through')}>
				<p className={cn(`font-medium`)}>{title}</p>
				<p className={`text-sm text-slate-500`}>{description}</p>
			</div>
		</div>
	);
}
