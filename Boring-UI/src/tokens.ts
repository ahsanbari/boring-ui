import { IDesignTokens } from "./IDesignTokens";
import { colorPalette } from "./colors";

export const designTokens: IDesignTokens = {
	backgroundColor: {
		default: {
			primary: colorPalette.purple.normal,
			secondary: colorPalette.purple.shaded,
			tertiary: colorPalette.purple.dark,
			disabled: colorPalette.purple.light,
		},
		secondary: {
			primary: "transparent",
			secondary: colorPalette.neutral.medium,
			tertiary: colorPalette.neutral.normal,
			disabled: colorPalette.neutral.light,
		},
		ghost: {
			primary: "transparent",
			secondary: colorPalette.neutral.lighter,
			tertiary: colorPalette.neutral.shaded,
			disabled: colorPalette.neutral.light,
		},
		baseColors: {
			white: colorPalette.baseColors.white,
			black: colorPalette.baseColors.black,
		},
	},

	borderRadius: {
		button: "8px",
		switch: "24px",
		toggleGroup: "12px",
		input: "4px",
	},

	elevation: {
		small: "0 3px 5px rgb(0 0 0 / 0.2)",
		medium: "0 0 50px #ccc",
	},

	text: {
		fontFamily: { family: "Inter" },
		fontWeight: {
			Thin: 100,
			ExtraLight: 200,
			Light: 300,
			Regular: 400,
			Medium: 500,
			SemiBold: 600,
			Bold: 700,
			ExtraBold: 800,
		},
		textColor: {
			white: colorPalette.baseColors.white,
			black: colorPalette.baseColors.black,
			accent: "",
		},
		textSize: {
			h1: "5rem",
			h2: "4rem",
			h3: "3rem",
			h4: "2.5rem",
			h5: "2rem",
			body2xl: "1.5rem",
			bodyxl: "1.25rem",
			body: "1rem",
			bodymd: "0.75rem",
			bodysml: "0.5rem",
		},
	},

	transition: {
		transitionSpeed: {
			faster: "0.15s all ease-in-out",
			fast: "0.2s all ease-in-out",
			normal: "0.33s all ease-in-out",
			slow: "0.5s all ease-in-out",
		},
	},
};
