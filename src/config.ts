import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "超 \u2764\uFE0F 悦 的小屋",
	subtitle: "",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 355, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/banner5.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/favicon-CY-128.png", // Path of the favicon, relative to the /public directory
			//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "128x128", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		{
			name: "我们", // 自定义名字
			url: "/", // 指向首页
			external: false, // 内部链接
		},
		{
			name: "时间线", // 自定义名字
			url: "/archive/", // 指向首页
			external: false, // 内部链接
		},
		LinkPreset.About,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/ProfilePicture.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "超 \u2764\uFE0F 悦",
	bio: "Every heartbeat writes your name in the silence of my soul.",
	links: [
		{
			name: "weibo",
			icon: "fa6-brands:weibo", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://weibo.com/u/6745822881",
		},
		{
			name: "douyin",
			icon: "fa6-brands:tiktok",
			url: "https://www.douyin.com/user/MS4wLjABAAAAQHXPO7hu9243qpyWKE3ILsmFJZ3b29_LRv3tKQQGW2Y",
		},
		{
			name: "bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/350819920",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "仅供个人记录，禁止转载",
	// url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
	url: "",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
