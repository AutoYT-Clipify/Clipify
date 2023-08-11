import styles from './PrimaryButton.module.css'

const PrimaryButton = ({ text, classes, onClick }) => {
    return (
        <button
            onClick={onClick}
            // type="submit"
            className={`${styles.buttonInverted} shadow-lg shadow-blue-500/50 border-[5px] lg:border-[1px] border-solid  border-[#d0d7e7] medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[18.8rem] lg:h-[3.9rem] text-[5rem] lg:text-[1.5rem] py-[2rem] px-[9.5rem] lg:py-[1rem] lg:px-[2.5rem] ${classes}`}
        >
                  <img
                src="/static/play.svg"
                className= "mr-[9px] w-[32px] h-[37px] lg:w-[27.4px] lg:h-[25px]"
                alt="arrowRight"
            />
                 {text}
           
       

        </button>
    )
}

export default PrimaryButton
