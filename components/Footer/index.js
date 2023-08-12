import Link from "next/link"
import { useEffect } from "react"

const Footer = ({social}) => {

	return (
		<footer>
			<div className="mt-[15rem] lg:mt-[10rem flex flex-wrap flex-col lg:flex-row mt-[10rem] px-[5rem] lg:px-0">
				<div className="flex-1 pr-[12rem] gap-[1.4rem]">
					<img
						src={'/static/yt-logo.png'}
						alt="Footer Logo"
						className="w-[25rem] lg:w-[11.3rem]"
					/>
					<p className="regular text-[#444444] text-[6rem] lg:text-[1.7rem]">
					On the way to Automate youtube videos that will empower creator Industry in upcoming years
					</p>
				</div>
				{/* Col - 1 */}
				<div className=" flex-1 flex flex-col gap-[2.7rem] mt-[10rem] lg:mt-[0]">
					<div>
						<p className="regular link cursor-pointer text-[6rem] lg:text-[1.7rem] ">
						<Link href="#services">Services</Link>
						</p>
					</div>
					<div className="flex flex-col gap-[1rem] text-[6rem] lg:text-[1.7rem] text-[#000000]">
					<p className="regular link cursor-pointer">
					<Link href="#pricing">Pricing</Link>
						</p>
					</div>
				</div>
				{/* Col- 2 */}
				<div className="flex-1 flex flex-col gap-[2.7rem] mt-[10rem] lg:mt-[0]">
					<div>
					<p className="regular link cursor-pointer text-[6rem] lg:text-[1.7rem]">
						<Link href="#solutions">Solutions</Link>
						</p>

					</div>
					<div className="flex flex-col gap-[1rem] text-[6rem] lg:text-[1.7rem]">
					<p className="regular link cursor-pointer">
					<Link href="#testimonials">Testimonials</Link>
					</p>
					</div>
				</div>

				{/* Col - 3 */}
				<div className="flex-1 flex flex-col gap-[2.7rem] mt-[10rem] lg:mt-[0]">
					<div>
						<h4 className="medium text-[6rem] lg:text-[1.9rem] text-[#000000]">
							Connect with us
						</h4>
					</div>
					<div className="flex flex-col gap-[1rem]">
						<div className="flex gap-[0.4rem]">
							<img
								src={'/static/mail.svg'}
								alt="email"
								className="w-[4.3rem] lg:w-[2.4rem]"
							/>
							<div className="flex items-center gap-[1.2rem] text-[5rem] lg:text-[1.9rem] cursor-pointer link" onClick={() => window.location = 'mailto:business@expelee.com'}>
								<h4 className="medium">Email:</h4>
								<p className="regular pt-[0.2rem]">business@autoyt.com</p>
							</div>
						</div>
						<div className="flex gap-[3rem] lg:gap-[1rem]">
						{/* <Link href="#"><img className={`w-[9rem] lg:w-[3rem] lg:h-[3rem]`} src={'/static/github.svg'} alt='githubin' /></Link> */}
						<Link href={social?.instagram || ''}><img className={`w-[9rem] lg:w-[3rem] lg:h-[3rem]`} src={'/static/instagram.svg'} alt='instagramin' /></Link>
						<Link href={social?.discord || ''}><img className={`w-[9rem] lg:w-[3rem] lg:h-[3rem]`} src={'/static/discord.svg'} alt='discordin' /></Link>
						<Link href={social?.medium || ''}><img className={`w-[9rem] lg:w-[3rem] lg:h-[3rem]`} src={'/static/medium.svg'} alt='mediumin' /></Link>
					</div>
					<div className="mt-[4rem] lg:mt-[2rem]">
					<p className="medium text-[4rem] lg:text-[1.5rem] pt-[0.2rem]"> Silicon Oasis,</p>
					<p className="medium text-[4rem] lg:text-[1.5rem] pt-[0.2rem]">DDP, Building A2, </p>
					<p className="medium text-[4rem] lg:text-[1.5rem] pt-[0.2rem]">Canada</p>
					<p className="medium text-[4rem] lg:text-[1.5rem] pt-[0.2rem]">+971 558957731 </p>
					</div>
				</div>
			</div>
			</div>
			<div className="px-[11.8rem] mt-[5rem] lg:mt-[2rem] py-[2rem] ">
				<hr />
				<p className=" flex justify-center medium text-[5rem] lg:text-[1.7rem] mt-[2.1rem]">
					Copyright 2023, All Rights Reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
