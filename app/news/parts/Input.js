const Input = ({ placeholder, type, name }) => {
	return (
		<div>
			<input
				placeholder={placeholder}
				type={type}
				name={name}
				className="rounded-lg flex-1 appearance-none border border-gray-600 w-full py-2 px-4 text-gray-200 placeholder-gray-600 shadow-sm text-base focus-outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
			/>
		</div>
	);
};
export default Input;
