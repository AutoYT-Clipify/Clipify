import styles from './PrimaryButton.module.css'

const PrimaryButton = ({ text, classes, onClick }) => {
	return (
		<button
			onClick={onClick}
			// type="submit"
			className={`${styles.button} shadow-lg shadow-blue-500/50 medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[18.8rem] lg:h-[3.9rem] text-[5rem] lg:text-[1.5rem] py-[2rem] px-[9.5rem] lg:py-[1rem] lg:px-[2.5rem] ${classes}`}
		>
			{text}
			<img
				src="/static/btn-arrow.svg"
				className="ml-[9px] w-[32px] h-[37px] lg:w-[7.4px] lg:h-[12px]"
				alt="arrowRight"
			/>
		</button>
	)
}

export default PrimaryButton
