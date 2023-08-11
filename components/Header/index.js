import Image from 'next/image'
import PrimaryButton from '../PrimaryButton'
// import SecondaryButton from '../SecondaryButton'
import styles from './Header.module.css'
import { Fragment, useEffect, useState } from 'react'
// import Dropdown from './Dropdown'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MobileDropDown from './MobileDropdown'
import { motion } from 'framer-motion'
import { dropdownData } from '../../constants'

const Navbar = () => {
	const [selectedMenu, setSelectedMenu] = useState(null)
	const [selectedData, setSelectedData] = useState(null)
	const [toogle, setToogle] = useState(false)
	const router = useRouter()
	const path = router.pathname

	const handleMenuSelect = (menu) => {
		if (menu === selectedMenu) {
			setSelectedMenu(null)
			setSelectedData(null)
		} else {
			setSelectedMenu(menu)
		}
	}

	useEffect(() => {
		if (selectedMenu) {
			const selectedData = dropdownData.filter(
				(item) => item.fieldName === selectedMenu
			)[0]
			setSelectedData(selectedData)
		}
	}, [selectedMenu])

	useEffect(() => {
		if (!toogle) {
			let inputs = document.getElementById('burger')
			inputs.checked = false

		}
			
	}, [toogle])
	//px-[3.6rem] lg:px-[15rem]
	return (
		<Fragment>
			<nav
				className={`${styles.navbar}  w-full h-[15rem] lg:h-[6.2rem] flex justify-center items-center px-[5rem] lg:px-[0rem] py-[20px] z-50`}
			>
				<div className="flex w-[140rem] justify-between items-center py-[9px]">
					<motion.div
						initial={{
							x: -500,
							opacity: 0,
							scale: 0.5,
						}}
						animate={{
							x: 0,
							opacity: 1,
							scale: 1,
						}}
						transition={{
							duration: 1.5,
						}}
					>
						<Link href={'/'}>
							<img
								className="w-[30rem] lg:w-[100%]"
								src="/static/logo.png"
								alt="Expelee Logo"
							/>
						</Link>
					</motion.div>
					<ul className="hidden lg:flex align-middle medium">
						<li className="link" onClick={() => setSelectedMenu(null)}>
							<Link href={'/'}>Home</Link>
						</li>
						<li
							className="link"
						>
							<Link href="#services">Services</Link>
							{/* <img
								alt=""
								src={
									selectedMenu === 'services'
										? `/static/menuUpArrow.svg`
										: `/static/icon-navArrowDown.svg`
								}
							/> */}
						</li>
						<li
							className="link"
						>
							<Link href="#solutions">Solutions</Link>
							{/* <img
								alt=""
								src={
									selectedMenu === 'products'
										? `/static/menuUpArrow.svg`
										: `/static/icon-navArrowDown.svg`
								}
							/> */}
						</li>
						<li
						className="link"
						>
						<Link href="#pricing">Pricing</Link>
							{/* <img
								alt=""
								src={
									selectedMenu === 'about'
										? `/static/menuUpArrow.svg`
										: `/static/icon-navArrowDown.svg`
								}
							/> */}
						</li>

						<li className="link">
							<Link href="#testimonials">Testimonials</Link>
						</li>
					</ul>
					<motion.div
						initial={{
							x: 500,
							opacity: 0,
							scale: 0.5,
						}}
						animate={{
							x: 0,
							opacity: 1,
							scale: 1,
						}}
						transition={{
							duration: 1.5,
						}}
						className="hidden lg:block"
					>
						<Link href={'https://t.me/Ritz_Expelee'}>
							<PrimaryButton text="Get Started" />
						</Link>
					</motion.div>
					<label className={`${styles.burger} lg:hidden`} htmlFor="burger">
						<input
							type="checkbox"
							id="burger"
							onClick={() => setToogle((currentValue) => !currentValue)}
						/>
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>
			</nav>
			{/* {selectedMenu && selectedData && (
				<Dropdown
					setSelectedMenu={setSelectedMenu}
					selectedData={selectedData}
					handleMenuSelect={handleMenuSelect}
				/>
			)} */}
			{toogle && <MobileDropDown setToogle={setToogle} />}
		</Fragment>
	)
}

export default Navbar
