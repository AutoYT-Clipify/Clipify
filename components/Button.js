const Button = ({ type, text, handleOnClick }) => {
	const buttonStyle =
		type === 'solid'
			? 'bg-black text-white'
			: type === 'outlined'
			? 'bg-white text-grey-light1 border border-grey-light3'
			: ''
	return (
		<button
			className={`${buttonStyle} w-[24rem] h-[10rem] lg:w-[13.2rem] lg:h-[5.1rem] medium text-[3rem] lg:text-[2.4rem] rounded-[5px]`}
			onClick={handleOnClick}
		>
			{text}
		</button>
	)
}

export default Button
