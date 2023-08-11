export const dropdownData = [
	{
		fieldName: 'services',
		heading: 'Our services',
		title: 'Services',
		description: 'Unlocking possibilities and exceeding expectations through our comprehensive range of exceptional services.',
		menus: [
			{
				label: 'Expelee Audits',
				link: '/expelee-audits'
			},
			{
				label: 'Expe dApp Creator',
				link: '/expe-dapp-creator'
			},
			// {
			// 	label: 'Expelee Vetting',
			// 	link: '/expelee-veeting'
			// },
			{
				label: 'Expe Marketing',
				link: 'https://metanmore.expelee.com/'
			},
			{
				label: 'Contract Design',
				link: '/contract-design'
			},
			{
				label: 'Expe Diligence (KYC)',
				link: '/expe-diligence'
			},
			{
				label: 'Expe NFTs',
				link: '/expe-nft'
			}
		]
	},
	{
		fieldName: 'products',
		heading: 'Our solutions',
		title: 'Products',
		description: 'Unlock the potential of blockchain technology with our innovative solutions, leading the way towards a decentralized future.',
	
		menus: [
			{
				label: 'Expe Crypto Hunter',
				link: '/expe-crypto-hunter'
			},
			{
				label: 'Generate Token',
				link: '/generate-token'
			},
			// {
			// 	label: 'Expe Scam Hunter',
			// 	link: '/scam-hunter'
			// },

		]
	},
	{
		fieldName: 'about',
		heading: 'About company',
		title: 'Explore',
		description: `Gain deeper insights about the exceptional team and individuals driving Expelee's success and revolutionizing the blockchain industry`,
		menus: [
			// {
			// 	label: 'About Us',
			// 	link: '/about-us'
			// },
			{
				label: 'Team',
				link: '/team'
			},
			// {
			// 	label: 'Roadmap',
			// 	link: '/roadmap'
			// }, 
			{
				label: 'Testimonials',
				link: '/testimonials'
			}
		]
	},
	{
		fieldName: 'resource',
		heading: 'Resource',
		title: 'Explore',
		description: 'Empower your blockchain journey with our comprehensive suite of resources, including case studies & insightful blogs',
		menus: [
			{
				label: 'Case Studies',
				link: '/case-studies'
			},
			// {
			// 	label: 'News',
			// 	link: '/news'
			// },
			{
				label: 'Blogs',
				link: '/blogs'
			}
		]
	}

]

export const blogsData = [
	{
		image: '/static/blog-1.png',
		title: 'What is Nft all about ?',
		description: 'NFT or Non-fungible token is a digital asset that portrays real-world objects such as videos, music, art, in-game items, and even memes. You can buy and sell NFTs online more often with cryptocurrency. Furthermore, the same underlying software used in crypto encodes them.',
		link: "https://medium.com/@expelee/what-is-nft-all-about-4c103aa7763a",
		date: 'Sep 21, 2022'
	},
	{
		image: '/static/blog-2.png',
		title: 'The Historic Ethereum Merge is finally completed',
		description: 'The most awaited Ethereum Merge is finally Completed and Ethereum Blockchain made its historic shift from Proof-of-Work to Proof-to-Stake Consensus Mechanism. In this Blog we list some points to know more about Merge.',
		link: "https://medium.com/@expelee/the-historic-ethereum-merge-is-finally-completed-8c3981b7a8dd",
		date: ''
	},
	{
		image: '/static/blog-3.png',
		title: 'Breaking into the Blockchain Space',
		description: 'The financial and social globe has evolved in a very unique way in the past decade, making data the most precious asset one possesses. Data has become one of the sole reasons for a company’s growth and success. It helps one predict trends, identify opportunities and stay ahead in the competition by providing insights on customer behavior and market situations before they actually happen.',
		link: "https://medium.com/@expelee/breaking-into-the-blockchain-space-246e3940401d",
	},
	{
		image: '/static/blog-4.png',
		title: 'What is a Consortium Blockchain?',
		description: 'Blockchain is the latest and one of the most in-demand developments of the 21st century. Cryptocurrencies and bitcoins have become popular medium of exchange in the trading world today. Blockchain is a ledger and chain system-based network used for its application.',
		link: "https://medium.com/the-capital/what-is-a-consortium-blockchain-c336f011c781",
	},

]

export const howItWorksData = [
	{
		id: 1,
		title: 'Describe a topic',
		description: 'Simply provide our AI writer with 1-2 sentences on what to write, and it’ll understand and start writing for you.',
		image: '/1.gif',
		points: [
			'Include any SEO keywords you want to rank for',
			'Customize your copy with tone and perspective options',
			'Choose from 25+ languages'
		]
	},
	{
		id: 2,
		title: 'Batch generate quality',
		description: "Writing great content isn't easy. We've got a suite of tools that can help you create high quality content at scale.",
		image: '/2.gif',
		points: [
			'Content Detective helps you research up-to-date, factual content from the web',
			'Instantly batch generate product descriptions, SEO copy & more with our batch generation tool',
			'Blog article wizard takes you from title to a 1,000 word article in 5 minutes'
		]
	}
]

export const vsData = [
	{
		manually: [
			'Transcribe Your File',
			'Clean Up The Transcript',
			'Find Meaningful Highlights',
			'Pull Out Time Stamps',
			'Write Summaries & Bullets',
			'Write Content For Each Channel'
		],
		automatically: [
			'Perfectly Clean Transcript',
			'Timestamped Shownotes',
			'Key Topics, Bullets, & Summaries',
			'Ready To Use Quotes & Highlights',
			'Ready To Use Social Content',
			'ChatGPT for your Audio file'
		]
	}
]


const plans = ['basic', 'standard', 'pro']
export default plans


const features = {
	basic: {
		plan_name: 'basic',
		original_price: 10,
		pricing_monthly: 5,
		pricing_yearly: 60,
		features: [
			{
				name: 'Daily Summary',
				description:
					'Receive a concise book summary delivered to your inbox every day.',
			},
			{
				name: 'Morning Delivery',
				description:
					'Start your day with inspiration as summaries are emailed at 6:00 am.',
			},
			{
				name: 'Genre Selection',
				description:
					'Choose from a selection of one preferred genre to explore and enjoy focused content.',
			},
		],
	},
	standard: {
		plan_name: 'standard',
		original_price: 30,
		pricing_monthly: 20,
		pricing_yearly: 240,
		features: [
			{
				name: 'Daily Summary',
				description:
					'Receive up to three book summaries per day, providing a wealth of knowledge and insights.',
			},
			{
				name: 'Flexible Delivery',
				description:
					'Schedule the email delivery of summaries at your preferred time, ensuring they fit seamlessly into your reading routine.',
			},
			{
				name: 'Multiple Genre Selection',
				description:
					'Explore a diverse range of topics and interests with access to three genre selections, allowing for a broader reading experience.',
			},
		],
	},

	pro: {
		plan_name: 'pro',
		pricing_monthly: 25,
		original_price: 35,
		pricing_yearly: 300,
		features: [
			{
				name: 'Unlimited Book Summaries',
				description:
					'Immerse yourself in a world of knowledge with unlimited book summaries delivered straight to your inbox every day.',
			},
			{
				name: 'Customized Delivery',
				description:
					'Take control of your reading schedule by setting the preferred time for summary emails, ensuring they align with your routine.',
			},
			{
				name: 'Unlimited Genre Selection',
				description:
					'Indulge your curiosity and explore a vast array of genres with unlimited access to genre selections, allowing for a truly diverse reading experience..',
			},
		],
	},
}

const getDiscountedPrice = (price, discount) => {
	let discountAmount = (price * discount) / 100
	let discountedPrice = price - discountAmount
	return discountedPrice
}

const getYearlyOriginalPrice = (price) => price * 12

const DISCOUNT = 20
features.basic.discounted_yearly_price = getDiscountedPrice(
	features.basic.pricing_yearly,
	DISCOUNT
)
features.basic.yearly_original_price = getDiscountedPrice(
	features.basic.original_price * 12,
	DISCOUNT
)

features.standard.discounted_yearly_price = getDiscountedPrice(
	features.standard.pricing_yearly,
	DISCOUNT
)
features.standard.yearly_original_price = getDiscountedPrice(
	features.standard.original_price * 12,
	DISCOUNT
)

features.pro.discounted_yearly_price = getDiscountedPrice(
	features.pro.pricing_yearly,
	DISCOUNT
)
features.pro.yearly_original_price = getDiscountedPrice(
	features.pro.original_price * 12,
	DISCOUNT
)

export const getPlanFeatures = (feature) => {
	return features[feature]
}

