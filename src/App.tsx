import { useState } from 'react';

import Input from 'components/Input';

export default function App() {
	const [isChecked, setIsChecked] = useState(false);

	const handleOnChange = (value: boolean) => setIsChecked(value);

	return (
		<div>
			{Array.from({ length: 10 }).map((_, index) => (
				<Input
					key={index}
					index={index}
					title={'Comments'}
					description={'Get notified when someones posts a comment on a posting.'}
					isChecked={isChecked}
					onChange={handleOnChange}
				/>
			))}
		</div>
	);
}
